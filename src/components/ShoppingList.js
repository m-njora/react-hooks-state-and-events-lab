import React from "react";
import Item from "./Item";
import React,{useState} from "react";

function ShoppingList({ items }) {
  const [SelectedCategory,setSelectedCategory]=useState("All")
function HandleChange (e) {
  setSelectedCategory(e.target.value)
  const itemsToDisplay = items.filter((item) => {
    if (SelectedCategory === "All") return true;

    return item.category === SelectedCategory;
  });

}
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={HandleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
