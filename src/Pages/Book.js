import React, { useState } from "react";
import "../Assets/Css/About.css";
import b1 from "../Assets/Image/b-1.png";
import b2 from "../Assets/Image/b-2.png";
import b3 from "../Assets/Image/b-3.png";
import book5 from "../Assets/Image/book-5.png";
import { useNavigate } from "react-router-dom";

function Book() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name.trim()) formErrors.name = "Name is required";
    if (!formData.guests || isNaN(formData.guests) || formData.guests < 1)
      formErrors.guests = "Valid number of guests is required";
    if (!formData.date) formErrors.date = "Date is required";
    if (!formData.time.trim()) formErrors.time = "Time is required";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("bookTableData", JSON.stringify(formData));
      alert("Table booked successfully!");
      setFormData({ name: "", guests: "", date: "", time: "" });
    }
  };
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
      <div className="container bg-black text-white py-5">
        <h1 className="Title display-3" style={{ color: "#F8D49E" }}>
        Booking
        </h1>
      </div>
      <div className="container bg-black text-white py-5">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Book a table</h1>
          <p className="fs-5 mb-5">
            Our dining atmosphere is casual and comfortable. To <br />
            reflect this environment, we maintain a formal dress.
          </p>

          <div className="form-group mb-5">
            <div className="mb-5">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control custom-placeholder"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "#F8D49E",
                  padding: "14px",
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="guests" className="form-label">
                Number of Guests
              </label>
              <input
                type="text"
                className="form-control custom-placeholder"
                name="guests"
                placeholder="0"
                value={formData.guests}
                onChange={handleChange}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  borderColor: "#F8D49E",
                  padding: "14px",
                }}
              />
              {errors.guests && (
                <small className="text-danger">{errors.guests}</small>
              )}
            </div>

            <div className="row">
              <div className="col">
                <label htmlFor="date" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "#F8D49E",
                    padding: "14px",
                  }}
                />
                {errors.date && (
                  <small className="text-danger">{errors.date}</small>
                )}
              </div>
              <div className="col">
                <label htmlFor="time" className="form-label">
                  Time
                </label>
                <input
                  type="text"
                  className="form-control custom-placeholder"
                  name="time"
                  placeholder="TIME"
                  value={formData.time}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "#F8D49E",
                    padding: "14px",
                  }}
                />
                {errors.time && (
                  <small className="text-danger">{errors.time}</small>
                )}
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary w-50 p-3" 
              type="submit"
              style={{
                backgroundColor: "#F8D49E",
                color: "black",
                outline: "none",
                border: "none",
                borderRadius: "50px",
              }}
            >
              BOOK A TABLE
            </button>
          </div>
        </form>
      </div>

      {/* container3 */}
      <div className="container-fluid bg-black text-white py-5">
        <div class="row">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card border-none bg-black text-white">
              <img
                src={b1}
                class="card-img-top img-fluid rounded-3"
                alt="img"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title my-5 text-center"> Vegetable Stew</h5>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn fw-semibold text-white bg-dark fs-6" 
                    onClick={() => navigate("/foodmenu")}
                    style={{
                      textShadow: "none",
                      borderRadius: "8px",
                      padding: "10px 70px",
                    }}
                  >
                    view food
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card border-none bg-black text-white">
              <img
                src={b2}
                class="card-img-top img-fluid rounded-3"
                alt="img"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title my-5 text-center">Morning Breakfast</h5>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn fw-semibold text-white bg-dark fs-6" 
                    onClick={() => navigate("/foodmenu")}
                    style={{
                      textShadow: "none",
                      borderRadius: "8px",
                      padding: "10px 70px",
                    }}
                  >
                    view food
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card border-none bg-black text-white">
              <img
                src={b3}
                class="card-img-top img-fluid rounded-3"
                alt="img"
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
              <div class="card-body">
                <h5 class="card-title my-5 text-center">Avacado semiya</h5>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn fw-semibold text-white bg-dark fs-6" 
                    onClick={() => navigate("/foodmenu")}
                    style={{
                      textShadow: "none",
                      borderRadius: "8px",
                      padding: "10px 70px",
                    }}
                  >
                    view food
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-black text-white py-5">
        <img src={book5} alt="IMG" className="img-fluid rounded-3"></img>
      </div>
    </>
  );
}

export default Book;
