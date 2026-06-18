import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import config from "./config.js";

passport.use(
	new GoogleStrategy(
		{
			clientID: config.GOOGLE_CLIENT_ID,
			clientSecret: config.GOOGLE_CLIENT_SECRET,
			callbackURL: config.GOOGLE_CALLBACK_URL,
		},
		async (_, __, profile, cb) => {
			try {
				return cb(null, profile);
			} catch (error) {
				return cb(error, null);
			}
		},
	),
);

export default passport;
