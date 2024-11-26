const cors = require("cors");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const path = require("path");
const mongoose = require("./database/mongo");
const productsRouter = require("./controllers/products");
const allergenRouter = require("./controllers/allergens");
const authenticationRouter = require("./controllers/authentication");
const { authenticationMiddleware } = require("./middlewares/authentication");
const MongoStore = require("connect-mongodb-session")(session);
require("./utils/passport");

dotenv.config();

const app = express();

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? "https://frontend.dw3s-allergenservice.online"
      : "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      domain: "dw3s-allergenservice.online",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24,
      secure: process.env.NODE_ENV === "production",
      sameSite: "none",
    },
    proxy: true,
    store: new MongoStore({
      uri: process.env.MONGODB_URI,
      collection: "sessions",
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.use(authenticationRouter);
app.use("/products", authenticationMiddleware, productsRouter);
app.use("/allergens", authenticationMiddleware, allergenRouter);

app.get("api/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
