import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Bills from "./components/Bills/Bills";
import Items from "./components/Items/Items";
import Customers from "./components/Customers/Customers";
import Logout from "./components/Logout";

import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <Sidebar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/items" element={<Items />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </Sidebar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
