import React from "react";
import { Grid } from "../../Components/Core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductInner = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.addProduct.products);
  console.log(state);
  const singleRecord = state.filter((items) => {
    return items.id === id;
  });
  console.log(singleRecord);
  return <Grid></Grid>;
};

export default ProductInner;
