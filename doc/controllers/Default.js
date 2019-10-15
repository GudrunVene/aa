'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.songsGET = function songsGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var author = req.swagger.params['author'].value;
  Default.songsGET(limit,offset,author)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songsPOST = function songsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.songsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songsSlugDELETE = function songsSlugDELETE (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Default.songsSlugDELETE(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.songsSlugPUT = function songsSlugPUT (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  var body = req.swagger.params['body'].value;
  Default.songsSlugPUT(slug,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
