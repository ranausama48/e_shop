import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { Grid } from "../../Components/Core";
import styled from "styled-components";
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return (
    <Grid>
      <Row>
        {state ? (
          state.map((data, index) => (
            <Col md={8} sm={12} xs={24} key={index}>
              {console.log(state)}
              <Image src={data.ImgUrls} alt="" />
              <Row type="flex" justify={"space-between"}>
                <p>{data.posting_date}</p>
                <p>{data.posted_by}</p>
              </Row>
              <h2>{data.product_price}</h2>
              <p>{data.desc}</p>
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
