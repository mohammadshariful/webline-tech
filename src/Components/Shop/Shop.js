import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop-container">
      <div className="container py-5">
        <h1 className="text-center">Get Choose products</h1>
        <h3 className="text-center">Selected four Product</h3>
        <div className="row">
          <div className="col-lg-10">
            <div className="row mx-auto">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          </div>
          <div className="col-lg-2">
            <h1>cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
