import axios from "axios";

import { baseURL } from "../config";

export const addProduct = async (product) => {
  const { data } = await axios.post(baseURL + "/product/", product);
  return data;
};

export const getAllProducts = async () => {
  const { data } = await axios.get(baseURL + "/product/");
  return data;
};
