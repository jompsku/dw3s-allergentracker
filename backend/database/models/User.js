const mongoose = require("../mongo");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  google_id: { type: String, unique: true, required: true },
  is_admin: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
