import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { Grid } from "../../Components/Core";

const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return (
    <Grid>
      <Row>
        {state ? (
          state.map((data, index) => (
            <Col md={8} sm={12} xs={24} key={index}>
              {console.log(state)}
              <h2>state</h2>
            </Col>
          ))
        ) : (
          <div>Laoding....</div>
        )}
      </Row>
    </Grid>
  );
};

export default Home;
