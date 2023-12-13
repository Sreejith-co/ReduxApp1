import React, { useEffect, useState } from "react";
import "./ProductList.css";
import products from "../api/products.json";
import { BeforeCart } from "./cartButtons/BeforeCart";
import { AfterCart } from "./cartButtons/AfterCart";

export const ProductList = () => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(1);
  };

  console.log(count);

  return (
    <section className="container">
      {products.map((product, key) => (
        <div className="product-container" key={key}>
          <img src={product?.image} alt="" />
          <h3>{product?.title}</h3>

          {count > 0 ? <AfterCart /> : <BeforeCart addToCart={addToCart} />}
        </div>
      ))}
    </section>
  );
};
