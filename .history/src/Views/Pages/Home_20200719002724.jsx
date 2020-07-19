import React from "react";
import { Grid } from "../../Components/Core";

const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return <Grid></Grid>;
};

export default Home;
