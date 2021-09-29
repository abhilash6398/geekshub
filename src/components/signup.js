import React from "react";
import "../style/Login.css";
import { Form, Field, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function Signup() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    shopurl: "",
    // phoneno: "",
    shopname: "",
    username:""
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()

      .required("*Required")
      .min(3, "Too short Name"),
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
      /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Website should be a valid URL"
    ),

    phoneno: Yup.number()
      .typeError("Enter valid Phone Number")
      .required("*Required"),

    shopname: Yup.string()

      // .required("Required")
      .min(3, "Too short Name"),
    user: Yup.string().required("*Required"),
  });

  const submitHandler = (event) => {
    event.preventDefault();
    const firstName = event.target.first.value;
    const lastName = event.target.last.value;
    // const phoneno = event.target.phoneno.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const username = event.target.username.value;
    const user = event.target.user.value;
    const data = {
      firstName,
      lastName,
    //   phoneno,
      email,
      password,
      user,
      username,
    };
    axios
      .post("http://3.109.247.241:6778/api/v2/customer/signup", data)
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

  return (
    <div>
      <div class="pgaddressrow">
        <h1 class="heading">Login / Register</h1>
        <h4 class="smheading">
          <a href="/" style={{textDecoration:"none"}}>Home</a> / Login / <a href="/signup " style={{textDecoration:"none"}}>Register</a>
        </h4>
      </div>
      <div class="loginformCon signup">
        <h4>HELLO</h4>
        <h2>SIGNUP</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {(props) => (
            <Form >
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
                        <label>Email</label>
                        <Field
                          name="email"
                          class="form-control"
                          type="email"
                          placeholder="Enter Email-ID"
                        />
                        {/* <ErrorMessage name="email" /> */}
                        <div className="error">
                          <ErrorMessage name="email" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Password</label>
                        <Field
                          name="password"
                          class="form-control"
                          type="password"
                          placeholder="Enter Password"
                        />
                        {/* <ErrorMessage name="password" /> */}
                        <div className="error">
                          <ErrorMessage name="password" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Shop URL</label>
                        <Field
                          name="shopurl"
                          class="form-control"
                          type="text"
                          placeholder="Enter Shop-URL"
                          disabled
                        />
                        <ErrorMessage name="shopurl" />
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group">
                        <label>Username</label>
                        <Field
                          name="username"
                          class="form-control"
                          type="text"
                          placeholder="Enter Username"
                        />
                        {/* <ErrorMessage name="phoneno" /> */}
                        <div className="error">
                          <ErrorMessage name="username" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix">
                    <div class="form-group">
                      <label>Shop Name</label>
                      <Field
                        name="shopname"
                        class="form-control"
                        placeholder="Enter Shop Name"
                        disabled
                      ></Field>
                      <ErrorMessage name="shopname" />
                    </div>
                  </div>
                </div>

                <div class="chooseonerow clearfix">
                  <div class="form-group">
                    <div
                      class="chooseone"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                      }}
                    >
                      <Field
                        type="radio"
                        name="radio-group "
                        style={{ marginRight: "5px" }}
                        disabled
                      />{" "}
                      <a
                        href="/register "
                        className="signupterms"
                        style={{ fontFamily: "inherit" }}
                      >
                        I am a Vendor
                      </a>
                    </div>
                    <div
                      class="chooseone"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        marginLeft: "20px",
                      }}
                    >
                      <div className="error">
                        <ErrorMessage name="user" />
                      </div>
                      <Field type="radio" name="user" value="Customer" /> I am a
                      Customer
                      {/* <Field
                        type="radio"
                        name="radio-group "
                        style={{ marginRight: "5px" }}
                      />{" "} */}
                    </div>
                    {/* <ErrorMessage  name="first"/> */}
                    {/* <a
                      href="/signup "
                      className="signupterms"
                      //   style={{ color: "gold" }}
                    >
                      I am a Customer
                    </a> */}
                  </div>
                </div>

                <div class="signupterms">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <a href=" ">privacy policy.</a>
                </div>
                <div class="loginbtnrow">
                  <button
                    class="loginbtn"
                    disabled={props.isSubmitting}
                    type="submit"
                  >
                    {props.isSubmitting ? "Loading" : "REGISTER"}
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
