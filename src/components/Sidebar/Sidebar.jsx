import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { PiMoney } from "react-icons/pi";
import { LiaSitemapSolid } from "react-icons/lia";
import { LuUsers2 } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const location = useLocation();
  const currentPath = location.pathname;
  const getPageName = () => {
    const pathMapping = {
      "/": "Home",
      "/cart": "Cart",
      "/bills": "Bills",
      "/items": "Items",
      "/customers": "Customers",
      "/logout": "Logout",
    };
    return pathMapping[currentPath] || "Unknown";
  };

  const menuItem = [
    { path: "/", name: "Home", icon: <IoHome /> },
    { path: "/cart", name: "Cart", icon: <BsCart /> },
    { path: "/bills", name: "Bills", icon: <PiMoney /> },
    { path: "/items", name: "Items", icon: <LiaSitemapSolid /> },
    { path: "/customers", name: "Customers", icon: <LuUsers2 /> },
    { path: "/logout", name: "Logout", icon: <TbLogout2 /> },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "250px" : "70px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            POS
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            {!isOpen ? (
              <FaBars onClick={toggle} aria-label="Open sidebar menu" />
            ) : (
              <FaBarsStaggered
                onClick={toggle}
                aria-label="Close sidebar menu"
              />
            )}
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={{ padding: isOpen ? "10px 30px" : "10px 20px" }}
            className={({ isActive }) => (isActive ? "active link" : "link")}
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>
        <div className="header">
          <div>
            {" "}
            <TbLogout2 />
          </div>
          <div>
            <h2>{getPageName()}</h2>
          </div>
          <div>
            {" "}
            <BsCart />
          </div>
        </div>
        <div className="footer">{children}</div>
      </main>
    </div>
  );
};

export default Sidebar;
