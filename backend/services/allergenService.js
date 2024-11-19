const Product = require("../database/models/Product");

const THRESHOLD = 0.7;
const MIN_AMOUNT = 3;

const getProblematicProducts = async (user_id) => {
  const problematicProductList = await Product.find({
    isProblematic: true,
    user_id,
  }).exec();
  return problematicProductList;
};
const getAllProducts = async (user_id) => {
  const allProducts = await Product.find({ user_id }).exec();
  return allProducts;
};

const getAllIngredients = (products) => {
  return products.flatMap((product) => {
    return product.ingredients;
  });
};

const getCounts = (ingredients) => {
  return ingredients.reduce((acc, ingredient) => {
    acc[ingredient] = (acc[ingredient] || 0) + 1;
    return acc;
  }, {});
};

const getPossibleAllergens = async (user_id) => {
  const problematicProducts = await getProblematicProducts(user_id);
  const allProducts = await getAllProducts(user_id);

  const allIngredientsInProblematicProducts =
    getAllIngredients(problematicProducts);
  const allIngredientsInAllProducts = getAllIngredients(allProducts);

  const ingredientCountsInProblematicProducts = getCounts(
    allIngredientsInProblematicProducts
  );
  const ingredientCountsInAllProducts = getCounts(allIngredientsInAllProducts);

  const commonIngredients = Object.entries(
    ingredientCountsInProblematicProducts
  )
    .filter(
      ([ingredient, ingredientCount]) =>
        ingredientCount / ingredientCountsInAllProducts[ingredient] >
          THRESHOLD && ingredientCountsInAllProducts[ingredient] > MIN_AMOUNT
    )
    .map(([ingredient, ingredientCount]) => ingredient);

  return commonIngredients;
};

module.exports = { getPossibleAllergens };
