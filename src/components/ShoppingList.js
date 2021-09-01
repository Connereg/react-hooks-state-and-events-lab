import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCatagory, setSelectedCatagory] = useState("All");

  function handleCatagoryChange(event) {
    // event.target.value will be the value selected by the user
    setSelectedCatagory(event.target.value);
  }

  // we want to filter the items to only display the ones based on the selected category
  const itemsToDisplay = items.filter((item) => {
    if(selectedCatagory === "All") return true;

    return item.category === selectedCatagory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleCatagoryChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
