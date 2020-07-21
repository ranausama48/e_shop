import React from "react";
import { Grid } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import styled from "styled-components";
import { Row, Col } from "antd";
const Image = styled.img`
  width: 100%;
`;
const About = () => {
  return (
    <Grid>
      <Row type="flex" justify="center">
        <Col md={12}>
          <Typography as="h2" align="left" color="#343b5c" weight="bold">
            Contact Us
          </Typography>
          <Typography color="rgba(52, 59, 92, 0.7)" weight="500" as="h5">
            We're here to help and answer any question you might have. We look
            forward to hearing from you <span>😀</span>
          </Typography>
        </Col>
        <Col md={12}>
          <Image src={AboutUs} alt="kuh" />
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
