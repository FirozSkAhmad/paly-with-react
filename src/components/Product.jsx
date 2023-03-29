import React from "react";
import ProductCard from "./ProductCard";
import "./Product.css";

const Product = ({data}) => {
  return (
    <div className="products">
      {data.map((desc, ind) => {
        return (
          <div key={ind}>
            <ProductCard data={desc} />
          </div>
        );
      })}
    </div>
  );
};

export default Product;
