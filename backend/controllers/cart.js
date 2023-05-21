import { Cart } from "../models/cart.js";

export const addCart = async (req, res) => {
  let newCart = new Cart({ ...req.body });

  newCart = await newCart
    .save()
    .then(() => {
      res.send(newCart);
    })
    .catch((err) => {
      console.error(err);
    });
};

export const getAllCarts = async (req, res) => {
    Cart.find()
    .then((product) => {
      res.send(product);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteCart = async (req, res) => {
  const id = req.params.id;
  await Cart.findByIdAndDelete(id)
    .then((product) => {
      res.status(200).send({ status: "Item deleted", deletedItem: product });
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};

export const editCart = async (req, res) => {
  const id = req.params.id;
  const updateItem = req.body;
  const update = await Cart.findByIdAndUpdate(id, updateItem)
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

export const getCart = async (req, res) => {
  const id = req.params.id;
  const product = await Cart.findById(id)
    .then((product) => {
      res.status(200).send(product);
    })
    .catch((errr) => {
      console.log(errr.message);
      res.status(500).send({ status: "Error with deleting item" });
    });
};
