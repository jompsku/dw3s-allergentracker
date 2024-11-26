const passport = require("passport");
const authenticationRouter = require("express").Router();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../database/models/User");

const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `https://backend.dw3s-allergenservice.online/auth/google/callback`,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ google_id: profile.id });
        if (!user) {
          user = await User.create({
            google_id: profile.id,
            email: profile.emails[0].value,
            name: profile.displayName,
            is_admin: false,
          });
        }
        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

authenticationRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authenticationRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${baseUrl}/login`,
  }),
  (req, res) => {
    console.log("Successfully authenticated:", req.session);
    res.redirect(`${baseUrl}`);
  }
);

authenticationRouter.get("/auth/current_user", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  } else {
    return res.status(401).json({ error: "Unauthorized, user not logged in" });
  }
});

authenticationRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Logout failed", error: err });
    }
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Session destruction failed", error: err });
      }

      // Clear the session cookie by setting it to an expired value
      res.clearCookie("connect.sid");

      return res.redirect("/");
    });
  });
});

passport.serializeUser((user, done) => {
  done(null, user.google_id);
});

passport.deserializeUser(async (id, done) => {
  console.log("Deserializing user with ID:", id); // Add logging to check the id
  try {
    const user = await User.findOne({ google_id: id });
    if (!user) {
      return done(new Error("User not found"), null);
    }
    console.log("Found user:", user); // Check if user was found
    done(null, user); // Attach user to req.user
  } catch (error) {
    console.error("Error in deserializing user:", error);
    done(error, null);
  }
});

module.exports = authenticationRouter;
