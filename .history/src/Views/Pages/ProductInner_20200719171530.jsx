import React from "react";
import { Grid, Typography } from "../../Components/Core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Row, Col } from "antd";

const ProductInner = () => {
  const { id } = useParams();
  const state = useSelector((state) => state.addProduct.products);
  console.log(state);
  const singleRecord = state.filter((items) => {
    return items.id === id;
  });
  const Container = styled.div`
    background: red;
  `;
  console.log(singleRecord);
  return (
    <Grid>
      <Container>
        <Row>
          <Col md={8}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={singleRecord[0].ImgUrls}
              alt=""
            />
          </Col>
          <Col md={16}>
            <div>
              <Typography as="h3">{singleRecord[0].product_name}</Typography>
              <Typography as="h3">{singleRecord[0].posted_by}</Typography>

              <Typography as="h3">{singleRecord[0].posting_date}</Typography>
              <Typography as="h3">{singleRecord[0].desc}</Typography>
              <Typography as="h3">{singleRecord[0].product_price}</Typography>
            </div>
          </Col>
        </Row>
      </Container>
    </Grid>
  );
};

export default ProductInner;
