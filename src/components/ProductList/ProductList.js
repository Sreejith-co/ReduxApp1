import React, { useEffect, useState } from "react";
import "./ProductList.css";
import products from "../api/products.json";
import { BeforeCart } from "./cartButtons/BeforeCart";
import { AfterCart } from "./cartButtons/AfterCart";
import { useSelector, useDispatch } from "react-redux";

export const ProductList = () => {
  const { cartCount } = useSelector((state) => state.cart);

  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>

          {cartCount > 0 ? <AfterCart /> : <BeforeCart />}
        </div>
      ))}
    </section>
  );
};
