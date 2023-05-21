import React, { useState } from "react";
import Layout from "../../componants/Layout/Layout.js";
import { addCheckout } from "../../controllers/checkout.js";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const userName = localStorage.getItem("name");
  const userId = localStorage.getItem("userId");

  const [item, setItem] = useState({
    numOfItems: state.numOfItem,
    items: state.items,
    price: state.price,
    name: userName,
    buyerId: userId,
  });

  const handleChange = (e) => {
    setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  const handleAddItem = () => {
    addCheckout(item)
      .then((res) => {
        swal.fire("Successfully added", "Order placed successfully", "success");
        navigate("/products");
      })
      .catch((err) => {
        swal.fire(
          "Error occurred",
          "Error occurred while we trying to place the order. please try again",
          "error"
        );
        return;
      });
  };
  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Checkout</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Cart</li>
                <li class="breadcrumb-item active">Checkout</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Fill this form to Checkout</h5>
                    <form
                      class="row g-3 needs-validation"
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleAddItem();
                      }}
                    >
                      <div class="col-12">
                        <label for="name" class="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className={`form-control`}
                          id="name"
                          onChange={handleChange}
                          placeholder="Name"
                          required
                          name="name"
                          value={userName}
                          disabled
                        />
                      </div>
                      <div class="col-12">
                        <label for="email" class="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className={`form-control`}
                          id="email"
                          onChange={handleChange}
                          placeholder="Email"
                          required
                          name="email"
                        />
                      </div>
                      <div class="col-12">
                        <label for="numOfItems" class="form-label">
                          Number of items
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="numOfItems"
                          placeholder="Number of items"
                          required
                          name="numOfItems"
                          onChange={handleChange}
                          value={state.numOfItem}
                          disabled
                        />
                      </div>
                      <div class="col-12">
                        <label for="price" class="form-label">
                          Price
                        </label>
                        <div class="input-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Price"
                            aria-label="Unit price"
                            aria-describedby="basic-addon2"
                            id="price"
                            name="price"
                            onChange={handleChange}
                            required
                            disabled
                            value={state.price}
                          />
                          <span class="input-group-text" id="basic-addon2">
                            .00 LKR
                          </span>
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="date" class="form-label">
                          Date
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          id="date"
                          placeholder="Driver"
                          required
                          name="date"
                          onChange={handleChange}
                        />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="address" class="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className={`form-control`}
                          id="address"
                          onChange={handleChange}
                          placeholder="Address"
                          required
                          name="address"
                        />
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary mx-4">
                          Submit
                        </button>
                        {/* <button type="reset" class="btn btn-secondary">
                        Reset
                      </button> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default CheckOut;
