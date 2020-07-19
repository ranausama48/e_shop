import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background: #001529;
  height: 60px;
  width: 100%;
`;
const Footer = () => {
  return (
    <Container>
      <Typography>© 2020 Eshop</Typography>
    </Container>
  );
};

export default Footer;
