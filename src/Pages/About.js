import React from "react";
import "../Assets/Css/About.css";
import Logoimage from "../Assets/Image/logo.png";
import about1 from "../Assets/Image/about-1.png";
import about2 from "../Assets/Image/about-2.png";
import about3 from "../Assets/Image/about-3.png";
import about4 from "../Assets/Image/about-4.png";

function About() {
  return (
    <>
      {/* container1 */}
      <div className="bg-black text-white py-5">
        <div className="container text-center">
          <h1 className="topic">Our Story</h1>
          <p
            className="lead text-white text-start paragraph"
            style={{
              maxWidth: "950px",
              margin: "0 auto",
              fontSize: "16px",
              lineHeight: "1.7",
            }}
          >
            "Our journey began with a passion for creating unforgettable dining
            experiences. What started as a humble endeavor in a small corner of
            the city has now blossomed into one of the most celebrated
            restaurants in the area. Through dedication to quality, a focus on
            exceptional customer service, and a menu that blends innovative
            flavors with traditional favorites, we quickly earned the trust and
            love of our community. Our chefs, each with years of expertise, use
            only the freshest ingredients, ensuring every dish is crafted with
            care and creativity. Over the years, we've built lasting
            relationships with our customers, who return time and time again for
            the flavors they can't find anywhere else. Our success is not just
            in the accolades we've received but in the joy we bring to every
            guest who walks through our doors, making memories over great food."
          </p>
        </div>
      </div>
      {/* container2 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <p
              className="lead text-white paragraph"
              style={{ fontSize: "16px", lineHeight: "1.7" }}
            >
              "Our journey began with a passion for creating unforgettable
              dining experiences. What started as a humble endeavor in a small
              corner of the city has now blossomed into one of the most
              celebrated restaurants in the area. Through dedication to quality,
              a focus on exceptional customer service, and a menu that blends
              innovative flavors with traditional favorites, we quickly earned
              the trust and love of our community. Our chefs, each with years of
              expertise, use only the freshest ingredients, ensuring every dish
              is crafted with care and creativity. Over the years, we've built
              lasting relationships with our customers, who return time and time
              again for the flavors they can't find anywhere else. Our success
              is not just in the accolades we've received but in the joy we
              bring to every guest who walks through our doors, making memories
              over great food."
            </p>
          </div>

          {/* Right side */}
          <div className="col-md-6 text-center">
            <img
              src={about1}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* container3 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 text-center">
            <img
              src={about2}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
          {/* Right side*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <p
              className="lead text-white paragraph"
              style={{ fontSize: "16px", lineHeight: "1.7" }}
            >
              "Our journey began with a passion for creating unforgettable
              dining experiences. What started as a humble endeavor in a small
              corner of the city has now blossomed into one of the most
              celebrated restaurants in the area. Through dedication to quality,
              a focus on exceptional customer service, and a menu that blends
              innovative flavors with traditional favorites, we quickly earned
              the trust and love of our community. Our chefs, each with years of
              expertise, use only the freshest ingredients, ensuring every dish
              is crafted with care and creativity. Over the years, we've built
              lasting relationships with our customers, who return time and time
              again for the flavors they can't find anywhere else. Our success
              is not just in the accolades we've received but in the joy we
              bring to every guest who walks through our doors, making memories
              over great food."
            </p>
          </div>
        </div>
      </div>
      {/* container4 */}
      <div className="container bg-black text-white py-5">
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
      <div
        style={{
          width: "80%",
          height: "10px",
          backgroundColor: "white",
          margin: "20px auto 30px",
          borderRadius: "5px",
        }}
      ></div>
      {/* container5 */}
      <div className="container bg-black text-white py-2">
        <div className="row align-items-center justify-content-end">
          <div className="col-auto">
            <h1 className="topic1">Restaurant Manager</h1>
          </div>
        </div>
      </div>
      {/* container6 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 text-center">
            <img
              src={about3}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right side*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <p
              className="lead text-white paragraph"
              style={{ fontSize: "19px", lineHeight: "1.7" }}
            >
              <h3 className="fw-bold mb-3 text-center">MR. LEO DASS</h3>
              "Our restaurant manager is the backbone of our dining experience,
              ensuring smooth operations and exceptional service every day. With
              a strong leadership presence, they oversee the day-to-day
              activities of the restaurant, from managing staff to ensuring that
              every guest receives the highest level of care. They're skilled in
              problem-solving, customer relations, and maintaining a positive
              atmosphere."
            </p>
          </div>
        </div>
      </div>
      {/* container7 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <p
              className="lead text-white  paragraph"
              style={{ fontSize: "19px", lineHeight: "1.7" }}
            >
              <h3 className="fw-bold mb-3 text-center">MR. LEO DASS</h3>
              "Our restaurant manager is the backbone of our dining experience,
              ensuring smooth operations and exceptional service every day. With
              a strong leadership presence, they oversee the day-to-day
              activities of the restaurant, from managing staff to ensuring that
              every guest receives the highest level of care. They’re skilled in
              problem-solving, customer relations, and maintaining a positive
              atmosphere."
            </p>
          </div>

          {/* Right side */}
          <div className="col-md-6 text-center">
            <img
              src={about4}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* container8 */}
      <div className="container bg-black text-white py-2">
        <div className="row align-items-center justify-content-start">
          <div className="col-auto">
            <h1 className="topic1">Restaurant CHIEF CHEFF</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
