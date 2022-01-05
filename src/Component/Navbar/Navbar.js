import React from "react";
import "./Navbar.css";
import logo from "../../images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav">
      <img src={logo} alt="" />

      <nav>
        <a href="/shop">Shop</a>
        <a href="/order">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
        <div className="search-bar">
          <input type="Search" placeholder="type here to search" />
          <p>
            <FaShoppingCart />
            <sup>4</sup>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
