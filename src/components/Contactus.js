import React, { useState, useEffect } from "react";
import useToken from "./useToken";

function Contactus() {
  const userToken = useToken();
  const [yourname, setYourName] = useState("");
  const [emailaddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  function saveChanges() {
    console.warn({ yourname, emailaddress, message, phonenumber });
    let data = { yourname, emailaddress, message, phonenumber };
    fetch("http://3.109.247.241:6778/api/v2/customer/contactus", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: userToken.userData.data.token,
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
  }
  // const requestOptions = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     token: userToken.userData.data.token,
  //   },
  // };
  // fetch("http://3.109.247.241:6778/api/v2/customer/address", requestOptions)
  //   .then((response) => response.json())
  //   .then((responseData) => {
  //     setFirstName([...responseData.data]);
  //     console.log("Array Data in Address:", firstName);
  //     console.log(responseData.data);
  //   })
  //   .catch((error) => console.warn(error));
  return (
    <>
      <div className="pgaddressrow">
        <h1 className="heading">Contact Us </h1>
        <h4 className="smheading">
          <a href="/home" style={{ textDecoration: "none" }}>
            Home
          </a>{" "}
          / Contact Us
        </h4>
      </div>
      <div className="container">
        <div class="loginforminputs">
          <div class="imvendwrap">
            <div class="row clearfix">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Yourname</label>
                  <input
                    name="yourName"
                    class="form-control"
                    type="text"
                    placeholder="Enter Your Name"
                    value={yourname}
                    onChange={(e) => {
                      setYourName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <h4>
                    <strong>Address</strong>
                  </h4>
                  <hr />
                  <p className="text-muted">
                    Kuwait City, Al-Shuhada Street,Al-Hamra Mall, Floor 35
                  </p>
                  <br />
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Email Address</label>
                  <input
                    name="Email Address"
                    class="form-control"
                    type="email"
                    placeholder="Enter Email Address"
                    value={emailaddress}
                    onChange={(e) => {
                      setEmailAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <h4>
                    <strong>Phone Number</strong>
                  </h4>
                  <hr />
                  <p className="text-muted">+965-22203555</p>
                  <p className="text-muted">Sun to Thurs from 8AM to 4PM</p>
                  <br />
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phonenumber"
                    class="form-control"
                    type="number"
                    placeholder="Enter Phone Number"
                    value={phonenumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <h4>
                    <strong>info@geekshub.com</strong>
                  </h4>
                  <hr />
                  <p className="text-muted">Send us your query anytime</p>
                  <br />
                </div>
              </div>
            </div>
            <div class="row clearfix">
              <div class="col-sm-6">
                <div class="form-group">
                  <label>Message</label>
                  <input
                    name="Message"
                    class="form-control"
                    type="textarea"
                    placeholder="Enter your Message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-warning" onClick={saveChanges}>
          Save Changes
        </button>
      </div>
    </>
  );
}

export default Contactus;
