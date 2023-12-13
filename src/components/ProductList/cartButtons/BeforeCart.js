import React from "react";
import "./CartButtons.css";
import { addToCart } from "../../../redux/cart";
import { useDispatch } from "react-redux";

export const BeforeCart = () => {
  const dispatch = useDispatch();

  return (
    <div className="before-cart">
      <button className="add-cart-button" onClick={() => dispatch(addToCart())}>
        Add to cart
      </button>
    </div>
  );
};
