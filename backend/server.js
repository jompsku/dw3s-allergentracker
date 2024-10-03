const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // For parsing JSON bodies

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
