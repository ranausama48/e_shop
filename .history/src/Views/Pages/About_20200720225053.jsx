import React from "react";
import { Grid, Typography } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import About2 from "../../assets/illustration1.jpg";
import About3 from "../../assets/illustration2.jpg";

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
        gutter={[16, 16]}
        style={{ margin: "50px 0px" }}
      >
        <Col md={12}>
          <Typography as="h2" align="left" color="#343b5c" weight="bold">
            About Eshop
          </Typography>
          <Typography
            color="rgba(52, 59, 92, 0.7)"
            align="justify"
            weight="500"
            as="h5"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Col>
        <Col md={12}>
          <Image src={About3} alt="kuh" />
        </Col>
      </Row>
      <Row
        type="flex"
        justify="space-between"
        gutter={[16, 16]}
        align="middle"
        style={{ margin: "50px 0px" }}
      >
        <Col md={12}>
          <Image src={About2} alt="kuh" />
        </Col>
        <Col md={12}>
          <Typography as="h2" align="left" color="#343b5c" weight="bold">
            Why Eshop
          </Typography>
          <Typography
            align="justify"
            color="rgba(52, 59, 92, 0.7)"
            weight="500"
            as="h5"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </Typography>
        </Col>
      </Row>
    </Grid>
  );
};

export default About;
