import React, { useState, useEffect } from "react";
import Layout from "../../componants/Layout/Layout";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import { getAllCheckouts, editCheckout } from "../../controllers/checkout";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ProductReport() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getAllCheckouts()
      .then((data) => {
        setProductList(data);
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

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setDrawColor(8, 30, 61);
    doc.setLineWidth(70);
    doc.line(0, 0, 1000, 0);

    doc.setFontSize("22");
    doc.setTextColor(255, 255, 255);
    doc.setFont("Helvertica", "bold");
    doc.text("Go-Green supermarket", 65, 12);

    doc.setFontSize("18");
    doc.setTextColor(255, 255, 255);
    doc.setFont("Helvertica", "bold");
    doc.text("Orders Report", 82, 20);
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
    doc.text("Total Orders", 14, 55);
    doc.setFontSize("10");
    doc.setFont("Helvertica", "Normal");
    doc.text(":  " + productList.length, 45, 55);

    doc.autoTable({
      theme: "grid",
      head: [
        [
          "Order Id",
          "Customer Name",
          "Email",
          "Address",
          "Item Count",
          "Total Amount",
        ],
      ],
      body: productList.map((product) => [
        [product._id],
        [product.name],
        [product.email],
        [product.address],
        [product.numOfItems],
        ["Rs. " + product.price + ".00"],
      ]),
      margin: { top: 65 },
    });
    doc.save("OrderReport(" + new Date().toISOString() + ").pdf");
  };

  return (
    <React.Fragment>
      <Layout>
        <div class="wrapper">
          {/* <Navbar /> */}
          <div class="main">
            <main class="content">
              <div class="container-fluid">
                <div class="pagetitle">
                  <h1>Product Report</h1>
                  <nav>
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="breadcrumb-item">Orders</li>
                      <li class="breadcrumb-item active">Report</li>
                    </ol>
                  </nav>
                </div>
                <br />
                <div>
                  <button
                    class="btn  btn-primary"
                    style={{ marginBottom: 25 }}
                    onClick={downloadPDF}
                  >
                    Download PDF
                  </button>
                </div>

                <div class="col-12">
                  <div class="card">
                    <div class="card-body">
                      <table id="example" class="table table-striped my">
                        <thead>
                          <tr>
                            <th class="text-center">Order Id</th>
                            <th class="text-center">Customer Name</th>
                            <th class="text-center">Email</th>
                            <th class="text-center">Address</th>
                            <th class="text-center">Item Count</th>
                            <th class="text-center">Total Amount</th>
                          </tr>
                        </thead>

                        <tbody>
                          {productList?.map((product) => (
                            <tr id="OrderId">
                              <td class="text-center">{product._id}</td>
                              <td class="text-center">{product.name}</td>
                              <td class="text-center">{product.email}</td>
                              <td class="text-center">{product.address}</td>
                              <td class="text-center">{product.numOfItems}</td>
                              <td class="text-center">Rs.{product.price}.00</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <p></p>
              </div>
            </main>
          </div>
        </div>
      </Layout>
      {/* <Sugar customLoading={loading} background="blur"/> */}
    </React.Fragment>
  );
}
