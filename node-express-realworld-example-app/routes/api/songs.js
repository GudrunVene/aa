var router = require('express').Router();
var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload article objects on routes with ':article'
router.param('song', function(req, res, next, slug) {
    Song.findOne({ slug: slug})
        .populate('author')
        .then(function (song) {
            if (!song) { return res.sendStatus(404); }

            req.song = song;

            return next();
        }).catch(next);
});


router.get('/', auth.optional, function(req, res, next) {
    var query = {};
    var limit = 20;
    var offset = 0;

    if(typeof req.query.limit !== 'undefined'){
        limit = req.query.limit;
    }

    if(typeof req.query.offset !== 'undefined'){
        offset = req.query.offset;
    }


    Promise.all([
        req.query.author ? User.findOne({username: req.query.author}) : null
    ]).then(function(results){
        var author = results[0];

        if(author){
            query.author = author._id;
        }



        return Promise.all([
            Song.find(query)
                .limit(Number(limit))
                .skip(Number(offset))
                .sort({createdAt: 'desc'})
                .populate('author')
                .exec(),
            Song.count(query).exec(),
            req.payload ? User.findById(req.payload.id) : null,
        ]).then(function(results){
            var songs = results[0];
            var songsCount = results[1];
            var user = results[2];

            return res.json({
                songs: songs.map(function(song){
                    return song.toJSONFor(user);
                }),
                songsCount: songsCount
            });
        });
    }).catch(next);
});

router.get('/feed', auth.required, function(req, res, next) {
    var limit = 20;
    var offset = 0;

    if(typeof req.query.limit !== 'undefined'){
        limit = req.query.limit;
    }

    if(typeof req.query.offset !== 'undefined'){
        offset = req.query.offset;
    }

    User.findById(req.payload.id).then(function(user){
        if (!user) { return res.sendStatus(401); }

        Promise.all([
            Song.find({ author: {$in: user.following}})
                .limit(Number(limit))
                .skip(Number(offset))
                .populate('author')
                .exec(),
            Song.count({ author: {$in: user.following}})
        ]).then(function(results){
            var songs = results[0];
            var songsCount = results[1];

            return res.json({
                songs: songs.map(function(song){
                    return song.toJSONFor(user);
                }),
                songsCount: songsCount
            });
        }).catch(next);
    });
});

router.post('/', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
        if (!user) { return res.sendStatus(401); }

        var song = new Song(req.body.song);

        song.author = user;

        return song.save().then(function(){
            console.log(song.author);
            return res.json({song: song.toJSONFor(user)});
        });
    }).catch(next);
});

// return a article
router.get('/:song', auth.optional, function(req, res, next) {
    Promise.all([
        req.payload ? User.findById(req.payload.id) : null,
        req.song.populate('author').execPopulate()
    ]).then(function(results){
        var user = results[0];

        return res.json({song: req.song.toJSONFor(user)});
    }).catch(next);
});

// update article
router.put('/:song', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
        if(req.song.author._id.toString() === req.payload.id.toString()){
            if(typeof req.body.song.title !== 'undefined'){
                req.song.title = req.body.song.title;
            }

            if(typeof req.body.song.description !== 'undefined'){
                req.song.description = req.body.song.description;
            }

            if(typeof req.body.song.body !== 'undefined'){
                req.song.body = req.body.song.body;
            }


            req.song.save().then(function(song){
                return res.json({song: song.toJSONFor(user)});
            }).catch(next);
        } else {
            return res.sendStatus(403);
        }
    });
});

// delete article
router.delete('/:song', auth.required, function(req, res, next) {
    User.findById(req.payload.id).then(function(user){
        if (!user) { return res.sendStatus(401); }

        if(req.song.author._id.toString() === req.payload.id.toString()){
            return req.song.remove().then(function(){
                return res.sendStatus(204);
            });
        } else {
            return res.sendStatus(403);
        }
    }).catch(next);
});



module.exports = router;
