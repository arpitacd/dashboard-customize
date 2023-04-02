import React from "react";
import { Link , NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* Container wrapper */}
          <div className="container">
            {/* Navbar brand */}
            <a className="navbar-brand me-2" href="https://mdbgo.com/">
              <img
                src="https://www.shutterstock.com/image-vector/funny-red-pen-cartoon-writing-260nw-87285619.jpg"
                height={50}
                alt="Contrive"
                loading="lazy"
                style={{ marginTop: "-1px" }}
              />
              <a className="fw-bold fs-3" style={{fontFamily:'Roboto', color:'black'}} height={25}>Contrive</a>
            </a>
            {/* Toggle button */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarButtonsExample"
              aria-controls="navbarButtonsExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>
            {/* Collapsible wrapper */}
            <div className="collapse navbar-collapse" id="navbarButtonsExample">
              {/* Left links */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              {/* Left links */}
              <div className="d-flex align-items-center">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item " style={{ fontFamily: "Lato" }}>
                 
                    
                 <Link
                   className="nav-link me-4  text-black"
                   style={{ fontFamily: "Inter" }}
                   to="/home"
                 >
                   Home
                 </Link>
               </li>
                  <li className="nav-item " style={{ fontFamily: "Lato" }}>
                 
                    
                    <Link
                      className="nav-link me-4  text-black"
                      style={{ fontFamily: "Inter" }}
                      to="/customize"
                    >
                      Customizer
                    </Link>
                  </li>
                
                  <li>

<NavLink className="btn btn-dark btn-rounded px-3 me-4 text-white"  style={{ fontFamily: 'Lato' }} to="/login">
  Login
</NavLink>
</li>
<li>

<NavLink className="btn btn-dark btn-rounded px-3 me-4 text-white"  style={{ fontFamily: 'Lato' }} to="/signup">
  Sign Up
</NavLink>
</li>
                </ul>
              </div>
            </div>
            {/* Collapsible wrapper */}
          </div>
          {/* Container wrapper */}
        </nav>
        {/* Navbar */}
      </>
    </div>
  );
};

export default Navbar;
