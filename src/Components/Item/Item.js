import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Item.css";
const Item = ({ items, deleteItem }) => {
  const { name, img, id = {} } = items;
  return (
    <li className="list-container">
      <img src={img} alt="" /> <span>{name}</span>
      <span>
        <FontAwesomeIcon
          icon={faTrash}
          className="deleteBtn"
          onClick={() => deleteItem(id)}
        />
      </span>
    </li>
  );
};

export default Item;
