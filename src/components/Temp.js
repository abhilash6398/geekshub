import React, { useState } from "react";
import PropTypes from "prop-types";
import Nav from "./Navbar";
import { BrowserRouter, Redirect, Router } from "react-router-dom";

import "../style/Login.css";
import FooterComponent from "./Footer";

//   xyz;123456789 http://3.109.247.241:6778/api/v2/customer/signin
//  imohit; mohit1234
async function loginUser(credentials) {
  return fetch("http://3.109.247.241:6778/api/v2/customer/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    // <div classNameName="login-wrapper">
    // <h1>Please Log In</h1>
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     <p>Username</p>
    //     <input type="text" onChange={e => setUserName(e.target.value)} />
    //   </label>
    //   <label>
    //     <p>Password</p>
    //     <input type="password"  onChange={e => setPassword(e.target.value)}/>
    //   </label>
    //   <div>
    //     <button type="submit">Submit</button>
    //   </div>
    // </form>
    // </div>

    <>
      <Nav />
      <div className="pgaddressrow">
        <h1 className="heading">Login / Register</h1>
        <h4 className="smheading">
          <a style={{ textDecoration: "none" }} href="/home ">
            Home
          </a>{" "}
          / Login /{" "}
          <a style={{ textDecoration: "none" }} href="/vendor ">
            Register
          </a>
        </h4>
      </div>
      <div className="loginformCon">
        <h4>Welome Back</h4>
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit}>
          <div className="loginforminputs">
            <div className="form-group">
              <label>Username or email address</label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="loginbtnrow">
              <button className="loginbtn" type="submit">
                LOG IN
              </button>
              <input
                type="checkbox"
                id="rememberme"
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />{" "}
              Remember me
            </div>
            <div className="lostyourpasswordrw">
              <a href="/forgot">Lost your password?</a>
            </div>
            <div className="lostyourpasswordrw text-right">
              <a href="/signup">Create your Account</a>
            </div>
          </div>
        </form>
        {/* <BrowserRouter>
          <Router>
            <Redirect to="/home" />
          </Router>
        </BrowserRouter> */}
      </div>

      <FooterComponent />
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
