const productsRouter = require("express").Router();
const { default: mongoose } = require("mongoose");
const {
  retrieveProducts,
  addProduct,
  editProduct,
  fillDB,
  deleteProduct,
  deleteDB,
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
    const deletedProduct = await deleteProduct({ _id: prod });
    response.status(200).send(deletedProduct);
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "error while deleting product" });
  }
});

productsRouter.get("/", async (request, response) => {
  try {
    const products = await retrieveProducts(request.user);
    response.status(200).json(products);
  } catch (err) {
    response.status(500).json(err);
  }
});

// only for testing
productsRouter.get("/testData", async (request, response) => {
  try {
    const user_id = request.user;
    await fillDB(user_id);
    return response.sendStatus(200);
  } catch (err) {
    response.status(500).json({ message: "error while adding test data" });
  }
});

productsRouter.get("/deleteProducts", async (request, response) => {
  try {
    const user_id = request.user;
    await deleteDB(user_id);
    return response.sendStatus(200);
  } catch (err) {
    response.status(500).json({ message: "error while deleting products" });
  }
});

module.exports = productsRouter;
