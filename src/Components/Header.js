import React from "react";
import "../Assets/Css/Header.css";
import Logoimage from "../Assets/Image/logo.png";
import { NavLink } from "react-router-dom";
import "../Assets/Css/Nav.css";
import { useBgImage } from "../Components/BgImageContext ";
import img2 from "../Assets/Image/img-2.png";
import img3 from "../Assets/Image/img-3.png";
import img4 from "../Assets/Image/img-4.png";
import img5 from "../Assets/Image/img-5.png";

function Header() {
  const { bgImage, setBgImage } = useBgImage();
  return (
    <>
      <div className="container-fluid  header">
        <div className="headersection text-white px-4">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 d-flex align-items-center">
              <h5 className="fw-bold mb-0 ms-2">Burger Queen Restaurant</h5>
            </div>

            <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
              <img
                src={Logoimage}
                alt="logo"
                className="img-fluid"
                style={{ maxHeight: "50px" }}
              />
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12 d-flex justify-content-center justify-content-md-end">
              <button
                className="btn btn-outline-light rounded-pill px-4 fs-6 mx-5 fs-3"
                style={{ marginTop: "5%" }}
              >
                <i className="bi bi-asterisk text-warning"></i> Since 1947
              </button>
            </div>
          </div>

          <h1 className="display-1 fw-light text-center text-md-start">
            Burger <span className="text-warning">Queen</span>
          </h1>

          <p className="lead text-warning text-center text-md-start mt-3 ms-3">
            EAT // RESTAURANT // TABLE RESERVATION // TAKE AWAY
          </p>
        </div>
      </div>
      {/* container1 */}
      <div className="container container1">
        <div
          className="text-white navheader"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="nav-container">
            <nav className="navbar navbar-expand-md">
              <button
                className="navbar-toggler bg-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNav"
              >
                <div className="navbar-nav bg-dark-blur rounded-pill px-4 py-2">
                  <NavLink
                    to="/home"
                    className="nav-link navlinks"
                    onClick={() => setBgImage(img2)}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/spotbooking"
                    className="nav-link navlinks"
                    onClick={() => setBgImage(img3)}
                  >
                    Spot Booking
                  </NavLink>
                  <NavLink
                    to="/foodmenu"
                    className="nav-link navlinks"
                    onClick={() => setBgImage(img4)}
                  >
                    Food Menu
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link navlinks"
                    onClick={() => setBgImage(img5)}
                  >
                    About
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "80%",
          height: "10px",
          backgroundColor: "white",
          margin: "20px auto 30px",
          borderRadius: "5px",
        }}
      ></div>
    </>
  );
}

export default Header;
