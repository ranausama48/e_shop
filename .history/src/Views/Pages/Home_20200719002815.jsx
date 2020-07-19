import React from "react";
import { useSelector } from "react-router-dom";
import { Grid } from "../../Components/Core";

const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return <Grid>
    <Row>
      <Col md={8} sm={12} xs={24}
    </Row>
  </Grid>;
};

export default Home;
