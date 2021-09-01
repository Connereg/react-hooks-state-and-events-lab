import React from "react";
import { useState } from "react/cjs/react.development";



function Item({ name, category }) {
  const [isAdded, setAddedToCart] = useState(false)
  function addToCartFunction(){
    setAddedToCart((isAdded) => !isAdded);
  }

  const addedItem = isAdded ? "in-cart" : ""
  const buttonColorChange = isAdded ? "remove" : "add"
  const buttonTextChange = isAdded ? "Added To Cart!" : "Add to Cart"

  return (
    <li className={addedItem}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCartFunction} className={buttonColorChange}>{buttonTextChange}</button>
    </li>
  );
}

export default Item;
