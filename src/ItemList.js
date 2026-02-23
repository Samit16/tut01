import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import LineItem from "./LineItem";

const ItemList = ({ items, handleCheck, handleDelete }) => {
    return (
    <ul>
    {items.map((item) => (
        <li className="item" key={item.id}>
        <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheck(item.id)}
        />
        <label>{item.item}</label>
        <button onClick={() => handleDelete(item.id)}>Delete</button>
        </li>
    ))}
    </ul>
);
};

export default ItemList;