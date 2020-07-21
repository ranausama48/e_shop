import React from "react";
import { Grid, Typography, Button } from "../../Components/Core";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Row, Col } from "antd";
import { addTocart } from "../../Redux/Action/shoping-cart";

const ProductInner = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.addProduct.products);
  console.log(state);
  const singleRecord = state.filter((items) => {
    return items.id === id;
  });

  const AddToCartHandler = () => {
    dispatch(addTocart({ id }));
  };

  const Container = styled.div`
    /* background: red; */
    margin: 50px 0px;
    .themed--color {
      color: #ed4c67;
    }
  `;
  console.log(singleRecord);
  return (
    <Grid>
      <Container>
        <Row type="flex" justify="space-around" align="middle">
          <Col md={8}>
            <img
              style={{ width: "100%", height: "auto" }}
              src={singleRecord[0].ImgUrls}
              alt=""
            />
          </Col>
          <Col md={15}>
            <Row type="flex" justify="space-between">
              <Typography as="h6" weight="bold">
                <span className="themed--color">Posted By: </span>
                {singleRecord[0].posted_by}
              </Typography>
              <Typography as="h6" weight="bold">
                <span className="themed--color">Posted Date: </span>
                {singleRecord[0].posting_date}
              </Typography>
            </Row>
            <div>
              <Typography as="h2" align="center" color="#343b5c" weight="bold">
                {singleRecord[0].product_name}
              </Typography>
              <Typography color="rgba(52, 59, 92, 0.7)" align="center" as="h5">
                {singleRecord[0].desc}
              </Typography>
              <Typography as="h5" align="center" weight="400"></Typography>
              <Typography as="h3" weight="500">
                <span className="themed--color">Product Price: </span>
                {singleRecord[0].product_price}
              </Typography>
              <Button onClick={AddToCartHandler}>Continue Shoping</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Grid>
  );
};

export default ProductInner;
