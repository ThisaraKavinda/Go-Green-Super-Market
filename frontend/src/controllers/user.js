import axios from "axios";

import { baseURL } from "../config";

export const addUser = async (user) => {
  const { data } = await axios.post(baseURL + "/user/", user);
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userId", data._id);
  localStorage.setItem("user", data);
  localStorage.setItem("type", data.type);
  return data;
};

export const loginUser = async (email) => {
  const { data } = await axios.get(baseURL + `/user/find/${email}`, {
    time: new Date().toISOString(),
  });
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userId", data._id);
  localStorage.setItem("user", data);
  localStorage.setItem("type", data.type);
  localStorage.setItem("name", data.name);
  return data;
};

export const logoutUser = () => {
  localStorage.setItem("isLoggedIn", false);
  localStorage.setItem("userId", null);
  localStorage.setItem("user", null);
};

export const loginSeller = async (email) => {
  const { data } = await axios.get(baseURL + `/seller/find/${email}`);
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userId", data._id);
  localStorage.setItem("user", data);
  localStorage.setItem("type", data.type);
  localStorage.setItem("name", data.name);
  return data;
};

export const loginAdmin = async (email) => {
  localStorage.setItem("isLoggedIn", true);
  localStorage.setItem("userId", "0000000001");
  localStorage.setItem("user", {});
  localStorage.setItem("type", "admin");
  localStorage.setItem("name", "Eranga Kulasekara");
};
