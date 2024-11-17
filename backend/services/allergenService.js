const Product = require("../database/models/Product");

const THRESHOLD = 0.7;
const MIN_AMOUNT = 3;

const getProblematicProducts = async () => {
  const problematicProductList = await Product.find({
    isProblematic: true,
  }).exec();
  return problematicProductList;
};
const getAllProducts = async () => {
  const allProducts = await Product.find({}).exec();
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
  });
};

const getPossibleAllergens = async () => {
  const problematicProducts = await getProblematicProducts();
  const allProducts = await getAllProducts();

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
