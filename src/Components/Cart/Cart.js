import React from "react";
import Item from "../Item/Item";
import "./Cart.css";
const Cart = ({ carts, deleteItem }) => {
  const { name, img } = carts;

  return (
    <div className="mt-4">
      <h4 className="text-center">Order Summary</h4>
      <hr />
      <div>
        {carts.map((cart) => (
          <Item key={Math.random()} cart={cart} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
