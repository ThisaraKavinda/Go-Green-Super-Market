import "../../App.css";
import React from "react";
import Select from "react-select";
import cardImage from "../../assests/images/card.jpg";
import Layout from "../../componants/Layout/Layout";

const Products = () => {
  const handleChange = (e) => {
    const newValue = e.target.value;
  };

  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Products</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Products</li>
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
                          />
                          <button
                            class="btn btn-outline-secondary"
                            type="button"
                            id="button-addon2"
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
                                <Select
                                  value={"d"}
                                  onChange={handleChange}
                                  options={["d", "dd"]}
                                  id="category"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="col-5">
                            <div class="row d-flex align-items-center">
                              Sort by:
                              <div class="col">
                                <Select
                                  value={"d"}
                                  onChange={handleChange}
                                  options={["d", "dd"]}
                                  id="category"
                                />
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
                      <div
                        class="card mx-3 my-4"
                        style={{ width: "21rem", height: "fit-content" }}
                      >
                        <img
                          src={cardImage}
                          class="card-img-top"
                          alt="..."
                          style={{ maxHeight: "200px" }}
                        />
                        <div class="card-body py-0">
                          <h5 class="card-title pb-0">
                            Card with an image on top
                          </h5>
                          <p class="card-text mb-1 border-bottom pb-2">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <div class="card-body p-0 mb-3">
                            <ul class="list-group list-group-flush d-flex align-items-center border-bottom">
                              <li class="list-group-item w-100 text-center">
                                Rs. 1050.00
                              </li>
                              <li class="list-group-item 1-100 text-center">
                                39 items available
                              </li>
                            </ul>
                          </div>
                          <div class="card-body d-flex justify-content-around">
                            <button
                              class="btn btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#verticalycentered"
                            >
                              View
                            </button>
                            <button class="btn btn-warning">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="modal fade"
                      id="verticalycentered"
                      tabindex="-1"
                    >
                      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Vertically Centered</h5>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">
                            <div class="mb-2 d-flex justify-content-center">
                              {/* <img
                            src={cardImage}
                            class="img-thumbnail"
                            alt="..."
                            style={{ maxHeight: "270px" }}
                          /> */}
                              <div
                                id="carouselExampleIndicators"
                                class="carousel slide"
                                data-bs-ride="carousel"
                              >
                                <div class="carousel-indicators">
                                  <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                  ></button>
                                  <button
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                  ></button>
                                </div>
                                <div class="carousel-inner">
                                  <div class="carousel-item active">
                                    <img
                                      src={cardImage}
                                      class="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div class="carousel-item">
                                    <img
                                      src={cardImage}
                                      class="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                  <div class="carousel-item">
                                    <img
                                      src={cardImage}
                                      class="d-block w-100"
                                      alt="..."
                                    />
                                  </div>
                                </div>

                                <button
                                  class="carousel-control-prev"
                                  type="button"
                                  data-bs-target="#carouselExampleIndicators"
                                  data-bs-slide="prev"
                                >
                                  <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button
                                  class="carousel-control-next"
                                  type="button"
                                  data-bs-target="#carouselExampleIndicators"
                                  data-bs-slide="next"
                                >
                                  <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                              </div>
                            </div>
                            <div class="my-3">
                              <ul class="list-group">
                                <li class="list-group-item">
                                  Generic name: Ice cream
                                </li>
                                <li class="list-group-item">
                                  Category: Deserts
                                </li>
                                <li class="list-group-item">
                                  Seller company: Dgfsde sd
                                </li>
                                <li class="list-group-item">
                                  Price: Rs.1235.00
                                </li>
                                <li class="list-group-item">
                                  Available quantity: 56
                                </li>
                                <li class="list-group-item">
                                  Description: Non omnis incidunt qui sed
                                  occaecati magni asperiores est mollitia.
                                  Soluta at et reprehenderit. Placeat autem
                                  numquam et fuga numquam. Tempora in facere
                                  consequatur sit dolor dignissimos.
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/* <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div> */}
                        </div>
                      </div>
                    </div>
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

export default Products;
