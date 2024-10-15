import axios from "axios"

export const retrieveProducts = async () => {
  const response = await axios.get("http://localhost:8080/products")
  return response.data
}

export const retrievePossibleAllergens = async () => {
  const response = await axios.get("http://localhost:8080/allergens")
  return response.data
}

export const addProduct = async (product) => {
  const response = await axios.post("http://localhost:8080/products", product)
  return response.data
}
