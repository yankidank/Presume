const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../models/User');

passport.use(
  new LinkedInStrategy(
    {
      clientID: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      callbackURL: 'http://localhost:3001/auth/linkedin/callback',
      scope: ['r_liteprofile', 'r_emailaddress'],
    },
    async function (accessToken, refreshToken, profile, done) {
      const { id, displayName, emails } = profile;
      try {
        let user = await User.find({
          $or: [{ linkedin: { id: id } }, { email: emails[0].value }],
        });
        // if user is already in the database
        if (user[0]) {
          // ensure that user has linkedin profile stuff
          user[0].linkedin.id = id;
          user[0].save();
          done(null, user[0]);
        } else {
          let newUser = await User.create({
            displayName,
            email: emails[0].value,
            linkedin: { id },
          });
          done(null, newUser);
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);

module.exports = LinkedInStrategy;
