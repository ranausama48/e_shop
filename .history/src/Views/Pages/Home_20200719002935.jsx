import React from "react";
import { useSelector } from "react-router-dom";
import { Row, Col } from "antd";
import { Grid } from "../../Components/Core";

const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return (
    <Grid>
      <Row>
        {state ? (
          state.map((data, index) => (
            <Col md={8} sm={12} xs={24} key={index}></Col>
          ))
        ) : (
          <div>Laoding....</div>
        )}
      </Row>
    </Grid>
  );
};

export default Home;
