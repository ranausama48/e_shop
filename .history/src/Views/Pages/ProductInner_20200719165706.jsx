import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductInner = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.addProduct.products);
  console.log(state);
  const singleRecord = state.filter((items) => {
    console.log("usama", items);
  });
  return <div>ProductInner</div>;
};

export default ProductInner;
