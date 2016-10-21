var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var userModel = require('../models/users.js')

passport.use(new LocalStrategy(
    function(username, password, done) {
        userModel.users.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));