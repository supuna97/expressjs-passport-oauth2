const passport = require("passport");
const OAuth2Strategy = require("passport-oauth2").Strategy;
const User = require("../models/user");

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: process.env.OAUTH2_AUTHORIZATION_URL,
      tokenURL: process.env.OAUTH2_TOKEN_URL,
      clientID: process.env.OAUTH2_CLIENT_ID,
      clientSecret: process.env.OAUTH2_CLIENT_SECRET,
      callbackURL: process.env.OAUTH2_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if the user exists in your database or create a new user record
        let user = await User.findOne({ where: { oauth2Id: profile.id } });

        if (!user) {
          user = await User.create({
            oauth2Id: profile.id,
            username: profile.username,
            email: profile.email,
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialization and deserialization methods (as shown in previous responses)
