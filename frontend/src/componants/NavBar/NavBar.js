import React from "react";
import profileImg from "../../assests/images/profile.png";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../controllers/user";

const NavBar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const type = localStorage.getItem("type");
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  return (
    <div>
      <header id="header" class="header fixed-top d-flex align-items-center">
        <div class="d-flex align-items-center justify-content-between">
          <a href="index.html" class="logo d-flex align-items-center">
            <img src="assets/img/logo.png" alt="" />
            <span class="d-none d-lg-block">Go-Green</span>
          </a>
          <i class="bi bi-list toggle-sidebar-btn"></i>
        </div>

        <div class="search-bar">
          <form
            class="search-form d-flex align-items-center"
            method="POST"
            action="#"
          >
            <input
              type="text"
              name="query"
              placeholder="Search"
              title="Enter search keyword"
            />
            <button type="submit" title="Search">
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>

        <nav class="header-nav ms-auto">
          <ul class="d-flex align-items-center">
            {isLoggedIn === "true" ? (
              <>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link nav-icon"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bi bi-bell"></i>
                    <span class="badge bg-primary badge-number">4</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link nav-icon"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <i class="bi bi-chat-left-text"></i>
                    <span class="badge bg-success badge-number">3</span>
                  </a>
                </li>
                <li class="nav-item dropdown pe-3">
                  <a
                    class="nav-link nav-profile d-flex align-items-center pe-0"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src={profileImg}
                      alt="Profile"
                      class="rounded-circle"
                    />
                    <span class="d-none d-md-block dropdown-toggle ps-2">
                      {userName?.length > 0 ? userName : "Demith Rathnayaka"}
                    </span>
                  </a>
                </li>

                {type === "customer" && (
                  <li class="nav-item dropdown pe-3">
                    <button
                      class="btn btn-primary btn-pill"
                      onClick={() => {
                        navigate(`/cart/${userId}`);
                      }}
                    >
                      Cart
                    </button>
                  </li>
                )}

                <li class="nav-item dropdown pe-3">
                  <button
                    class="btn btn-danger btn-pill"
                    onClick={() => {
                      logoutUser();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item dropdown pe-3">
                  <button
                    class="btn btn-primary btn-pill"
                    onClick={() => navigate("/register")}
                  >
                    SignUp
                  </button>
                </li>
                <li class="nav-item dropdown pe-3">
                  <button
                    class="btn btn-success btn-pill"
                    onClick={() => navigate("/login")}
                  >
                    SignIn
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
