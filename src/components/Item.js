import React from "react";
import React,{useState} from "react";

function Item({ name, category }) {
  const [isCart, setCart] = useState(false)
  function HandleCart(){
    setCart(!isCart)
    
  }
  return (
    <li className={isCart? "in-cart":""}>
     <span>{name}</span>
     <span className="category">{category}</span>
      <button className={isCart? "remove ": "add"}  onClick={HandleCart}>{isCart ?"Remove from" : "Add to" }Cart</button>
    </li>

      );
}

export default Item;
