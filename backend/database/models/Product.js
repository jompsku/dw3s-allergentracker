const mongoose = require("../mongo")

const productSchema = new mongoose.Schema({
  product_name: String,
  user_id: mongoose.Types.ObjectId,
  ingredients: [String],
  flagged_ingredients: [mongoose.Types.ObjectId],
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
