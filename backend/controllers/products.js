const productsRouter = require("express").Router();
const { default: mongoose } = require("mongoose");
const { getPossibleAllergens } = require("../services/allergenService");
const {
  retrieveProducts,
  addProduct,
  editProduct,
} = require("../services/productService");
const Product = require("../database/models/Product");

productsRouter.post("/", async (request, response) => {
  try {
    const {
      productName: name,
      productIngredients: ingredients,
      productCausesProblems: isProblematic,
    } = request.body;
    const user_id = request.user;
    const product = await addProduct({
      name,
      user_id,
      isProblematic,
      ingredients,
    });
    response.status(200).json(product);
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "error while adding a new product" });
  }
});

productsRouter.post("/:productID", async (request, response) => {
  try {
    const productID = request.params.productID;
    const updatedProduct = request.body;
    const product = await editProduct(productID, updatedProduct);
    response.status(200).json(product);
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "error while updating product" });
  }
});

productsRouter.delete("/:id", async (request, response) => {
  try {
    const prod = request.params.id;
    await Product.deleteOne({ _id: prod });
    response.status(200).send();
  } catch (err) {
    console.log(err);
    response.status(500).json(err);
  }
});

productsRouter.get("/", async (request, response) => {
  const products = await retrieveProducts(request.user);
  response.status(200).json(products);
});

module.exports = productsRouter;
