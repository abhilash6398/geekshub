import React, { useState } from "react";
import PropTypes from "prop-types";
import Nav from "./Navbar";
import { BrowserRouter, Redirect, Router } from "react-router-dom";

import "../style/Login.css";
import FooterComponent from "./Footer";

//   xyz;123456789 http://3.109.247.241:6778/api/v2/customer/signin
//  imohit; mohit1234
async function editUser(credentials) {
  return fetch("http://3.109.247.241:6778/api/v2/customer/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function EditProfile({ setToken }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await editUser({
      firstName,
      lastName,
    });
    setToken(token);
  };

  function updateUser() {
      let item = {firstName,lastName}
      console.warn("item", item)
      fetch('http://3.109.247.241:6778/api/v2/customer/profile',{
          method:'PUT'
      }).then((result)=>{

      })
  }

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
      <div className="pgaddressrow">
        <h1 className="heading">Edit Profile</h1>
        <h4 className="smheading">
          <a style={{ textDecoration: "none" }} href="/profile ">
            Profile
          </a>{" "}
          / Edit Profile
        </h4>
      </div>
      <div className="loginformCon">
        <h4>EDIT</h4>
        <h2>PROFILE</h2>
        <form onSubmit={handleSubmit}>
          <div className="loginforminputs">
            {/* <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> */}
            <div className="form-group">
              <label>FirstName</label>
              <input
                name="firstName"
                className="form-control"
                value={firstName}
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>LastName</label>
              <input
                className="form-control"
                name="lastName"
                value={lastName}
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="loginbtnrow">
              <button className="loginbtn" type="submit" onClick={updateUser}>
                SAVE CHANGES
              </button>
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

EditProfile.propTypes = {
  setToken: PropTypes.func.isRequired,
};
