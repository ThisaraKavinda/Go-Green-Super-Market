import axios from "axios";

import { baseURL } from "../config";

export const addCart = async (product) => {
  const { data } = await axios.post(baseURL + "/cart/", product);
  return data;
};

export const getAllCarts = async () => {
  const { data } = await axios.get(baseURL + "/cart/");
  return data;
};

export const deleteCart = async (id) => {
  const { data } = await axios.delete(baseURL + `/cart/${id}`);
  return data;
};

export const getCart = async (id) => {
  const { data } = await axios.get(baseURL + `/cart/${id}`);
  return data;
};

export const editCart = async (id, newProduct) => {
  const { data } = await axios.patch(baseURL + `/cart/${id}`, newProduct);
  return data;
};