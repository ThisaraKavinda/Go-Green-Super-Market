import React, { useEffect, useState } from "react";
import Layout from "../../componants/Layout/Layout";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { getAllVehicles, deleteVehicle } from "../../controllers/vehicle";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Vehicles = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState({});

  useEffect(() => {
    getAllVehicles()
      .then((data) => {
        setProductList(data);
        setFilteredList(data);
      })
      .catch((err) => {
        swal
          .fire(
            "Error occurred",
            "Error occurred while we trying to get the vehicles. please try again",
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
        productList.filter((product) => product?.type === e.target.value)
      );
    }
  };

  const handleSortChange = (e) => {
    setFilteredList(filteredList.sort((a, b) => a.number - b.number));
  };

  const handleSearch = () => {
    setFilteredList(
      productList.filter((product) => product.number.includes(searchTerm))
    );
  };

  const handleDeleteVehicle = (id) => {
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
          deleteVehicle(id).then((res) => {
            if (res) {
              swal
                .fire({
                  title: "Success!",
                  text: "Vehicle has been deleted",
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

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setDrawColor(8, 30, 61);
    doc.setLineWidth(80);
    doc.line(0, 0, 1000, 0);

    doc.setFontSize("22");
    doc.setTextColor(255, 255, 255);
    doc.setFont("Helvertica", "bold");
    doc.text("Go-Green supermarket", 65, 12);

    doc.setFontSize("18");
    doc.setTextColor(255, 255, 255);
    doc.setFont("Helvertica", "bold");
    doc.text("Vehicle List", 82, 20);
    //
    doc.setFontSize("12");
    doc.setFont("Helvertica", "Normal");
    doc.text("Report generated on: ", 68, 27);
    doc.setFontSize("12");
    doc.setFont("Helvertica", "bold");
    doc.text(
      new Date().toISOString().substring(0, 10) +
        " " +
        new Date().toLocaleTimeString("en-US"),
      105,
      27
    );

    doc.setFontSize("10");
    doc.setFont("Helvertica", "bold");
    doc.text("Total Vehicles", 14, 35);
    doc.setFontSize("10");
    doc.setFont("Helvertica", "Normal");
    doc.text(":  " + productList.length, 45, 35);

    doc.autoTable({
      theme: "grid",
      head: [["Vehicle Number", "Type", "Capacity", "Driver", "Price per KM"]],
      body: productList.map((product) => [
        [product.number],
        [product.type],
        [product.numOfSeats],
        [product.driver],
        ["Rs. " + product.pricePerKM + ".00"],
      ]),
      margin: { top: 65 },
    });
    doc.save("vehicleList(" + new Date().toISOString() + ").pdf");
  };

  return (
    <>
      <Layout>
        <div>
          <div class="pagetitle">
            <h1>Vehicles</h1>
            <nav>
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li class="breadcrumb-item">Vehicles</li>
                <li class="breadcrumb-item active">vehicles</li>
              </ol>
            </nav>
          </div>
          <section class="section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card">
                  <div class="card-body py-2 px-4">
                    <div class="row d-flex justify-content-between align-items-center">
                      <div class="search-bar col-6">
                        <div class="input-group my-3 search-form d-flex align-items-center">
                          <input
                            type="text"
                            class="form-control search"
                            placeholder="Search by vehicle number"
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
                              Type:
                              <div class="col">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  name="type"
                                  onChange={(e) => {
                                    handleCategoryChange(e);
                                  }}
                                >
                                  <option value="Car">Car</option>
                                  <option value="Van">Van</option>
                                  <option value="Lorry">Lorry</option>
                                  <option value="Three wheel">
                                    Three wheel
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="col-5">
                            <div class="row d-flex align-items-center">
                              Sort by:
                              <div class="col">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                  name="sort"
                                  onChange={(e) => {}}
                                >
                                  <option value="number">Number</option>
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
                    <table id="example" class="table table-striped my">
                      <thead>
                        <tr>
                          <th>Vehicle Number</th>
                          <th>Type</th>
                          <th>Capacity</th>
                          <th>Driver</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredList.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{value.number}</td>
                              <td>{value.type}</td>
                              <td>{value.numOfSeats}kg</td>
                              <td>{value.driver}</td>
                              <td class="table-action">
                                {/* <Link
                                  to={"/viewSeller/" + value._id}
                                  class="top-bar-link"
                                > */}
                                <button
                                  class="btn btn-pill btn-success btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#verticalycentered"
                                  onClick={() => setItem(value)}
                                >
                                  View
                                </button>
                                {/* </Link> */}
                                <Link
                                  to={"/editVehicle/" + value._id}
                                  class="top-bar-link"
                                >
                                  <button
                                    class="btn btn-pill btn-warning btn-sm"
                                    style={{ marginLeft: 10, width: 60 }}
                                  >
                                    Edit
                                  </button>
                                </Link>

                                <button
                                  class="btn btn-pill btn-danger btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                  onClick={() => {
                                    handleDeleteVehicle(value._id);
                                  }}
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                        {filteredList.length === 0 && (
                          <p>No items to display</p>
                        )}
                        <div
                          class="modal fade"
                          id="verticalycentered"
                          tabindex="-1"
                        >
                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title">
                                  {item?.number?.toUpperCase()}
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                <div class="mb-2 d-flex justify-content-center"></div>
                                <div class="my-3">
                                  <ul class="list-group">
                                    <li class="list-group-item">
                                      Type: {item?.type}
                                    </li>
                                    <li class="list-group-item">
                                      Capacity: {item?.numOfSeats}kg
                                    </li>
                                    <li class="list-group-item">
                                      Driver: {item?.driver}
                                    </li>
                                    <li class="list-group-item">
                                      Price per KM: Rs.{item?.pricePerKM}.00
                                    </li>
                                    {/* <li class="list-group-item">
                                      Description: {item?.description}
                                    </li> */}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </tbody>
                      <div class="mt-4">
                        <button
                          class="btn  btn-primary"
                          style={{ marginBottom: 25 }}
                          onClick={downloadPDF}
                        >
                          Download PDF
                        </button>
                      </div>
                    </table>
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

export default Vehicles;
