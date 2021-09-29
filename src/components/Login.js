import React from "react";
import "../style/Login.css";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid Email").required("*Required"),

    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("*Required")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),

    // rememberMe: Yup.string().oneOf(["true"], "Accept terms & conditions"),
  });
  const onSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const data = {
      email,
      password,
    };
    axios
      .post("http://3.109.247.241:6778/api/v2/customer/signin", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const onSubmit = (values, props) => {
  //   console.log(values);

  //   setTimeout(() => {
  //     props.resetForm();
  //     props.setSubmitting(false);
  //   }, 2000);
  // return axios({
  //   method: "POST",
  //   url: "http://3.109.247.241:6778/api/v2/customer/signin",
  //   data: values,
  //   // auth: {
  //   //   email,
  //   //   password
  //   // }
  // })
  //   .then((response) => {
  //     props.setSubmitting(false);
  //     props.resetForm();
  //   })
  //   .catch((error) => {
  //     props.setSubmitting(false);
  //   });

  // this shouldn't be outside the .then/.catch
  // if you are going to use .then/.catch, put the above line inside it
  // authenticate.login();
  // Router.push("/")
  // };

  return (
    <div>
      <div className="pgaddressrow">
        <h1 className="heading">Login / Register</h1>
        <h4 className="smheading">
          <a href="/" style={{textDecoration:"none"}}>Home</a> / Login / <a href="/signup " style={{textDecoration:"none"}}>Register</a>
        </h4>
      </div>

      <div className="loginformCon">
        <h4>Welome Back</h4>
        <h2>LOGIN</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form>
              <div className="loginforminputs">
                <div className="form-group">
                  <label>Username or email address</label>

                  <Field name="email" className="form-control" type="text" />
                  {/* <ErrorMessage name="email" /> */}
                  <div className="error">
                    <ErrorMessage name="email" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Password</label>

                  <Field
                    name="password"
                    className="form-control"
                    type="password"
                  />
                  {/* <ErrorMessage name="password" /> */}
                  <div className="error">
                    <ErrorMessage name="password" />
                  </div>
                </div>

                <div className="loginbtnrow">
                  <button
                    disabled={props.isSubmitting}
                    className="loginbtn"
                    type="submit"
                  >
                    {props.isSubmitting ? "Loading" : "LOG IN"}
                  </button>
                  <Field
                    name="rememberMe"
                    type="checkbox"
                    id="rememberme"
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                  />
                  Remember me
                </div>
                <div className="lostyourpasswordrw">
                  <a href="/forgot ">Lost your password?</a>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
