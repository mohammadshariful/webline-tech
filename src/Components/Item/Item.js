import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Item.css";
const Item = ({ cart, deleteItem }) => {
  const { singleName, img, id } = cart;
  return (
    <ul className="list-unstyled">
      <li className="list-container">
        <img src={img} alt="" /> <span>{singleName}</span>
        <span>
          <FontAwesomeIcon
            icon={faTrash}
            className="deleteBtn"
            onClick={() => deleteItem(id)}
          />
        </span>
      </li>
    </ul>
  );
};

export default Item;
