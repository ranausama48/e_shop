import React from "react";
import { Grid, Typography } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import styled from "styled-components";
import { Row, Col } from "antd";
const Image = styled.img`
  width: 100%;
`;
const About = () => {
  return (
    <Grid>
      <Row
        type="flex"
        justify="space-between"
        align="middle"
        style={{ margin: "50px 0px" }}
      >
        <Col md={12}>
          <Typography as="h2" align="left" color="#343b5c" weight="bold">
            About Eshop
          </Typography>
          <Typography color="rgba(52, 59, 92, 0.7)" weight="500" as="h5">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </Typography>
        </Col>
        <Col md={12}>
          <Image src={AboutUs} alt="kuh" />
        </Col>
      </Row>
      <Row type="flex" justify="space-between">
        <Col md={12}>
          <Image src={AboutUs} alt="kuh" />
        </Col>
        <Col md={12}>
          <Typography as="h2" align="left" color="#343b5c" weight="bold">
            Why Eshop
          </Typography>
          <Typography color="rgba(52, 59, 92, 0.7)" weight="500" as="h5">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </Typography>
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
