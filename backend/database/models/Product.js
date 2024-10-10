const mongoose = require("../mongo")

const productSchema = new mongoose.Schema({
  product_name: String,
  user_id: mongoose.Types.ObjectId,
  ingredient_list: [String],
  flagged_ingredients: [mongoose.Types.ObjectId],
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
