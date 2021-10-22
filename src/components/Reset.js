import React,{useState} from "react";
import "../style/Login.css";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newpassword, setNewPassword] = useState("");

  function saveChanges() {
    console.warn({email,otp,newpassword});
    let data = {email,otp,newpassword};
    fetch("http://3.109.247.241:6778/api/v2/customer/resetPassword", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // token: userToken.userData.data.token,
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
  }

  return (
    <div className="container">
      <div class="loginwrap">
        <div class="pgaddressrow">
          <h1 class="heading">Reset Password</h1>
          <h4 class="smheading">
            <a href="/home ">Home</a> / Login / <a href="/reset ">Reset</a>
          </h4>
        </div>
        <div class="loginformCon signup">
        <h4>RESET</h4>
        <h2>PASSWORD</h2>
          <div class="loginforminputs">
            <div class="imvendwrap">
              <div class="row clearfix">
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      name="email"
                      class="form-control"
                      type="email"
                      placeholder="Enter Your Email Address"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>Otp</label>
                    <input
                      name="Otp"
                      class="form-control"
                      type="number"
                      placeholder="Enter Your Otp"
                      value={otp}
                      onChange={(e) => {
                        setOtp(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>New Password</label>
                    <input
                      name="newpassword"
                      class="form-control"
                      type="password"
                      placeholder="Enter Your New Password"
                      value={newpassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
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
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
