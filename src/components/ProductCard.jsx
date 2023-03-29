import React from "react";
import "./ProductCard.css";

const ProductCard = ({ data }) => {
  return (
    <div className="productCard">
      <div className="mfg">
        <div className="container">
          <p>{data.itemDate}</p>
          <p>{data.itemMonth}</p>
          <h2>{data.itemyear}</h2>
        </div>
      </div>
      <h1>{data.itemName}</h1>
    </div>
  );
};

export default ProductCard;
