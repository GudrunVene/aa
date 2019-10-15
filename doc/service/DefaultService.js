'use strict';


/**
 * allow users see songs
 * allow users see songs
 *
 * limit Integer  (optional)
 * offset Integer  (optional)
 * author String  (optional)
 * returns inline_response_200
 **/
exports.songsGET = function(limit,offset,author) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "songs" : [ {
    "artist" : "BTS",
    "title" : "Save me",
    "lyrics" : "AAAA [Verse 1] Nan sumswigo sipeo i bami silheo Ijen kkaego sipeo kkumsogi silheo Nae ane gathyeoseo nan jugeoisseo Don’t wanna be lonely Just wanna be yours Wae iri kkamkkamhan geonji Niga eopsneun i goseun Wiheomhajanha manggajin nae moseup Guhaejwo nal nado nal jabeul su eopseo Su eopseo\n[Pre-Chorus] Nae simjangsoril deureobwa Jemeosdaero neol bureujanha I kkaman eodum sogeseo Neoneun ireohge biccnanikka\n[Chorus] Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me (Oh oh, save me me me) Geu soneul naemireojwo save me save me (Oh oh, save me me me) Save me save me (Oh oh, save me me me)"
  }, {
    "artist" : "BTS",
    "title" : "Save me",
    "lyrics" : "AAAA [Verse 1] Nan sumswigo sipeo i bami silheo Ijen kkaego sipeo kkumsogi silheo Nae ane gathyeoseo nan jugeoisseo Don’t wanna be lonely Just wanna be yours Wae iri kkamkkamhan geonji Niga eopsneun i goseun Wiheomhajanha manggajin nae moseup Guhaejwo nal nado nal jabeul su eopseo Su eopseo\n[Pre-Chorus] Nae simjangsoril deureobwa Jemeosdaero neol bureujanha I kkaman eodum sogeseo Neoneun ireohge biccnanikka\n[Chorus] Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me (Oh oh, save me me me) Geu soneul naemireojwo save me save me (Oh oh, save me me me) Save me save me (Oh oh, save me me me)"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * allow user add new song
 * allow user add new song
 *
 * body Song 
 * returns SongRequest
 **/
exports.songsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "song" : {
    "artist" : "BTS",
    "title" : "Save me",
    "lyrics" : "AAAA [Verse 1] Nan sumswigo sipeo i bami silheo Ijen kkaego sipeo kkumsogi silheo Nae ane gathyeoseo nan jugeoisseo Don’t wanna be lonely Just wanna be yours Wae iri kkamkkamhan geonji Niga eopsneun i goseun Wiheomhajanha manggajin nae moseup Guhaejwo nal nado nal jabeul su eopseo Su eopseo\n[Pre-Chorus] Nae simjangsoril deureobwa Jemeosdaero neol bureujanha I kkaman eodum sogeseo Neoneun ireohge biccnanikka\n[Chorus] Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me (Oh oh, save me me me) Geu soneul naemireojwo save me save me (Oh oh, save me me me) Save me save me (Oh oh, save me me me)"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * allow user to delete songs
 * allow user to delete songs
 *
 * slug String 
 * no response value expected for this operation
 **/
exports.songsSlugDELETE = function(slug) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * allow user to change songs
 * allow user to change songs
 *
 * slug String 
 * body SongRequest 
 * returns SongRequest
 **/
exports.songsSlugPUT = function(slug,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "song" : {
    "artist" : "BTS",
    "title" : "Save me",
    "lyrics" : "AAAA [Verse 1] Nan sumswigo sipeo i bami silheo Ijen kkaego sipeo kkumsogi silheo Nae ane gathyeoseo nan jugeoisseo Don’t wanna be lonely Just wanna be yours Wae iri kkamkkamhan geonji Niga eopsneun i goseun Wiheomhajanha manggajin nae moseup Guhaejwo nal nado nal jabeul su eopseo Su eopseo\n[Pre-Chorus] Nae simjangsoril deureobwa Jemeosdaero neol bureujanha I kkaman eodum sogeseo Neoneun ireohge biccnanikka\n[Chorus] Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me I need your love before I fall fall Geu soneul naemireojwo save me save me (Oh oh, save me me me) Geu soneul naemireojwo save me save me (Oh oh, save me me me) Save me save me (Oh oh, save me me me)"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

