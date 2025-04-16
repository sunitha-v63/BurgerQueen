import React, { useState } from "react";
import "../Assets/Css/Admin.css";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (!storedUser || storedUser.email !== email) {
      setMessage("No account found with this email.");
      return;
    }

    storedUser.password = newPassword;
    localStorage.setItem("userData", JSON.stringify(storedUser));
    setMessage("Password has been reset successfully!");
  };

  return (
    <>
      <div className="container-fluid">
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
            <div>
              <h6 className="text-center fs-5">
                <span className="text-primary">Reset</span>Password
              </h6>
            </div>
            <form className="form" onSubmit={handleReset}>
              <div className="form-group mb-5">
                <input
                  type="email"
                  placeholder="Enter your registered email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control mb-3"
                  required
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="form-control mb-3"
                  required
                />
              </div>

              <div className="d-flex justify-content-end mb-3">
                <NavLink to="/admin" className="text-black me-2 fs-4">
                  Login
                </NavLink>
              </div>

              <button className="btn btn-primary">Reset Password</button>
              {message && <p className="mt-3 text-black">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
