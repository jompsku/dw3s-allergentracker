const mongoose = require("../mongo")

const allergenSchema = new mongoose.Schema({
  ingredient_name: String,
  product_ids: [String],
  severity: Number,
})

const Allergen = mongoose.model("Allergen", allergenSchema)

module.exports = Allergen