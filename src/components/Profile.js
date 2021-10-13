import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import useToken from "./useToken";

// import {useHistory} from 'react-router-dom';
import axios from "axios";

const Profile = () => {
  const userToken = useToken();
  const userData = userToken.userData.user;

  // useEffect(() => {
  // const user = fetch('http://3.109.247.241:6678/api/users/profile/' + userToken.id, {

  //     method: 'GET',
  //     headers: {

  //       'token': 'bearer ' + userToken.userData.data.token,
  //       'Content-Type': 'application/json'
  //     },
  //     // body: JSON.stringify(credentials)

  //   })
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       console.log(responseData);
  //       return responseData;
  //     })
  //     .catch(error => console.warn(error));
  // }, []);

  //  console.log("aa", user);
  console.log("data: ", userToken.userData.data);
  return (
    <div>
      <div class="loginwrap">
        <div class="pgaddressrow">
          <h1 class="heading">My Account</h1>
          <h4 class="smheading">
            <a href="/home" style={{textDecoration:"none"}}>Home</a> / Profile{" "}
          </h4>
        </div>

        <div className="col-sm-2" style={{ textAlign: "right",marginLeft:"950px",fontStyle:"initial" }}>
          <br/>
          <button className="btn btn-warning"><a href="/editProfile" style={{color:"black",textDecoration:"none",fontWeight:"bold"}}>EDIT PROFILE</a></button>
        </div>

        <div class="container">
          <div class="profilinputs">
            <div class="imvendwrap">
              <div class="row clearfix">
                <div class="col-sm-4">
                  <div class="control-group file-upload" id="file-upload1">
                    <div class="image-box text-center">
                      <p> {userToken.userData.data.user.profilePicture} </p>
                      <img src="" alt=" " />
                    </div>

                    <div class="controls" style={{ display: "none" }}>
                      <input type="file" name="contact_image_1" />
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="nameconbox">
                    <h4>First Name</h4>
                    {/* <p>{userToken.userData.data.token}</p> */}
                    <p class="paratrxt">
                      {userToken.userData.data.user.firstName}{" "}
                    </p>

                  </div>

                  <br />

                  <div class="emailconbox">
                    <h4>Email-ID</h4>
                    <p class="paratrxt">{userToken.userData.data.user.email}</p>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="phoneconbox">
                    <h4>LastName</h4>
                    <p class="paratrxt">
                      {userToken.userData.data.user.lastName}
                    </p>
                  </div>
                  <br />
                  <div class="phoneconbox">
                    <h4>Username</h4>
                    <p class="paratrxt">
                      {userToken.userData.data.user.username}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
