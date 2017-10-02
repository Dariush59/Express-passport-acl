var envJson = require('../env.json');
var models = require('../models'); //TODO change the model to control
var express = require('express');
var router = express.Router();

/**** importing possport  and token json ****/

var jwt = require('jsonwebtoken');
var passport = require('passport');
var passportJWT = require("passport-jwt");
// declaring possport
var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
// configuring passport
var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = envJson.env.SECTRET_OR_KEY.value;

var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    // TODO call a controller to collect the collection.
    models.User
        .findOne({ where: { id: jwt_payload.id } })
        .then(function(user) {
            next(null, user);
        })
        .catch(function(error) {
            next(null, false);
        });
});

console.log('jwtOptions',  jwtOptions);
passport.use(strategy);

router.use(passport.initialize());

router.use( passport.session() );
// a middelware to check the user is authenticated.
is_authenticated = passport.authenticate('jwt', { session: false });


module.exports = { passport, jwtOptions, jwt, is_authenticated };