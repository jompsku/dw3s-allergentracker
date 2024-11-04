const productsRouter = require("express").Router()
const { default: mongoose } = require("mongoose")
const { getPossibleAllergens } = require("../services/allergenService")
const { retrieveProducts, addProduct } = require("../services/productService")
const Product = require("../database/models/Product")

productsRouter.post("/products", async (request, response) => {
  try {
    const {
      productName: name,
      productIngredients: ingredients,
      productCausesProblems: isProblematic,
    } = request.body
    const user_id = new mongoose.Types.ObjectId() // request.user TODO
    const product = await addProduct({
      name,
      user_id,
      isProblematic,
      ingredients,
      flagged_ingredients: [],
    })
    response.status(200).json(product)
  } catch (err) {
    console.log(err)
    response.status(500).json({ message: "error while adding a new product" })
  }
})

productsRouter.delete("/products/:id", async (request, response) => {
  try {
    const prod = request.params.id
    await Product.deleteOne({_id: prod})
    response.status(200).send()
  } catch (err) {
    console.log(err);
    response.status(500).json(err)
  }
})

productsRouter.get("/products", async (request, response) => {
  const products = await retrieveProducts()
  response.status(200).json(products)
})

productsRouter.get("/allergens", async (request, response) => {
  try {
    const possibleAllergens = await getPossibleAllergens()
    // For the demo, in real application ingredients will have their own ids also
    const res = possibleAllergens.map((item, index) => ({
      _id: index,
      name: item,
    }))
    response.status(200).json(res)
  } catch (err) {
    console.log(err)
    response.status(500).json({ message: "error while finding allergens" })
  }
})

module.exports = productsRouter
