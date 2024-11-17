const cors = require("cors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const productsRouter = require("./controllers/products");
const authenticationRouter = require("./controllers/authentication");

require("./utils/passport");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(authenticationRouter);

app.use(productsRouter);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
