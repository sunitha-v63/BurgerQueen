import "../Assets/Css/Admin.css";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      const existingUser = JSON.parse(localStorage.getItem("userData"));

      if (existingUser && existingUser.email === formData.email) {
        setErrors({ email: "User with this email already exists" });
        return;
      }

      console.log("Form submitted:", formData);

   
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Registration successful!");

      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <>
      <div className="container-fluid admin">
        <div className="row login-page  d-flex">
          {/* Left */}
          <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-white left-panel text-center p-5">
            <h2 className="text-black">Register</h2>
            <h2 className="col-sm-12 responsive-heading">
              Burger Queen Restaurant
            </h2>
          </div>

          {/* Right */}
          <div className="col-lg-6 right-panel p-5">
            <div>
              <h6 className="text-center fs-5">
                <span className="text-primary">Register</span> Your Account
              </h6>
            </div>

            <form onSubmit={handleSubmit} className="form">
              <div className="form-group mb-5">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span style={{ color: "red" }}>{errors.name}</span>
                )}
              </div>
              <div className="form-group mb-5">
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email}</span>
                )}
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <span style={{ color: "red" }}>{errors.password}</span>
                )}
              </div>
              <div className="d-flex justify-content-end mb-3">
                <NavLink to="/admin" className="text-black me-2">
                  Login
                </NavLink>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-3 fs-5">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
