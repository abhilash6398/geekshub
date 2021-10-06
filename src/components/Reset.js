import React from "react";
import "../style/Login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Reset = () => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("*Required"),
    confirmPassword: Yup.string().required("*Required"),
  });

  const onSubmit = (event) => {
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const data = {
      password,
      confirmPassword,
    };

    axios
      .post("http://3.109.247.241:6778/api/v2/customer/resetPassword", data)
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

  //     setTimeout(() => {
  //       props.resetForm();
  //       props.setSubmitting(false);
  //     }, 2000);
  //   };

  return (
    <div>
      <div class="loginwrap">
        <div class="pgaddressrow">
          <h1 class="heading">Login / Register</h1>
          <h4 class="smheading">
            <a href="/home ">Home</a> / Login / <a href="/reset ">Reset</a>
          </h4>
        </div>
        <div class="loginformCon">
          <h2>RESET</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <div className="loginforminputs">
                  <div className="form-group">
                    <label>Enter Your Password</label>
                    <Field name="password" className="form-control" type="password" />
                    <div className="error">
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Confirm Your Password</label>
                    <Field name="password" className="form-control" type="password" />
                    <div className="error">
                      <ErrorMessage name="confirmPassword" />
                    </div>
                  </div>
                  <div className="loginbtnrow">
                    <button className="loginbtn" type="submit">
                      {props.isSubmitting ? "Loading" : "SUBMIT"}
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Reset;
