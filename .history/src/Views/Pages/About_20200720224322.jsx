import React from "react";
import { Grid } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import styled from "styled-components";
import {Row,Col}
const Image = styled.img`
  width: 100%;
`;
const About = () => {
  return (
    <Grid>
      <Row type="flex" justify="center">
        <Col md={18}>
          <Image src={AboutUs} alt="kuh" />
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
