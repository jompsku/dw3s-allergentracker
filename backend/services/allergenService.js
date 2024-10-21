const Product = require("../database/models/Product")

const getProblematicProducts = async () => {
  const problematicProductList = await Product.find({ isProblematic: true }).exec()
  return problematicProductList
}

const getPossibleAllergens = async () => {
  const problematicProducts = await getProblematicProducts()
  const allIngredients = problematicProducts.flatMap((product) => {
    return product.ingredients
  })
  const ingredientCounts = allIngredients.reduce((acc, ingredient) => {
    acc[ingredient] = (acc[ingredient] || 0) + 1
    return acc
  }, {})
  const commonIngredients = Object.entries(ingredientCounts)
    .filter(([_, ingredientCount]) => ingredientCount > 1)
    .map(([ingredient, _]) => ingredient)
  return commonIngredients
}

module.exports = { getPossibleAllergens }
