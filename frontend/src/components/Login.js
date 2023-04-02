import React from 'react'
import { Formik } from "formik";
import Swal from 'sweetalert2';
const Login =  ()=>{

  

  return (
    <div className="vh-100" style={{ backgroundColor: "#4070f4" }}>
        <div className="col-md-3 mx-auto pt-5" style={{ border: "5px" }}>
          <div className="card">
            <div
              className="card-body"
              style={{ background: "#fff", fontFamily: "sans-serif" }}
            >
              <Formik initialValues={{ username: "", email: "", password: "",}}>
                {({ values, handleChange, handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-center"  >Log In</h3>
                    <hr />

                    <div className="field input-field">
                      <input
                        className="form-control mb-4" name="username" placeholder="User Name " onChange={handleChange} value={values.name} />
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
                     
                    <div className="form-link  text-center">
                      <a href="#" className="forgot-pass text-center text-underline-hover ">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="field button-field">
                      <button
                        className="btn btn-primary w-100 mt-4 mb-4"
                        type="submit"><a href='customizer'></a>
                        Login</button>
                    </div>
                    <div className="text-center  ">
                      <span>Don't have an account?<a href="signup" className=" text-underline-hover">Sign Up
                      </a> </span>
                    </div>
                    
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Login