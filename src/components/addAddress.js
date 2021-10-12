import React, { useEffect } from "react";
import "../style/Login.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import useToken from "./useToken";

export default function Signup() {
  const initialValues = {
    firstName: "",
    lastName: "",
    pincode: "",
    mobileno: "",
    address: "",
    // phoneno: "",
    city: "",
    state: "",
    landmark: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("*Required").min(3, "Too short Name"),
    username: Yup.string()

      .required("*Required")
      .min(3, "Too short Name"),
    // .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,"Number & special character is restricted"),

    // last: Yup.string().last("Enter valid LastName").require("Required")
    // .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,"Number & special character is restricted"),

    email: Yup.string().email("Enter valid Email").required("*Required"),

    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("*Required")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),

    shopurl: Yup.string().matches(
      // /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Website should be a valid URL"
    ),

    phoneno: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("*Required"),

    pincode: Yup.number().required("*Required"),

    shopname: Yup.string()

      // .required("Required")
      .min(3, "Too short Name"),
    user: Yup.string().required("*Required"),
    address: Yup.string().required("*Required"),
    city: Yup.string().required("*Required"),
    state: Yup.string().required("*Required"),
    landmark: Yup.string().required("*Required"),
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const city = event.target.city.value;
    const address = event.target.address.value;
    const state = event.target.state.value;
    const landmark = event.target.landmark.value;
    const phoneno = event.target.phoneno.value;
    // const email = event.target.email.value;
    // const password = event.target.password.value;
    // const username = event.target.username.value;
    // const user = event.target.user.value;
    const data = {
      firstName,
      lastName,
      phoneno,
      //   email,
      //   password,
      //   user,
      //   username,
      city,
      state,
      address,
      landmark,
    };
    axios
      .post("http://3.109.247.241:6778/api/v2/customer/address/", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //   const onSubmit = (values, props) => {
  //     console.log(values);
  //     // console.log(props)
  //     setTimeout(() => {
  //       props.resetForm();
  //       props.setSubmitting(false);
  //     }, 2000);
  //   };
  // const userToken = useToken();
  // const userData = userToken.userData.user;

  // useEffect(() => {
  //   const user = fetch('http://3.109.247.241:6678/api/users/profile/' + userToken.userData.data.id, {
  
  //       method: 'POST',
  //       headers: {
  
  //         'token': 'bearer ' + userToken.userData.data.token,
  //         'Content-Type': 'application/json'
  //       },
  //       // body: JSON.stringify(credentials)
  
  //     })
  //       .then((response) => response.json())
  //       .then((responseData) => {
  //         console.log(responseData);
  //         return responseData;
  //       })
  //       .catch(error => console.warn(error));
  //   }, []);
  
    //  console.log("aa", user);

  return (
    <div>
      <div class="pgaddressrow">
        <h1 class="heading">Login / Register</h1>
        <h4 class="smheading">
          <a href="/home" style={{ textDecoration: "none" }}>
            Home
          </a>{" "}
          / AddAddress
        </h4>
      </div>
      <div class="loginformCon signup">
        <h4>ADD</h4>
        <h2>ADDRESS</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form onSubmit={submitHandler}>
              <div class="loginforminputs">
                <div class="imvendwrap">
                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>First Name</label>
                        <Field
                          name="firstName"
                          class="form-control"
                          type="text"
                          placeholder="Enter FirstName"
                        />
                        {/* <ErrorMessage name="first" /> */}
                        <div className="error">
                          <ErrorMessage name="firstName" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Last Name</label>
                        <Field
                          name="lastName"
                          class="form-control"
                          type="text"
                          placeholder="(Optional)"
                        />
                        {/* <ErrorMessage name="last" /> */}
                        <div className="error">
                          <ErrorMessage name="lastName" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Pincode</label>
                        <Field
                          name="pincode"
                          class="form-control"
                          type="number"
                          placeholder="Enter Pincode"
                        />
                        {/* <ErrorMessage name="email" /> */}
                        <div className="error">
                          <ErrorMessage name="pincode" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Phone Number</label>
                        <Field
                          name="phoneno"
                          class="form-control"
                          type="number"
                          placeholder="Enter Phone Number"
                        />
                        {/* <ErrorMessage name="password" /> */}
                        <div className="error">
                          <ErrorMessage name="phoneno" />
                        </div>
                      </div>
                    </div>
                    <div class="clearfix">
                      <div class="form-group">
                        <label>Address</label>
                        <textarea
                          name="address"
                          class="form-control"
                          placeholder="Enter Address"
                          type="text"
                        />
                        <ErrorMessage name="address" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>City</label>
                        <Field
                          name="city"
                          class="form-control"
                          type="text"
                          placeholder="Enter City"
                        />
                        {/* <ErrorMessage name="password" /> */}
                        <div className="error">
                          <ErrorMessage name="city" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>State</label>
                        <Field
                          name="state"
                          class="form-control"
                          type="text"
                          placeholder="Enter State"
                        />
                        {/* <ErrorMessage name="password" /> */}
                        <div className="error">
                          <ErrorMessage name="state" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row clearfix">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <label>Landmark</label>
                        <Field
                          name="landmark"
                          class="form-control"
                          type="text"
                          placeholder="Enter Landmark"
                        />
                        <ErrorMessage name="landmark" />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="loginbtnrow">
                  <button
                    class="loginbtn"
                    disabled={props.isSubmitting}
                    type="submit"
                  >
                    {props.isSubmitting ? "Loading" : "SAVE CHANGES"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
