import React from "react";
import { useSelector } from "react-router-dom";
import { Grid } from "../../Components/Core";

const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return <Grid></Grid>;
};

export default Home;
