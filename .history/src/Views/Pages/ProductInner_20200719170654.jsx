import React from "react";
import { Grid } from "../../Components/Core";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

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
      <Container>Usama</Container>
    </Grid>
  );
};

export default ProductInner;
