import React from "react";
import "../Assets/Css/About.css";
import menu1 from "../Assets/Image/menu-1.png";
import menu2 from "../Assets/Image/menu-2.png";
import menu3 from "../Assets/Image/menu-3.png";
import menu4 from "../Assets/Image/menu-4.png";
import food1 from "../Assets/Image/food-1.png";
import food2 from "../Assets/Image/food-2.png";
import food3 from "../Assets/Image/food-3.png";
import food4 from "../Assets/Image/food-4.png";
import food5 from "../Assets/Image/food-5.png";
import food6 from "../Assets/Image/food-6.png";
import food7 from "../Assets/Image/food-7.png";
import food8 from "../Assets/Image/food-8.png";
import food9 from "../Assets/Image/food-9.png";
import food10 from "../Assets/Image/food-10.png";

function FoodMenu() {
  const starters = [
    {
      name: "Tomato Toast",
      ingredients: "Tomato, bread, vegetables, sauce",
      price: 500,
      originalPrice: 1000,
      image: `${food1}`,
    },
    {
      name: "Noodle Soup",
      ingredients: "Noodles, spices, vegetables, chicken",
      price: 400,
      image: `${food2}`,
    },
    {
      name: "Pumpkin Soup",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 399,
      image: `${food3}`,
    },
  ];

  const Breakfast = [
    {
      name: "Delicious Pancakes",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 1000,
      originalPrice: 700,
      image: `${food4}`,
    },
    {
      name: "Sweet Heaven",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 400,
      image: `${food3}`,
    },
    {
      name: "Oatmeal Sprit",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 399,
      image: `${food5}`,
    },
    {
      name: "Avocado Smash",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 299,
      image: `${food1}`,
    },
  ];

  const Dinner = [
    {
      name: "Italian Pizza",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 1000,
      originalPrice: 700,
      image: `${food6}`,
    },
    {
      name: "Sea Curry",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 400,
      image: `${food4}`,
    },
    {
      name: "Vegan Burger",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 399,
      image: `${food7}`,
    },
    {
      name: "Noodle Bowl",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 299,
      image: `${food1}`,
    },
  ];

  const Drinks = [
    {
      name: "Panthouse Tonic",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 400,
      originalPrice: 1000,
      image: `${food8}`,
    },
    {
      name: "Apple Breeze",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 900,
      image: `${food9}`,
    },
    {
      name: "Frenchman Blizt",
      ingredients: "Pumpkin, spices, bread, vegetables",
      price: 599,
      image: `${food10}`,
    },
  ];

  return (
    <>
       
        <div className="container bg-black text-white py-5">
          <h1 className="Title display-3" style={{ color: "#F8D49E" }}>FOOD MENU & CATAGORIES</h1>
          </div>
      {/* container1 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={menu1}
              alt="Starter Dish"
              className="img-fluid rounded"
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
          </div>

          {/* Right*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2
              className="mb-4 display-3 Titlename"
              style={{ color: "#F8D49E" }}
            >
              Starters
            </h2>
            {starters.map((item, index) => (
              <div
                key={index}
                className="card mb-3 bg-black text-light"
                style={{ borderColor: "#F8D49E" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded me-3"
                      width="80"
                      height="80"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p
                        className=" mb-1"
                        style={{ fontSize: "16px", color: "rgb(102, 95, 95)" }}
                      >
                        {item.ingredients}
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    {item.originalPrice && (
                      <div>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                        >
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    )}
                    <h5 className="m-0">₹{item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* container2 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={menu2}
              alt="Starter Dish"
              className="img-fluid rounded"
              style={{ maxHeight: "700px", objectFit: "cover" }}
            />
          </div>

          {/* Right*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2
              className="mb-4 display-3 Titlename"
              style={{ color: "#F8D49E" }}
            >
              Breakfast
            </h2>
            {Breakfast.map((item, index) => (
              <div
                key={index}
                className="card mb-3 bg-black text-light"
                style={{ borderColor: "#F8D49E" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded me-3"
                      width="80"
                      height="80"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p
                        className=" mb-1"
                        style={{ fontSize: "16px", color: "rgb(102, 95, 95)" }}
                      >
                        {item.ingredients}
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    {item.originalPrice && (
                      <div>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                        >
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    )}
                    <h5 className="m-0">₹{item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* container3 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={menu3}
              alt="Starter Dish"
              className="img-fluid rounded"
              style={{ maxHeight: "700px", objectFit: "cover" }}
            />
          </div>

          {/* Right */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2
              className="mb-4 display-3 Titlename"
              style={{ color: "#F8D49E" }}
            >
              Dinner
            </h2>
            {Dinner.map((item, index) => (
              <div
                key={index}
                className="card mb-3 bg-black text-light"
                style={{ borderColor: "#F8D49E" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded me-3"
                      width="80"
                      height="80"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p
                        className=" mb-1"
                        style={{ fontSize: "16px", color: "rgb(102, 95, 95)" }}
                      >
                        {item.ingredients}
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    {item.originalPrice && (
                      <div>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                        >
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    )}
                    <h5 className="m-0">₹{item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* container4 */}
      <div className="container bg-black text-white py-5">
        <div className="row align-items-center">
          {/* Left*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src={menu4}
              alt="Starter Dish"
              className="img-fluid rounded"
              style={{ maxHeight: "600px", objectFit: "cover" }}
            />
          </div>

          {/* Right*/}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2
              className="mb-4 display-3 Titlename"
              style={{ color: "#F8D49E", fontStyle: "inital" }}
            >
              Drinks
            </h2>
            {Drinks.map((item, index) => (
              <div
                key={index}
                className="card mb-3 bg-black text-light"
                style={{ borderColor: "#F8D49E" }}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div className="d-flex">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded me-3"
                      width="80"
                      height="80"
                    />
                    <div>
                      <h5>{item.name}</h5>
                      <p
                        className=" mb-1"
                        style={{ fontSize: "16px", color: "rgb(102, 95, 95)" }}
                      >
                        {item.ingredients}
                      </p>
                    </div>
                  </div>
                  <div className="text-end">
                    {item.originalPrice && (
                      <div>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "red",
                          }}
                        >
                          ₹{item.originalPrice}
                        </span>
                      </div>
                    )}
                    <h5 className="m-0">₹{item.price}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodMenu;
