const productsRouter = require("express").Router();
const { getPossibleAllergens } = require("../services/allergenService");
const Product = require("../database/models/Product");

productsRouter.post("/products", async (request, response) => {
  const { productIDs } = request.body;

  if (!productIDs) {
    return response.status(400).json({ message: "no product IDs given" });
  }
  if (!Array.isArray(productIDs)) {
    return response.status(400).json({ message: "product IDs was not a list" });
  }
  const prods = productIDs.map((p) => productList.find((i) => i.id === p));

  response.status(200).json({ products: prods });
});

productsRouter.get("/products", async (request, response) => {
  const products = await Product.find({})
  response.status(200).json(products);
});



productsRouter.get("/allergens", async (request, response) => {
  const possibleAllergens = getPossibleAllergens();
  // For the demo, in real application ingredients will have their own ids also
  const res = possibleAllergens.map((item, index) => ({
    id: index,
    name: item,
  }));

  response.status(200).json(res);
});

module.exports = productsRouter;
