import { Checkout } from "../models/checkout.js";
import {Cart } from "../models/cart.js";

export const addCheckout = async (req, res) => {
  let newCart = new Checkout({ ...req.body });

  newCart = await newCart
    .save()
    .then(() => {
      Cart.deleteMany({buyerId: req.body.buyerId}).then((result) => {
        res.send(result);
      }).catch((err) => {
        console.error(err);
        res.status(500).json({ error: err });
      })
      
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllCheckouts = async (req, res) => {
    Checkout.find()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCheckout = async (req, res) => {
  const id = req.params.id;
  await Checkout.findByIdAndDelete(id)
    .then((product) => {
      res.status(200).send({ status: "Item deleted", deletedItem: product });
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const editCheckout = async (req, res) => {
  const id = req.params.id;
  const updateItem = req.body;
  const update = await Checkout.findByIdAndUpdate(id, updateItem)
    .then(async () => {
      res.status(200).send({ status: "Item updated" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating data", error: err.message });
    });
};

export const getCheckout = async (req, res) => {
  const id = req.params.id;
  const product = await Checkout.findById(id)
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};
