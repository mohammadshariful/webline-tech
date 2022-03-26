import React from "react";
import Item from "../Item/Item";
import "./Cart.css";
const Cart = ({ carts, deleteItem, selectedHandler, resetBtn }) => {
  return (
    <div className="mt-4">
      <h4 className="text-center">Order Summary</h4>
      <hr />
      <ul>
        {carts.map((cart) => (
          <Item key={Math.random()} items={cart} deleteItem={deleteItem} />
        ))}
      </ul>
      <div className="btn-container mb-4">
        <button className="bg-primary" onClick={() => selectedHandler(carts)}>
          Select One
        </button>
        <button className="bg-warning" onClick={() => resetBtn(carts)}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Cart;
