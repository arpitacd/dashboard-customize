import React from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";

const SignUp = () => {
  const signSubmit = async (formdata) => {
    console.log(formdata);

    const res = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });
    console.log(res.status);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "success",
        text: "you have sign up successfully",
      });
    }
  };

  return (
    <div>
      <div className="vh-100" style={{ backgroundColor: "#4070f4" }}>
        <div className="col-md-3 mx-auto pt-5" style={{ border: "5px" }}>
          <div className="card">
            <div
              className="card-body"
              style={{ background: "#fff", fontFamily: "sans-serif" }}
            >
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  cpassword: "",
                }}
                onSubmit={signSubmit}
              >
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-center">Sign Up</h3>
                    <hr />

                    <div className="field input-field">
                      <input
                        className="form-control mb-4"
                        name="username"
                        placeholder="User Name "
                        onChange={handleChange}
                        value={values.name}
                      />
                    </div>
                    <div className="field input-field">
                      <input
                        className="form-control mb-4"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={values.email}
                      />
                    </div>
                    <div className="field input-field">
                      <input
                        type="password"
                        className="form-control mb-4"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={values.password}
                      />
                    </div>
                    <div className="field input-field">
                      <input
                        type="password"
                        className="form-control mb-4"
                        name="cpassword"
                        placeholder=" Confirm Password"
                        onChange={handleChange}
                        value={values.cpassword}
                      />
                    </div>
                    <div className="form-link  text-center">
                      <a href="#" className=" text-center ">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="field button-field">
                      <button
                        className="btn btn-primary w-100 mt-3 mb-4"
                        type="submit"
                      >SIGNUP
                        <a href="login"> </a>
                      </button>
                      <div className="text-center">
                        <p>or sign up with:</p>
                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-facebook-f" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-google" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                        >
                          <i className="fab fa-twitter" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary btn-floating mx-1"
                          href="login.js"
                        >
                          <i className="fab fa-github" />
                        </button>
                      </div>
                    </div>
                    <div className="form-link text-center pt-3 ">
                      <span>
                        Already have an account?<a href="login">Log In</a>{" "}
                      </span>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
