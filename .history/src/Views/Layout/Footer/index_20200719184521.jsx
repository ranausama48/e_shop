import React from "react";
import { Typography } from "../../../Components/Core";
import styled from "styled-components";
const Container = styled.div`
  background: #001529;
  height: 60px;
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <Typography as="p" noMargin color="white" align="center">
        © 2020 Eshop
      </Typography>
    </Container>
  );
};

export default Footer;
