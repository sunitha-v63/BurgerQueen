import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import Main from "./Components/Main";
import About from "./Pages/About";
import FoodMenu from "./Pages/FoodMenu";
import SpotBooking from "./Pages/SpotBooking";
import Book from "./Pages/Book";
import Home from "./Pages/Home";
import { BgImageProvider } from "./Components/BgImageContext ";

function App() {
  return (
    <>
      <BrowserRouter>
      <Home/>
        <BgImageProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            {/*Header-Footer */}
            <Route element={<Main />}>
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/foodmenu" element={<FoodMenu />} />
              <Route path="/spotbooking" element={<SpotBooking />} />
              <Route path="/book" element={<Book />} />
            </Route>
          </Routes>
        </BgImageProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
