import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Grid, Typography } from "../../Components/Core";
import ContactUs from "../../assets/contact-us.jpg";
const Container = styled.div`
  height: 100vh;
  padding: 50px 0px;
`;
const Image = styled.img`
  width: 100%;
`;
const Contact = () => {
  return (
    <Container>
      <Grid>
        <Row type="flex" justify="space-between">
          <Col md={12}>
            <Typography as="h2" align="center" color="#343b5c" weight="bold">
              Why Online Shoping
            </Typography>
          </Col>
          <Col md={12}>
            <Image src={ContactUs} alt="" />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Contact;
