import React from "react";
import Logoimage from "../Assets/Image/logo.png";
import bgimg from "../Assets/Image/bg.png";
import '../Assets/Css/Header.css'
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  return (
<>
  <div className="container-fluid bg-black px-0">
    <div
      className="burgerqueen-container text-white"
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Top */}
      <div className="container py-3">
        <div className="row align-items-center my-4">
          <div className="col-12 col-sm-4 text-center text-sm-start small">
            www.Burgerqueen.com
          </div>

          <div className="col-12 col-sm-4 text-center my-2 my-sm-0">
            <img
              src={Logoimage}
              alt="logo"
              className="img-fluid"
              style={{ maxHeight: "50px" }}
            />
          </div>

          <div className="col-12 col-sm-4 text-center text-sm-end">
            <button
              className="btn btn-dark px-4 py-2 fs-5 mt-2 mt-sm-0"
              style={{ textShadow: "none" }} onClick={() => navigate("/spotbooking")}
            >
              Reservation
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-10 col-md-8 col-lg-6 text-center px-3 py-4">
            <h2
              className="display-3"
              style={{
                whiteSpace: "nowrap",
                fontWeight: 400,
                textShadow: "none",
                color: "#E01616",
              }}
            >
              The pure taste of
            </h2>
            <h1
              className="text-dark display-1"
              style={{ fontWeight: 400 }}
            >
              INDIAN
            </h1>
            <p
              className="text-dark my-4 fs-5 mx-auto"
              style={{ maxWidth: "500px" }}
            >
              Step into a world of rich aromas and vibrant flavors at our
              Indian restaurant, where tradition meets taste. Our menu celebrates
              the diverse culinary heritage of India.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-dark px-5 py-2 fs-5"
                style={{ textShadow: "none", borderRadius: "15px" }} onClick={() => navigate("/admin")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div
        style={{
          width: "80%",
          height: "10px",
          backgroundColor: "black",
          margin: "20px auto 30px",
          borderRadius: "5px",
        }}
      ></div>

      {/* Footer */}
      <div className="container-fluid bg-black text-white py-4">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-6 text-center text-md-start fs-4 mb-2 mb-md-0" style={{ paddingLeft: "30px" }}>
            +91 987654321
          </div>
          <div className="col-12 col-md-6 text-center text-md-end" style={{ paddingRight: "20px" }}>
            <img
              src={Logoimage}
              alt="logo"
              className="img-fluid"
              style={{ maxHeight: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    );
}

export default Login;
