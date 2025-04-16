import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
