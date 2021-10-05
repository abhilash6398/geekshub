import React from "react";
import "../style/Navbar.css";
import { Navbar, Container } from "react-bootstrap";
import logo from "../assets/images/logo.png";
import { BrowserRouter, Link } from "react-router-dom";
const Nav = () => {
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
              <Link to="/home">Home</Link>
            </li>
            <li>About us</li>
            <li>Latest Products</li>
            <li>Contact us</li>
            <li>
              Shop
              <div class="dropdown-content">
                <a href="# ">Baby and Todlar Toys</a>
                <a href="# ">Dolls & Accessories</a>
                <a href="# ">Dress Up & Pretend Play</a>
                <a href="# ">PC & Mobile Accessories</a>
                <a href="# ">Video Games</a>
                <a href="# ">Ride-Ons Tricycles & Wagons</a>
              </div>
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
            <li>Account</li>
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
