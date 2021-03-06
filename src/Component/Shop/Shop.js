import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
      <div className="cart-container">
        <h4>Order Summery</h4>
        <h5>Item Order</h5>
      </div>
    </div>
  );
};

export default Shop;
