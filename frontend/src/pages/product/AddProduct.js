import React, { useState } from "react";
import "../../assests/js/main.js";
import Select from "react-select";
import DragAndDropZone from "../../componants/DragAndDropZone/DragAndDropZone.js";
import Layout from "../../componants/Layout/Layout.js";

const AddProduct = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setIsValid(newValue !== "");
  };

  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Add Product</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Products</li>
                <li class="breadcrumb-item active">Add Product</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      Drag and drop or Click to select to add images
                    </h5>
                    <div class="my-5 mx-3">
                      <DragAndDropZone />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Fill this form to add a product</h5>
                    <form
                      class="row g-3 needs-validation"
                      noValidate
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsValid(value !== "");
                      }}
                    >
                      <div class="col-12">
                        <label for="specificName" class="form-label">
                          Product specific name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${
                            isValid ? "is-valid" : "is-invalid"
                          }`}
                          id="specificName"
                          onChange={handleChange}
                          placeholder="Name"
                          required
                        />
                        <div class="valid-feedback">Looks good!</div>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="genericName" class="form-label">
                          Product generic name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="genericName"
                          placeholder="Generic Name"
                          required
                        />
                        <div class="valid-feedback">Looks good!</div>
                      </div>
                      <div class="col-12">
                        <label for="category" class="form-label">
                          Category
                        </label>
                        <Select
                          value={"d"}
                          onChange={handleChange}
                          options={["d", "dd"]}
                          id="category"
                        />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="price" class="form-label">
                          Unit price
                        </label>
                        <div class="input-group mb-3">
                          <input
                            type="number"
                            class="form-control"
                            placeholder="Unit price"
                            aria-label="Unit price"
                            aria-describedby="basic-addon2"
                            id="price"
                          />
                          <span class="input-group-text" id="basic-addon2">
                            .00 LKR
                          </span>
                        </div>
                        <div class="blockquote-footer mt-1 mb-0 text-danger">
                          10% of the unit price from an item goes to NiceAdmin
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="quantity" class="form-label">
                          Quantity
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="quantity"
                          placeholder="Quantity"
                          required
                        />
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="col-12">
                        <label for="description" class="form-label">
                          Description
                        </label>
                        <textarea
                          class="form-control"
                          id="description"
                          style={{ height: "100px" }}
                          placeholder="More details (optional)"
                        ></textarea>
                        <div class="invalid-feedback">
                          Please provide a valid city.
                        </div>
                      </div>
                      <div class="text-center">
                        <button type="submit" class="btn btn-primary mx-4">
                          Submit
                        </button>
                        <button type="reset" class="btn btn-secondary">
                          Reset
                        </button>
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

export default AddProduct;
