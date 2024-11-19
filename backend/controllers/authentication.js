const passport = require("passport");
const authenticationRouter = require("express").Router();
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../database/models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://localhost:8080/auth/google/callback`,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ googleId: profile.id });
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

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

authenticationRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authenticationRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login",
  }),
  (req, res) => {
    res.redirect("http://localhost:5173");
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

module.exports = authenticationRouter;
