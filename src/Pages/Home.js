import React from "react";
import "../Assets/Css/About.css";
import home1 from "../Assets/Image/home-1.png";
import home2 from "../Assets/Image/home-2.png";
import home3 from "../Assets/Image/home-3.png";
import home4 from "../Assets/Image/home-4.png";
import home5 from "../Assets/Image/home-5.png";
import food1 from "../Assets/Image/food-1.png";
import home7 from "../Assets/Image/home-7.png";
import home8 from "../Assets/Image/home-8.png";
import card1 from "../Assets/Image/card-1.png";
import card2 from "../Assets/Image/card-2.png";
import card3 from "../Assets/Image/card-3.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
     <div className="container bg-black py-5">
        <div className="row g-0 min-vh-100 align-items-center py-2">
          {/* Left */}
          <div className="col-sm-6 col-md-6 p-0 textimage">
            <img src={home1} alt="img" className="img-fluid" />
          </div>

          {/* Right */}
          <div className="col-sm-6 col-md-6 bg-light p-5 textcontiner">
            <h1 className="display-5 fw-bold">Excellent cook</h1>
            <h4 className="mb-4">We got all country chefs</h4>
            <p className="fs-5 mb-1" style={{ color: "rgb(102, 95, 95)" }}>
              "Restaurant chefs are culinary artists who bring passion and
              creativity to the kitchen. They meticulously prepare, cook, and
              present a wide range of dishes, ensuring that every meal is
              crafted to perfection. With an expert understanding of flavors,
              techniques, and ingredients, chefs elevate the dining experience
              for guests."
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-dark px-4 py-2 mt-3 fs-4"
                type="button"
                onClick={() => navigate("/foodmenu")}
              >
                Explore food
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* container2 */}
      <div className="container bg-black text-white py-5">
        <h1 className="Title display-2">Our Restaurant's Special</h1>

        <div className="row d-flex justify-content-between align-items-center mb-1">
          <div className="col-12 col-sm-4 text-center text-sm-start small">
            <h1 className=" display-2">receips</h1>
          </div>

          <div className="col-12 col-sm-4 text-center my-sm-0">
            <p className="fs-3">Don't Worry about TASTE!!</p>
          </div>
        </div>
        <div className="row align-items-center justify-content-end text-white ">
          <div className="col-auto">
            <h3>WE GOT YOU.</h3>
          </div>
        </div>
      </div>

      <div className="container bg-black text-white py-5">
        <div class="row">
          <div class="col-sm-4 mb-3 mb-sm-0">
            <div class="card border-none bg-black text-white">
              <div className="d-flex align-items-center justify-content-center">
                <img
                  src={card1}
                  className="card-img-top img-fluid"
                  alt="img"
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    width: "5px",
                    height: "300px",
                    backgroundColor: "rgb(109, 104, 104)",
                    marginLeft: "10%",
                    borderRadius: "5px",
                  }}
                ></div>
              </div>

              <div class="card-body">
                <h5 class="card-title my-5 text-center fs-4">Cooked Meats</h5>
                <div className="d-flex justify-content-center">
                  <p
                    style={{
                      fontSize: "19px",
                      color: "rgb(141, 137, 137)",
                      fontWeight: "600",
                    }}
                  >
                    "Our non-vegetarian offering bring bold flavour and rich
                    texture to each plates.From tender cuts of meat to succulent
                    seafood,each dish is carefull prepared with the finest
                    ingredients and expert technique.Whether it's show-cooked
                    stews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card border-none bg-black text-white">
              <img
                src={card2}
                className="card-img-top img-fluid"
                alt="img"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
              <div class="card-body">
                <h5 class="card-title my-5 text-center fs-4">
                  Seasonal Breakfast
                </h5>
                <div className="d-flex justify-content-center">
                  <p
                    style={{
                      fontSize: "19px",
                      color: "rgb(141, 137, 137)",
                      fontWeight: "600",
                    }}
                  >
                    "Our Seasonal Vegetables offering bring bold flavour and
                    rich texture to each plates.From tender cuts of meat to
                    succulent seafood,each dish is carefull prepared with the
                    finest ingredients and expert technique.Whether it's
                    show-cooked stews
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <div class="card border-none bg-black text-white">
              <div className="d-flex align-items-center justify-content-center">
                <div
                  style={{
                    width: "5px",
                    height: "300px",
                    backgroundColor: "rgb(109, 104, 104)",
                    marginRight: "10%",
                    borderRadius: "5px",
                  }}
                ></div>
                <img
                  src={card3}
                  className="card-img-top img-fluid"
                  alt="img"
                  style={{
                    width: "250px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div class="card-body">
                <h5 class="card-title my-5 text-center fs-4">Fresh Fruits</h5>
                <div className="d-flex justify-content-center">
                  <p
                    style={{
                      fontSize: "19px",
                      color: "rgb(141, 137, 137)",
                      fontWeight: "600",
                    }}
                  >
                    "Our Fresh fruit offering bring bold flavour and rich
                    texture to each plates.From tender cuts of meat to succulent
                    seafood,each dish is carefull prepared with the finest
                    ingredients and expert technique.Whether it's show-cooked
                    stews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* container3 */}
      <div className=" container bg-black py-4">
        <div className="d-flex align-items-center justify-content-center text-white">
          <div
            className="flex-grow-1 mx-2"
            style={{
              height: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></div>
          <h2 className="mx-3 fw-light display-3">Locations</h2>
          <div
            className="flex-grow-1 mx-2"
            style={{
              height: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>

      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 text-center">
            <img
              src={home2}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right side*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="display-4 mb-3 text-center">Chennai</h3>
            <p
              className="lead text-white paragraph"
              style={{ lineHeight: "34px", fontSize: "12px" }}
            >
              "Location in the heart of Chennai, our company prides itself on
              blending innovation and tradition. Situated in this vibrant and
              culturally rich city, we are inspired by the dynamic energy of
              Chennai's thriving business landscape and its diverse culinary
              hertiage. With access to the finest local ingredients and a deep
              connection to the city's food culture,we offer a unique experience
              that reflects the spirit of Chennai.Our dedication to quality,
              service, and creativity drives everything we do,ensuring that
              every customer enjoys and exceptional experience."
            </p>
          </div>
        </div>
      </div>
      {/* container4 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="display-4 mb-3 text-center">Kanyakumari</h3>
            <p
              className="lead text-white paragraph"
              style={{ lineHeight: "34px", fontSize: "12px" }}
            >
              "Location in the heart of Kanyakumari, our company prides itself
              on blending innovation and tradition. Situated in this vibrant and
              culturally rich city, we are inspired by the dynamic energy of
              Chennai's thriving business landscape and its diverse culinary
              hertiage. With access to the finest local ingredients and a deep
              connection to the city's food culture,we offer a unique experience
              that reflects the spirit of Chennai.Our dedication to quality,
              service, and creativity drives everything we do,ensuring that
              every customer enjoys and exceptional experience."
            </p>
          </div>

          {/* Right side*/}
          <div className="col-md-6 text-center">
            <img
              src={home3}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* container5 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 text-center">
            <img
              src={home4}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>

          {/* Right side*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="display-4 mb-3 text-center">Maduri</h3>
            <p
              className="lead text-white paragraph"
              style={{ lineHeight: "34px", fontSize: "12px" }}
            >
              "Location in the heart of Maduri, our company prides itself on
              blending innovation and tradition. Situated in this vibrant and
              culturally rich city, we are inspired by the dynamic energy of
              Chennai's thriving business landscape and its diverse culinary
              hertiage. With access to the finest local ingredients and a deep
              connection to the city's food culture,we offer a unique experience
              that reflects the spirit of Chennai.Our dedication to quality,
              service, and creativity drives everything we do,ensuring that
              every customer enjoys and exceptional experience."
            </p>
          </div>
        </div>
      </div>
      {/* container6 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left side */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h3 className="display-4 mb-3 text-center">Coimbatore</h3>
            <p
              className="lead text-white paragraph"
              style={{ lineHeight: "34px", fontSize: "12px" }}
            >
              "Location in the heart of Coimbatore, our company prides itself on
              blending innovation and tradition. Situated in this vibrant and
              culturally rich city, we are inspired by the dynamic energy of
              Chennai's thriving business landscape and its diverse culinary
              hertiage. With access to the finest local ingredients and a deep
              connection to the city's food culture,we offer a unique experience
              that reflects the spirit of Chennai.Our dedication to quality,
              service, and creativity drives everything we do,ensuring that
              every customer enjoys and exceptional experience."
            </p>
          </div>

          {/* Right side*/}
          <div className="col-md-6 text-center">
            <img
              src={home5}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* container7 */}
      <div className=" container-fluid bg-black py-4">
        <div className="d-flex align-items-center justify-content-center text-white">
          <div
            className="flex-grow-1 mx-2"
            style={{
              height: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></div>
          <h2 className="mx-3 fw-light display-3">Today Offers</h2>
          <div
            className="flex-grow-1 mx-2"
            style={{
              height: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          ></div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end text-white ">
          <div className="col-auto">
            <h1>
              50<span style={{ color: "#E01616" }}>%</span>OFF
            </h1>
          </div>
        </div>
      </div>

      {/* container8 */}

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <img
              src={food1}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-6 mb-4 text-md-start text-center">
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p
                className="text-white"
                style={{ fontSize: "17px", marginRight: "10px" }}
              >
                Delicious pancakes
                <span style={{ color: "green", marginLeft: "8px" }}>
                  <i className="bi bi-circle-fill"></i>
                </span>
              </p>
              <p className="text-white">
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                    marginRight: "10px",
                  }}
                >
                  ₹1000
                </span>
                ₹500
              </p>
            </div>
            <p
              className="text-white text-start mt-4"
              style={{ fontSize: "12px" }}
            >
              Indulge in our fluffy, golden pancakes that are the perfect
              balance of light and satisfying. Each stack is made with a
              delicate batter, cooked to perfection, and served warm. Whether
              topped with fresh berries, rich syrup, whipped cream, or a dusting
              of powdered sugar, our pancakes offer a delightful combination of
              sweetness and softness. Ideal for breakfast, brunch, or a sweet
              treat any time of the day—they're a comforting classic that never
              goes out of style.
            </p>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <button
              className="btn fw-semibold text-white fs-6"
              onClick={() => navigate("/foodmenu")}
              style={{
                backgroundColor: "#33FF00",
                textShadow: "none",
                borderRadius: "8px",
                padding: "10px 70px",
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* container9 */}
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <img
              src={home7}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-6 mb-4 text-md-start text-center">
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p
                className="text-white"
                style={{ fontSize: "17px", marginRight: "10px" }}
              >
                Sweet Heaven
                <span style={{ color: "green", marginLeft: "8px" }}>
                  <i className="bi bi-circle-fill"></i>
                </span>
              </p>
              <p className="text-white">
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                    marginRight: "10px",
                  }}
                >
                  ₹1000
                </span>
                ₹500
              </p>
            </div>
            <p
              className="text-white text-start mt-4"
              style={{ fontSize: "12px" }}
            >
              Indulge in our fluffy, golden pancakes that are the perfect
              balance of light and satisfying. Each stack is made with a
              delicate batter, cooked to perfection, and served warm. Whether
              topped with fresh berries, rich syrup, whipped cream, or a dusting
              of powdered sugar, our pancakes offer a delightful combination of
              sweetness and softness. Ideal for breakfast, brunch, or a sweet
              treat any time of the day—they're a comforting classic that never
              goes out of style.
            </p>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <button
              className="btn fw-semibold text-white fs-6"
              onClick={() => navigate("/foodmenu")}
              style={{
                backgroundColor: "#33FF00",
                textShadow: "none",
                borderRadius: "8px",
                padding: "10px 70px",
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>

      {/* container10 */}

      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-12 col-md-3 mb-4">
            <img
              src={home8}
              alt="img"
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-md-6 mb-4 text-md-start text-center">
            <div className="d-flex justify-content-between align-items-center mt-4">
              <p
                className="text-white"
                style={{ fontSize: "17px", marginRight: "10px" }}
              >
                Oatmeal spirit
                <span style={{ color: "green", marginLeft: "8px" }}>
                  <i className="bi bi-circle-fill"></i>
                </span>
              </p>
              <p className="text-white">
                <span
                  style={{
                    textDecoration: "line-through",
                    color: "red",
                    marginRight: "10px",
                  }}
                >
                  ₹1000
                </span>
                ₹500
              </p>
            </div>
            <p
              className="text-white text-start mt-4"
              style={{ fontSize: "12px" }}
            >
              Indulge in our fluffy, golden pancakes that are the perfect
              balance of light and satisfying. Each stack is made with a
              delicate batter, cooked to perfection, and served warm. Whether
              topped with fresh berries, rich syrup, whipped cream, or a dusting
              of powdered sugar, our pancakes offer a delightful combination of
              sweetness and softness. Ideal for breakfast, brunch, or a sweet
              treat any time of the day—they're a comforting classic that never
              goes out of style.
            </p>
          </div>
          <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
            <button
              className="btn fw-semibold text-white fs-6"
              onClick={() => navigate("/foodmenu")}
              style={{
                backgroundColor: "#33FF00",
                textShadow: "none",
                borderRadius: "8px",
                padding: "10px 70px",
              }}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
