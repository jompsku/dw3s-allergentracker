const productsRouter = require("express").Router()
const productList = require("../data/products")

productsRouter.post("/products", async (request, response) => {
  const { productIDs } = request.body

  // TODO
  if (!productIDs) {
    return response.status(400).json({ message: "no product IDs given" })
  } 
  if (!Array.isArray(productIDs)) {
    return response.status(400).json({ message: "product IDs was not a list" }) 
  }
  const prods = productIDs.map((p) => productList.find((i) => i.id === p))

  response.status(200).json({ products: prods })
})

productsRouter.get("/products", async (request, response) => {
  response.status(200).json({ products: productList })
})

module.exports = productsRouter
