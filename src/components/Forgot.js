import React from "react";
import "../style/Login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Forgot = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid Email").required("Required"),
  });

  const onSubmit = (values, props) => {
    console.log(values);

    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      <div className="loginwrap">
        <div className="pgaddressrow">
          <h1 className="heading">Login / Register</h1>
          <h4 className="smheading">
            <a href="/login " style={{textDecoration:"none"}}>Home</a> / Login / <a href="/forgot " style={{textDecoration:"none"}}>Forgot</a>
          </h4>
        </div>
        <div className="loginformCon">
          <h2>FORGOT</h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <div className="loginforminputs">
                  <div className="form-group">
                    <label>Username or Email Address</label>
                    <Field name="email" className="form-control" type="text" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="loginbtnrow">
                    <button className="loginbtn" type="submit">
                      {props.isSubmitting ? "Loading" : "SEND"}
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

export default Forgot;
