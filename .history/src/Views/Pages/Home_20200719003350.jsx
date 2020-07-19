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
              <img src={state.ImgUrls} alt="" />
              <p>{state.posting_date}</p>
              <p>{state.posted_by}</p>
              <h2>{state.roduct_price}</h2>

              <p>{state.desc}</p>
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
