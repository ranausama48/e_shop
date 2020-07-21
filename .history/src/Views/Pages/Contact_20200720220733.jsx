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
        <Row type="flex" justify="space-between" gutter={[16, 16]}>
          <Col md={12}>
            <Typography as="h2" align="left" color="#343b5c" weight="bold">
              Contact Us
            </Typography>
            <Typography color="rgba(52, 59, 92, 0.7)" weight="500" as="h5">
              We're here to help and answer any question you might have. We look
              forward to hearing from you 😀
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
