import React from "react";
import "../Assets/Css/About.css";
import book1 from "../Assets/Image/book-1.png";
import book2 from "../Assets/Image/book-2.png";
import book3 from "../Assets/Image/book-3.png";
import book4 from "../Assets/Image/book-4.png";
import book5 from "../Assets/Image/book-5.png";
import { useNavigate } from "react-router-dom";
import { useBgImage } from "../Components/BgImageContext "; // correct path
import img6 from "../Assets/Image/img-6.png"; // your new background image

function SpotBooking() {
  const navigate = useNavigate();
  const { setBgImage } = useBgImage();
  return (
    <>
      <div className="container bg-black text-white py-5">
        <h1 className="Title display-3" style={{ color: "#F8D49E" }}>
          Restaurant Booking
        </h1>
      </div>
      {/* container1 */}
      <div
        className=" container bg-black text-center text-white py-5"
        style={{ backgroundColor: "#000" }}
      >
        <h2 className="mb-5" style={{ fontSize: "40px" }}>
          Opening Hours
        </h2>

        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="card border-none bg-black text-white">
              <div class="card-body">
                <h5
                  class="card-title py-4"
                  style={{ fontSize: "40px", fontWeight: "bold" }}
                >
                  <span style={{ color: "#F8D49E" }}>MON</span>DAY
                </h5>
                <p
                  class="card-text"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  <span style={{ color: "#F8D49E" }}>TUES</span>DAY-
                  <span style={{ color: "#F8D49E" }}>FRI</span>DAY
                </p>
                <p
                  class="card-text"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  <span style={{ color: "#F8D49E" }}>SATUR</span>DAY-{" "}
                  <span style={{ color: "#F8D49E" }}>SUN</span>DAY
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card border-none bg-black text-white">
              <div class="card-body">
                <h5
                  class="card-title py-4"
                  style={{
                    color: "#E01616",
                    fontSize: "40px",
                    fontWeight: "bold",
                  }}
                >
                  CLOSED
                </h5>
                <p
                  class="card-text"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  10 am -8 pm
                </p>
                <p
                  class="card-text"
                  style={{ fontSize: "30px", fontWeight: "bold" }}
                >
                  7 am -9 pm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* container2 */}
      <div className="container my-5">
        <div className="row align-items-center bg-black text-white p-4 rounded-4">
          {/* left */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={book1}
              alt="img"
              className="img-fluid rounded-3"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h1 className="display-3 booktitle">Gatsby Night</h1>
              <h4 className="text-light">₹500</h4>
            </div>

            <p className=" fs-5" style={{ color: "rgb(102, 95, 95)" }}>
              "Experience the ultimate dining satisfaction with our specially
              curated combos, designed to offer the perfect balance of flavors
              in one convenient meal. Each combo brings together a variety of
              dishes that complement each other, from savory appetizers to
              hearty main courses and delightful sides.Whether you're craving a
              classic comfort meal or something with an adventurous twist,
            </p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="fw-semibold fs-1" style={{ color: "#F8D49E" }}>
                For couples
              </p>
              <button
                className="btn px-4 fw-semibold text-black fs-4"
                style={{ backgroundColor: "#F8D49E" }}
                onClick={() => {
                  setBgImage(img6);
                  navigate("/book");
                }}
              >
                Book a spot
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* container3 */}
      <div className="container my-5">
        <div className="row align-items-center bg-black text-white p-4 rounded-4">
          {/* left */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={book2}
              alt="img"
              className="img-fluid rounded-3"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h1 className="display-3 booktitle">Brand New Kitchen</h1>
              <h4 className="text-light">₹500</h4>
            </div>

            <p className=" fs-5" style={{ color: "rgb(102, 95, 95)" }}>
              "Experience the ultimate dining satisfaction with our specially
              curated combos, designed to offer the perfect balance of flavors
              in one convenient meal. Each combo brings together a variety of
              dishes that complement each other, from savory appetizers to
              hearty main courses and delightful sides.Whether you're craving a
              classic comfort meal or something with an adventurous twist,
            </p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="fw-semibold fs-1" style={{ color: "#F8D49E" }}>
                For couples
              </p>
              <button
                className="btn px-4 fw-semibold text-black fs-4"
                style={{ backgroundColor: "#F8D49E" }}
                onClick={() => {
                  setBgImage(img6);
                  navigate("/book");
                }}
              >
                Book a spot
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* container4 */}
      <div className="container my-5">
        <div className="row align-items-center bg-black text-white p-4 rounded-4">
          {/* left */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={book3}
              alt="img"
              className="img-fluid rounded-3"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h1 className="display-3 booktitle">Romantic Dinner</h1>
              <h4 className="text-light">₹500</h4>
            </div>

            <p className=" fs-5" style={{ color: "rgb(102, 95, 95)" }}>
              "Experience the ultimate dining satisfaction with our specially
              curated combos, designed to offer the perfect balance of flavors
              in one convenient meal. Each combo brings together a variety of
              dishes that complement each other, from savory appetizers to
              hearty main courses and delightful sides.Whether you're craving a
              classic comfort meal or something with an adventurous twist,
            </p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="fw-semibold fs-1" style={{ color: "#F8D49E" }}>
                For couples
              </p>
              <button
                className="btn px-4 fw-semibold text-black fs-4"
                style={{ backgroundColor: "#F8D49E" }}
                onClick={() => {
                  setBgImage(img6);
                  navigate("/book");
                }}
              >
                Book a spot
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* container5 */}
      <div className="container my-5">
        <div className="row align-items-center bg-black text-white p-4 rounded-4">
          {/* left */}
          <div className="col-md-4 mb-3 mb-md-0">
            <img
              src={book4}
              alt="Kitchen"
              className="img-fluid rounded-3"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h1 className="display-3 booktitle">Brand New Kitchen</h1>
              <h4 className="text-light">₹500</h4>
            </div>

            <p className=" fs-5" style={{ color: "rgb(102, 95, 95)" }}>
              "Experience the ultimate dining satisfaction with our specially
              curated combos, designed to offer the perfect balance of flavors
              in one convenient meal. Each combo brings together a variety of
              dishes that complement each other, from savory appetizers to
              hearty main courses and delightful sides.Whether you're craving a
              classic comfort meal or something with an adventurous twist,
            </p>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <p className="fw-semibold fs-1" style={{ color: "#F8D49E" }}>
                For couples
              </p>
              <button
                className="btn px-4 fw-semibold text-black fs-4"
                style={{ backgroundColor: "#F8D49E" }}
                onClick={() => {
                  setBgImage(img6);
                  navigate("/book");
                }}
              >
                Book a spot
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-black text-white py-5">
        <img src={book5} alt="Kitchen" className="img-fluid rounded-3"></img>
      </div>
    </>
  );
}

export default SpotBooking;
