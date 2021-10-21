import React from "react";
import "../style/Navbar.css";
import { Navbar, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
const Nav = () => {
  const logOut = () => {
    localStorage.clear();
  };
  return (
    <div className="Nav__head">
      <Navbar bg="light" sticky="top">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              width="75"
              height="78"
              className="d-inline-block align-top"
              alt="Geeks-Hub-logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <BrowserRouter>
        <div className="Nav__links">
          <ul>
            <li>
              <a href="/home"> Home</a>
            </li>
            <li>
              <a href="/aboutus"> About Us</a>
            </li>
            <li>
              Latest Products
            </li>
            <li>
              <a href="/contactus "> Contact Us</a>
            </li>
            <li>
              <a href="/vendor"> Vendor</a>
            </li>
          </ul>
        </div>
      </BrowserRouter>

      <div className="Nav__icons">
        <div className="icons">
          <ul>
            <li>
              <img
                alt=""
                src="https://img.icons8.com/material-sharp/24/000000/guest-male.png"
                style={{ padding: "0.75px" }}
              />
            </li>
            <li>
              <img
                alt=""
                src="https://img.icons8.com/ios-glyphs/24/000000/like--v1.png"
              />
            </li>
            <li>
              <img
                alt=""
                src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"
              />
            </li>
            <li>
              <img
                alt=""
                src="https://img.icons8.com/ios-filled/24/000000/search--v1.png"
              />
            </li>
          </ul>
        </div>
        <div className="icon__name">
          <ul>
            <li>
              Account{" "}
              <NavDropdown
                style={{ display: "inline !important" }}
                id="nav-dropdown-dark-example"
                menuVariant="light"
              >
                <NavDropdown.Item href="/profile">Profile </NavDropdown.Item>
                <NavDropdown.Item href="/address">
                  Saved Address{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/forgot">
                  Forgot Password{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/reset">
                  Reset Password{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="/login" onClick={logOut}>
                  Logout
                </NavDropdown.Item>{" "}
              </NavDropdown>
            </li>
            <li>Wishlist</li>
            <li>Cart</li>
            <li>Search</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
