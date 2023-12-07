const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CALLBACK_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../configs/config');
const User = require('../models/User')

passport.use(new GoogleStrategy({ 
    callbackURL: GOOGLE_CALLBACK_URL,
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
}, 
async (accessToken, refreshToken, profile, done) => {

    try {

        let user = await User.findOne({ email: profile.emails[0].value })
        
        // if user exists, call our callback
        if (user){
            done(null, user)
        } else {
            // if new user, create a user object and store it
            const newUser = new User({
                avatar: profile.photos[0].value,
                email: profile.emails[0].value,
                displayName: profile.displayName,
            });

            user = await User.create(newUser)
            done(null, user)
        }

    } catch (err) {
        console.error(err)
    }
    
}),
);

// store user in session by user id
passport.serializeUser((user, done) => {
    done(null, user.email);
});

// function provided earlier to fetch the user object by ID.
passport.deserializeUser(async (email, done) => {
    const user = await User.findOne({email: email})
    // console.log('deseri user', user)
    done(null, user)
});

module.exports = passport;