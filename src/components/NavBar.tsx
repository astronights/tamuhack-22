import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/css/Component.scss";

const NavBar = () => {
  return (
    <AppBar
      className="nav-bar"
      // style={{ backgroundColor: "#e7e7e7" }}
      position="sticky"
    >
      <Toolbar>
        <NavLink
          className="app-name nav-link"
          //   activeClassName="active-nav"
          to="/"
        >
          TAMUHack Project 1
        </NavLink>
        {/* <NavLink className="nav-link" to="/home">
          Home
        </NavLink> */}
        <NavLink className="nav-link" to="/about">
          Login
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
