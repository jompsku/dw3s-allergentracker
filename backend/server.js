const cors = require("cors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const productsRouter = require("./controllers/products");

require("./utils/passport");

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(express.json()); // For parsing JSON bodies
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "change",
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(productsRouter);

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client();
app.post("/login/verify", async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience:
      "408468159516-9pf3e64af4knq24jm532g234ac3gqk3j.apps.googleusercontent.com",
  });
  const payload = ticket.getPayload();
  const userid = payload["sub"];
  res.send(userid);
});

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
