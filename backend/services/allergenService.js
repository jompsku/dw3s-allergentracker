const productList = require("../data/products");

const getProblematicProducts = () => {
  return productList.filter((p) => p.isProblematic);
};

const getPossibleAllergens = () => {
  const problematicProducts = getProblematicProducts();
  const allIngredients = problematicProducts.flatMap(
    (product) => product.ingredients
  );
  const ingredientCounts = allIngredients.reduce((acc, ingredient) => {
    acc[ingredient] = (acc[ingredient] || 0) + 1;
    return acc;
  }, {});
  const commonIngredients = Object.entries(ingredientCounts)
    .filter(([_, ingredientCount]) => ingredientCount > 1)
    .map(([ingredient, _]) => ingredient);
  return commonIngredients;
};

module.exports = { getPossibleAllergens };
