import React from "react";
import { NavLink } from "react-router-dom";
import Logoimage from "../Assets/Image/logo.png";

function Footer() {
  return (
    <footer className="bg-black text-white py-5">
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-auto">
            <img
              src={Logoimage}
              alt="logo"
              className="img-fluid mb-5"
              style={{ maxHeight: "50px" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-4 border-top position-relative"></div>
      <div className="container">
        <div className="row text-center text-md-start d-flex justify-content-center justify-content-md-start gap-5  gap-md-6">

          <div className="col-md-3 mb-4">
            <h5 className="text-white">
              <span className="text-warning">/</span>ABOUT US
            </h5>
            <p className="mt-3">
              The five-star Restaurant in a beautiful Chennai city with a modern
              restaurant, conference-hall.
            </p>
            <p style={{ color: "rgb(102, 95, 95)",fontSize:"13px"}}>
              ©2025 All rights reserved. Burger Queen
            </p>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="text-white">
              <span className="text-warning">/</span>NEWS
            </h5>
            <p className="mt-3">
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-white">
              <span className="text-warning">/</span>SOCIAL
            </h5>
            <div className="mt-3 d-flex justify-content-center justify-content-md-start gap-3">
              <NavLink to="#" className="text-white text-decoration-none">
                FACEBOOK
              </NavLink>
              <NavLink to="#" className="text-white text-decoration-none">
                INSTAGRAM
              </NavLink>
              <NavLink to="#" className="text-white text-decoration-none">
                TWITTER
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
