var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req){

  console.log('auth', req.headers.authorization);
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    console.log('auth', req.headers.authorization.split(' ')[1]);
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: 'payload',
    getToken: getTokenFromHeader
  }),
  optional: jwt({
    secret: secret,
    userProperty: 'payload',
    credentialsRequired: false,
    getToken: getTokenFromHeader
  })
};
console.log(auth);
module.exports = auth;
