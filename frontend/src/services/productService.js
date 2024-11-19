import axios from "axios";

const baseUrl = "http://localhost:8080";
const fullUrl = baseUrl + "/products/";

export const retrieveProducts = async () => {
  const response = await axios.get(fullUrl);
  return response.data;
};

export const addProduct = async (newProduct) => {
  const response = await axios.post(fullUrl, newProduct);
  return response.data;
};

export const deleteProduct = async (product) => {
  const response = await axios.delete(fullUrl + product._id);
  return response.data;
};

export const editProduct = async ({ product, editedProduct }) => {
  const response = await axios.post(fullUrl + product._id, editedProduct);
  return response.data;
};

export const retrievePossibleAllergens = async () => {
  const response = await axios.get(baseUrl + "/allergens");
  return response.data;
};
