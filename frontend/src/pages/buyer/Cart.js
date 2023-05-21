import "../../App.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import cardImage from "../../assests/images/card.jpg";
import Layout from "../../componants/Layout/Layout";
import { getAllCarts, deleteCart, editCart } from "../../controllers/cart";
import swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [item, setItem] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const userId = localStorage.getItem("userId");

  console.log(productList);

  useEffect(() => {
    getAllCarts()
      .then((data) => {
        setProductList(data?.filter((cart) => cart.buyerId === userId));
        setFilteredList(data);
      })
      .catch((err) => {
        swal
          .fire(
            "Error occurred",
            "Error occurred while we trying to get the products. please try again",
            "error"
          )
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            window.location.reload();
          });
        return;
      });
  }, []);

  const handleCategoryChange = (e) => {
    if (e.target.value === "All") {
      setFilteredList(productList);
    } else {
      setFilteredList(
        productList.filter((product) => product?.productType === e.target.value)
      );
    }
  };

  const handleSearch = () => {
    setFilteredList(
      productList.filter((product) => product.productName.includes(searchTerm))
    );
  };

  const handleIncrement = (cart) => {
    editCart(cart._id, { quantity: Number(cart.quantity) + 1 })
      .then((res) => {
        if (res) {
          swal
            .fire({
              title: "Success!",
              text: "Product quantity has been incremented",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              window.location.reload();
            });
        } else {
          swal.fire({
            title: "Error!",
            text: "Something went wrong",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDecrement = (cart) => {
    editCart(cart._id, { quantity: Number(cart.quantity) - 1 })
      .then((res) => {
        if (res) {
          swal
            .fire({
              title: "Success!",
              text: "Product quantity has been incremented",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            })
            .then(() => {
              window.location.reload();
            });
        } else {
          swal.fire({
            title: "Error!",
            text: "Something went wrong",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => {
        swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handleDeleteCart = (id) => {
    swal
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.value === true) {
          deleteCart(id).then((res) => {
            if (res) {
              swal
                .fire({
                  title: "Success!",
                  text: "Product has been deleted from the cart",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                })
                .then(() => {
                  window.location.reload();
                });
            } else {
              swal.fire({
                title: "Error!",
                text: "Something went wrong",
                icon: "error",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Cart</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Cart</li>
                <li class="breadcrumb-item active">Products</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body py-2 px-4">
                    <div class="row d-flex justify-content-between align-items-center">
                      <div class="search-bar col-6">
                        <div class="input-group my-3 search-form d-flex align-items-center">
                          <input
                            type="text"
                            class="form-control search"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2"
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
                            onClick={handleSearch}
                          >
                            <i class="bi bi-search"></i>
                            <span class="mx-2">Search</span>
                          </button>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="row d-flex justify-content-end">
                          <div class="col-5">
                            <div class="row d-flex align-items-center">
                              Category:
                              <div class="col">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  name="category"
                                  onChange={(e) => handleCategoryChange(e)}
                                >
                                  <option value="All">All</option>
                                  <option value="Bakery">Bakery</option>
                                  <option value="Beverage">Beverage</option>
                                  <option value="Nonfood & Pharmacy">
                                    Nonfood & Pharmacy
                                  </option>
                                  <option value="Produce & Floral">
                                    Produce & Floral
                                  </option>
                                  <option value="Prepared Foods">
                                    Prepared Foods
                                  </option>
                                  <option value="Household items">
                                    Household items
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="section">
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <div
                      class="container d-flex flex-wrap mx-auto w-100"
                      style={{ maxWidth: "2000px" }}
                    >
                      {filteredList?.map((item) => (
                        <tbody style={{ width: "100%" }} class="my-2">
                          <tr
                            style={{ width: "100%" }}
                            class="d-flex justify-content-between align-items-center"
                          >
                            <td>
                              <div>
                                <img
                                  class="img-thumbnail"
                                  src={
                                    item.image?.length > 0
                                      ? item.image
                                      : cardImage
                                  }
                                  style={{ height: "70px" }}
                                />
                              </div>
                            </td>
                            <td style={{ width: "20%" }}>{item.productName}</td>
                            <td style={{ width: "15%" }}>
                              Rs.
                              {Number(item.quantity) *
                                Number(item.productPrice)}
                              .00
                            </td>
                            <td style={{ width: "20%" }}>{item.productType}</td>
                            <td>
                              <div class="d-flex">
                                <button
                                  class="btn btn-warning btn-pill"
                                  onClick={() => handleDecrement(item)}
                                >
                                  -
                                </button>
                                <p class="mx-4 mt-3">{item.quantity}</p>
                                <button
                                  class="btn btn-primary btn-pill"
                                  onClick={() => handleIncrement(item)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td class="table-action">
                              <button
                                class="btn btn-danger btn-pill"
                                onClick={() => handleDeleteCart(item._id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    class="btn btn-success btn-pill"
                    onClick={() => {
                      let price = 0;
                      filteredList.forEach((item) => {
                        price += Number(item.quantity) *
                        Number(item.productPrice) 
                      })
                      navigate(`/checkout/${userId}`,  {
                        state: {
                          numOfItem: filteredList?.length,
                          price,
                          items: filteredList.map((item) => item.productName)
                        }
                      })
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
