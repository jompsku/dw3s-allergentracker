import axios from "axios";

const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";
const fullUrl = baseUrl + "/products/";

export const retrieveProducts = async () => {
  const response = await axios.get(fullUrl, {
    withCredentials: true,
  });
  return response.data;
};

export const addProduct = async (newProduct) => {
  const response = await axios.post(fullUrl, newProduct, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteProduct = async (product) => {
  const response = await axios.delete(fullUrl + product._id, {
    withCredentials: true,
  });
  return response.data;
};

export const editProduct = async ({ product, editedProduct }) => {
  const response = await axios.post(fullUrl + product._id, editedProduct, {
    withCredentials: true,
  });
  return response.data;
};

export const retrievePossibleAllergens = async () => {
  const response = await axios.get(baseUrl + "/allergens", {
    withCredentials: true,
  });
  return response.data;
};

// for testing the application
export const fillDB = async (user_id) => {
  const response = await axios.get(fullUrl + "testData", {
    withCredentials: true,
  });
  return response.data;
};

export const deleteDB = async (user_id) => {
  const response = await axios.get(fullUrl + "deleteProducts", {
    withCredentials: true,
  });
  return response;
};
