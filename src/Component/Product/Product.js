import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  return (
    <>
      <div className="product">
        <div className="product-image">
          <img src={img} alt="" />
        </div>
        <div className="product-info">
          <p id="product-name">{name}</p>
          <div className="features-price">
            <div className="price">
              <p>by: {seller} </p>
              <p> $ {price} </p>
              <p id="quentity">Only 45 Product Left</p>
              <a href="#">Add to cart</a>
            </div>
            <div className="features">
              <i>****</i>
              <p>Features</p>
              <ul>
                <li>Shipped From US</li>
                <li>Orginal Product</li>
                <li>Good Quality Maintains</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
