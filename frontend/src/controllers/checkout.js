import axios from "axios";

import { baseURL } from "../config";

export const addCheckout = async (product) => {
  const { data } = await axios.post(baseURL + "/checkout/", product);
  return data;
};

export const getAllCheckouts = async () => {
  const { data } = await axios.get(baseURL + "/checkout/");
  return data;
};

export const deleteCheckout = async (id) => {
  const { data } = await axios.delete(baseURL + `/checkout/${id}`);
  return data;
};

export const getCheckout = async (id) => {
  const { data } = await axios.get(baseURL + `/checkout/${id}`);
  return data;
};

export const editCheckout = async (id, newProduct) => {
  const { data } = await axios.patch(baseURL + `/checkout/${id}`, newProduct);
  return data;
};