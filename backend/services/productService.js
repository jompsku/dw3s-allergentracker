const Product = require("../database/models/Product");
const productsList = require("../../backend/data/testData");

const retrieveProducts = async (user_id) => {
  const products = await Product.find({ user_id });
  return products;
};

const retrieveIngredients = async (id) => {
  const product = await Product.findById(id);
  const ingredients_list = product.ingredients;
  return ingredients_list;
};

const addProduct = async ({ name, user_id, isProblematic, ingredients, flagged_ingredients }) => {
  const newProduct = await Product.create({
    name,
    user_id,
    isProblematic,
    ingredients,
    flagged_ingredients,
  });
  return newProduct;
};

const editProduct = async (productID, updatedProduct) => {
  const editedProduct = await Product.findOneAndUpdate({ _id: productID }, updatedProduct);
  return editedProduct;
};

// only for testing
const fillDB = async (user_id) => {
  productsList.forEach(async (e) => {
    await addProduct({
      name: e.name,
      user_id,
      isProblematic: e.isProblematic,
      ingredients: e.ingredients,
      flagged_ingredients: e.flagged_ingredients,
    });
  });
  return await retrieveProducts(user_id);
};

const retrieveTestData = async () => {
  return productsList;
};

module.exports = {
  addProduct,
  editProduct,
  fillDB,
  retrieveIngredients,
  retrieveProducts,
  retrieveTestData,
};
