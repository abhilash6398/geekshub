import React, { useState, useEffect } from "react";
import useToken from "./useToken";

function AddAddress() {
  const userToken = useToken();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function saveChanges() {
    console.warn({ firstName, lastName });
    let data = { firstName, lastName };
    fetch("http://3.109.247.241:6778/api/v2/customer/profile", {
      method: "PUT",
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
    // <div className="container">
    //   <label>First Name</label>
    //   <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} placeholder="First Name"/>
    //   <br/>
    //   <label>Last Name</label>
    //   <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} placeholder="Last Name"/><br/>
    //   <button type="submit" className="btn btn-warning" onClick={saveChanges}>Save Changes</button>
    // </div>
    <>
      <div class="pgaddressrow">
        <h1 class="heading">Edit Profile</h1>
        <h4 class="smheading">
          <a href="/home " style={{textDecoration:"none"}}>Home</a> / Edit Profile
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
      </div>
    </>
  );
}

export default AddAddress;
