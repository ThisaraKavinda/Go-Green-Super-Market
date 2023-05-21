import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CheckoutSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: String,
  },
  numOfItems: {
    required: true,
    type: String,
  },
  items: [
    {
      type: String,
    },
  ],
  date: {
    required: true,
    type: String,
  },
  buyerId: {
    required: true,
    type: String,
  },
  vehicleId: {
    type: String,
  },
  vehicleNumber: {
    type: String,
  },
  driver: {
    type: String,
  },
});

export const Checkout = mongoose.model("checkouts", CheckoutSchema);
