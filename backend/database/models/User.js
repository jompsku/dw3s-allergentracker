const mongoose = require("../mongo")

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  google_id: String,
  flagged_ingredients: [mongoose.Types.ObjectId],
  is_admin: Boolean,
})

const User = mongoose.model("User", userSchema)

module.exports = User