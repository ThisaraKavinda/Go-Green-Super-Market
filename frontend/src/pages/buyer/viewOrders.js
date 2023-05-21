import React, { useEffect, useState } from "react";
import Layout from "../../componants/Layout/Layout";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { getAllCheckouts, editCheckout } from "../../controllers/checkout";
import { getAllVehicles } from "../../controllers/vehicle";

const ViewOrders = () => {
  const [productList, setProductList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [item, setItem] = useState({});
  const [vehicleData, setVehicleData] = useState([]);
  const [vehicleOptions, setVehicleOptions] = useState([]);
  const [assigedVehicle, setAssigedVehicle] = useState({});

  useEffect(() => {
    getAllCheckouts()
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
    getAllVehicles()
      .then((data) => {
        setVehicleData(data);
        setVehicleOptions(
          data?.map((vehicle) => ({
            label: `${vehicle.number} - ${vehicle.type}`,
            value: vehicle.number,
          }))
        );
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

  const handleChangeVehicle = (e) => {
    if (e.target.value) {
      const selected = vehicleData.find(
        (vehicle) => vehicle.number === e.target.value
      );
      setAssigedVehicle({
        vehicleId: selected._id,
        vehicleNumber: selected.number,
        driver: selected.driver,
      });
    }
  };

  const handleAssignVehicle = (id) => {
    editCheckout(id, assigedVehicle).then((res) => {
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
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <table id="example" class="table table-striped my">
                      <thead>
                        <tr>
                          <th>Order id</th>
                          <th>Customer Name</th>
                          <th>No. of items</th>
                          <th>Price</th>
                          <th>Vehicle</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredList.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td>{value._id}</td>
                              <td>{value.name}</td>
                              <td>{value.numOfItems}</td>
                              <td>{value.price}</td>
                              <td>
                                {value?.vehicleId?.length > 0 ? (
                                  value.vehicleNumber
                                ) : (
                                  <select
                                    class="form-select"
                                    aria-label="Default select example"
                                    name="vehicle"
                                    onChange={handleChangeVehicle}
                                  >
                                    <option value="" disabled selected>Select a vehicle</option>
                                    {vehicleOptions.map((vehicle) => (
                                      <option
                                        value={vehicle.value}
                                        key={vehicle.value}
                                      >
                                        {vehicle.label}
                                      </option>
                                    ))}
                                  </select>
                                )}
                              </td>
                              <td class="table-action">
                                <button
                                  class="btn btn-pill btn-success btn-sm"
                                  style={{ marginLeft: 10, width: 60 }}
                                  data-bs-toggle="modal"
                                  data-bs-target="#verticalycentered"
                                  onClick={() => setItem(value)}
                                >
                                  View
                                </button>

                                {value?.vehicleId === undefined && (
                                  <button
                                    class="btn btn-pill btn-primary btn-sm"
                                    style={{ marginLeft: 10, width: 60 }}
                                    onClick={() => {
                                      handleAssignVehicle(value._id);
                                    }}
                                  >
                                    Assign
                                  </button>
                                )}
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
                                <h5 class="modal-title">Order: #{item?._id}</h5>
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
                                      Name: {item?.name}
                                    </li>
                                    <li class="list-group-item">
                                      Number of items: {item?.numOfItems}
                                    </li>
                                    <li class="list-group-item">
                                      Address: {item?.address}
                                    </li>
                                    <li class="list-group-item">
                                      Price: Rs.{item?.price}.00
                                    </li>
                                    <li class="list-group-item">
                                      Items:{" "}
                                      <ol>
                                        {item?.items?.map((item) => (
                                          <li>item</li>
                                        ))}
                                      </ol>
                                    </li>
                                    <li class="list-group-item">
                                      Date: {item?.date}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </tbody>
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

export default ViewOrders;
