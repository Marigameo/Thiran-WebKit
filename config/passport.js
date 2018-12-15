//require passport
const passport = require('passport');

//require passport -google starategy
const GoogleStrategy = require('passport-google-oauth20');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const googleUser = require('../models/google');
const config = require('../config/database');
const bcrypt = require('bcryptjs');
module.exports = function(passport){
passport.use(
    new GoogleStrategy({
        // options for google strategy
        clientID: config.google.clientID,
        clientSecret: config.google.clientSecret,
        callbackURL: 'http://localhost:3000/users/google/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // check if user already exists in our own db
        console.log(profile);
        googleUser.findOne({googleId: profile.id}).then((currentUser) => {
            if(currentUser){
                // already have this user
                console.log('user is: ', currentUser);
                done(null, currentUser);
            } else {
                // if not, create user in our db
                new googleUser({
                    googleId: profile.id,
                    username: profile.displayName,
                    thumbnail:profile._json.image.url
                }).save().then((newUser) => {
                    console.log('created new user: ', newUser);
                    done(null, newUser);
                });
            }
        });
    })
);





  // Local Strategy
  passport.use(new LocalStrategy(function(username, password, done){
    // Match Username
    let query = {username:username};
    User.findOne(query, function(err, user){
      if(err) throw err;
      if(!user){
        return done(null, false, {message: 'No user found'});
      }

      // Match Password
      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Wrong password'});
        }
      });
    });
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}
