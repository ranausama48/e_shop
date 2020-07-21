import React from "react";
import { Row, Col } from "antd";
import { Grid, Typography } from "../../Components/Core";
import ContactUs from "";
const Contact = () => {
  return (
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
  );
};

export default Contact;
