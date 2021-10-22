import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import useToken from "./useToken";
import { Link, useHistory } from "react-router-dom";

function AddAddress() {
  const userToken = useToken();
  // const history = useHistory([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [landmark, setLandmark] = useState("");
  const [mobile, setMobile] = useState("");

  function saveChanges() {
    console.warn({
      firstName,
      lastName,
      address,
      city,
      state,
      pincode,
      landmark,
      mobile,
    });
    let data = {
      firstName,
      lastName,
      address,
      city,
      state,
      pincode,
      landmark,
      mobile,
    };
    fetch("http://3.109.247.241:6778/api/v2/customer/address", {
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

    // const history = useHistory();
    // history.push('/address');

    // history.push("/address");
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
      {/* <div className="container">
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="First Name: "
        />
        <br />
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Last Name: "
        />
        <br />
        <label>Address</label>
        <input
          type="textarea"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address: "
        />
        <br />
        <label>Pincode</label>
        <input
          type="number"
          value={pincode}
          onChange={(e) => {
            setPincode(e.target.value);
          }}
          placeholder="Pincode: "
        />
        <br />
        <label>City</label>
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="City: "
        />
        <br />
        <label>State</label>
        <input
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
          placeholder="State: "
        />
        <br />
        <label>Landmark</label>
        <input
          type="text"
          value={landmark}
          onChange={(e) => {
            setLandmark(e.target.value);
          }}
          placeholder="Landmark: "
        />
        <br />
        <label>Mobile Number</label>
        <input
          type="number"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder="Mobile: "
        />
        <br />
        <button type="submit" className="btn btn-warning" onClick={saveChanges}>
          Save Changes
        </button>
      </div> */}
      <div class="pgaddressrow">
        <h1 class="heading">Add Address</h1>
        <h4 class="smheading">
          <a href="/home ">Home</a> / Add Address
        </h4>
      </div>
      <div className="container">
        <div class="loginwrap">
          <div class="loginformCon signup">
            <h4>ADD</h4>
            <h2>ADDRESS</h2>
            <div class="loginforminputs">
              <div class="imvendwrap">
                <div class="row clearfix">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        name="firstName"
                        class="form-control"
                        type="text"
                        placeholder="Enter Your First Name"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        name="lastName"
                        class="form-control"
                        type="text"
                        placeholder="Enter Your Last Name"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Pincode</label>
                      <input
                        name="pincode"
                        class="form-control"
                        type="number"
                        placeholder="Enter Your Pincode"
                        value={pincode}
                        onChange={(e) => {
                          setPincode(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>Phone Number</label>
                      <input
                        name="phonenumber"
                        class="form-control"
                        type="number"
                        placeholder="Enter Your Phone Number"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label>Address</label>
                      <input
                        name="address"
                        class="form-control"
                        type="textarea"
                        placeholder="Enter Your Address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>City</label>
                      <input
                        name="city"
                        class="form-control"
                        type="text"
                        placeholder="Enter Your City"
                        value={city}
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label>State</label>
                      <input
                        name="state"
                        class="form-control"
                        type="text"
                        placeholder="Enter Your State"
                        value={state}
                        onChange={(e) => {
                          setState(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div class="row clearfix">
                  <div class="col-sm-12">
                    <div class="form-group">
                      <label>Landmark</label>
                      <input
                        name="landmark"
                        class="form-control"
                        type="textarea"
                        placeholder="Enter Your Landmark"
                        value={landmark}
                        onChange={(e) => {
                          setLandmark(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-warning"
                onClick={saveChanges}
              >
                SAVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AddAddress);
