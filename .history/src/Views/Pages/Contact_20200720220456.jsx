import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Grid, Typography } from "../../Components/Core";
import ContactUs from "../../assets/contact-us.jpg";
const Container = styled.div`
  height: 100vh;
  padding: 50px;
`;
const Contact = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <Col md={12}>
            <Typography as="h2" align="center" color="#343b5c" weight="bold">
              Why Online Shoping
            </Typography>
          </Col>
          <Col md={12}>
            <img src={ContactUs} alt="" />
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Contact;
