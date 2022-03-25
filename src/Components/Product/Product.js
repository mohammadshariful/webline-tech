import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";
const Product = ({ product }) => {
  const { name, img, price } = product;
  console.log(product);
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className="card h-100 shadow ">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text fw-bold">price : ৳ {price}</p>
        </div>
        <div>
          <button className="d-flex align-items-center justify-content-center add-to-cart">
            <span className="me-2">Add To Cart</span>{" "}
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
