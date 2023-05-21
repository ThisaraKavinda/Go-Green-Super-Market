import React from "react";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";

const Layout = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const type = localStorage.getItem("type");
  return (
    <body>
      <NavBar />
      <SideBar />
      <main
        id="main"
        class="main"
        style={{
          marginLeft:
            isLoggedIn === "false" || type === "customer" ? "0px" : undefined,
        }}
      >
        {children}
      </main>
    </body>
  );
};

export default Layout;
