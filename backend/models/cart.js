import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  productId: {
    required: true,
    type: String,
  },
  productName: {
    required: true,
    type: String,
  },
  productType: {
    required: true,
    type: String,
  },
  productPrice: {
    required: true,
    type: String,
  },
  companyId: {
    required: true,
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  quantity: {
    required: true,
    type: String,
  },
  buyerId: {
    required: true,
    type: String,
  },
  buyerName: {
    required: true,
    type: String,
  },
  buyerEmail: {
    required: true,
    type: String,
  },
  image: {
    type: String,
  },
});

export const Cart = mongoose.model("cart", CartSchema);
