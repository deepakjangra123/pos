import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Bills from "./pages/Bills/Bills";
import Items from "./pages/Items/Items";
import Customers from "./pages/Customers/Customers";
import Logout from "./components/Logout";
import "./App.css";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/items" element={<Items />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
