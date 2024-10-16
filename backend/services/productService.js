const Product = require("../database/models/Product")

const retrieveProducts = async () => {
  const products = await Product.find({})
  return products
}

const retrieveIngredients = async (id) => {
  const product = await Product.findById(id)
  const ingredients_list = product.ingredients
  return ingredients_list
}

const addProduct = async ({ name, user_id, isProblematic, ingredients, flagged_ingredients }) => {
  const newProduct = await Product.create({
    name,
    user_id,
    isProblematic,
    ingredients,
    flagged_ingredients,
  })
  return newProduct
}

module.exports = { retrieveProducts, retrieveIngredients, addProduct }
