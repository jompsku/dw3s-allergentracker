const cors = require("cors")
const express = require("express");
const dotenv = require("dotenv");
const productsRouter = require("./controllers/products");

dotenv.config(); // Load environment variables

const app = express();
app.use(cors())
app.use(express.json()); // For parsing JSON bodies

app.use(productsRouter)

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
