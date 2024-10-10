const cors = require("cors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const productsRouter = require("./controllers/products");
const authenticationRouter = require("./controllers/authentication");

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
app.use(authenticationRouter);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
