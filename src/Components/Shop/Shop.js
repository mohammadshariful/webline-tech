import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const newProduct = [...carts, product];
    setCarts(newProduct);
  };

  const deleteItem = (id) => {
    const rest = carts.filter((item) => item.id !== id);
    setCarts(rest);
  };

  return (
    <div className="shop-container">
      <div className="py-5">
        <h1 className="text-center">Get Choose products</h1>
        <h3 className="text-center">Selected four Product</h3>
        <div className="row">
          <div className="col-lg-9">
            <div className="row mx-auto">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-3 cart-container shadow">
            <Cart carts={carts} deleteItem={deleteItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
