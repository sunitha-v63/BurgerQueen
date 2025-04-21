import React, { useState } from "react";
import "../Assets/Css/Admin.css";
import { NavLink ,useNavigate } from "react-router-dom";

function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    setErrors("");
  };

  const validate = () => {
    let tempErrors = {};

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

    if (!validate()) return;

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUser &&
      formData.email === storedUser.email &&
      formData.password === storedUser.password
    ) {
      alert("Login successful!");
      navigate("/home");
    } else {
      setErrors({ login: "Invalid email or password" });
    }
    setFormData({ name: "", email: "", password: "" });
  };
  return (
    <>
      <div className="container-fluid admin">
        <div className="row login-page  d-flex">
          {/* Left */}
          <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center align-items-center text-white left-panel text-center p-5">
            <h2 className="text-black">Welcome to</h2>
            <h2 className="col-sm-12 responsive-heading">
              Burger Queen Restaurant
            </h2>
          </div>

          {/* Right */}
          <div className="col-lg-6 right-panel p-5">
            <h4>Hello !</h4>
            <h5 className="text-primary rpanel">Good Morning</h5>
            <div>
              <h6 className="text-center fs-5">
                <span className="text-primary">Log in</span> Your Account
              </h6>
            </div>
            <form onSubmit={handleSubmit} className="form">
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
                <NavLink to="/forgotpassword" className="text-danger me-2">
                  Forgot Password
                </NavLink>
                /
                <NavLink to="/register" className="text-black me-2">
                  Register
                </NavLink>
              </div>

              <button className="btn btn-primary w-100">Log in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Admin;
