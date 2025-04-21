import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Componentshead from "./Components/Componentshead";
import About from "./Pages/About";
import FoodMenu from "./Pages/FoodMenu";
import SpotBooking from "./Pages/SpotBooking";
import Book from "./Pages/Book";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      {/* <BrowserRouter>
      <Login/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/foodmenu" element={<FoodMenu />} />
          <Route path="/spotbooking" element={<SpotBooking />} />
          <Route path="/book" element={<Book />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          {/* Routes WITHOUT Header/Footer */}
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* Routes WITH Header/Footer */}
          <Route element={<Componentshead />}>
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/foodmenu" element={<FoodMenu />} />
            <Route path="/spotbooking" element={<SpotBooking />} />
            <Route path="/book" element={<Book />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
