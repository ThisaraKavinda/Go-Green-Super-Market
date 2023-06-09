import React from "react";

const SideBar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const type = localStorage.getItem("type");
  return (
    <>
      {isLoggedIn === "false" || type === "customer" ? (
        <></>
      ) : (
        <div>
          <aside id="sidebar" class="sidebar">
            <ul class="sidebar-nav" id="sidebar-nav">
              {type === "seller" ? (
                <>
                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/productDashboard">
                      <i class="bi bi-grid"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/addProduct">
                      <i class="bi bi-bag-plus"></i>
                      <span>Add product</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/products">
                      <i class="bi bi-archive"></i>
                      <span>Products</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/productReport">
                      <i class="bi bi-list-check"></i>
                      <span>Reports</span>
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/productDashboard">
                      <i class="bi bi-grid"></i>
                      <span>Dashboard</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/addSeller">
                      <i class="bi bi-person-add"></i>
                      <span>Add Seller</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/sellers">
                      <i class="bi bi-people"></i>
                      <span>Sellers</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/addVehicle">
                      <i class="bi bi-file-earmark-plus-fill"></i>
                      <span>Add Vehicle</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/vehicles">
                      <i class="bi bi-truck-front"></i>
                      <span>Vehicles</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/products">
                      <i class="bi bi-archive"></i>
                      <span>Products</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/orders">
                      <i class="bi bi-archive"></i>
                      <span>Orders</span>
                    </a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link collapsed" href="/productReport">
                      <i class="bi bi-truck-front"></i>
                      <span>Reports</span>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
};

export default SideBar;
