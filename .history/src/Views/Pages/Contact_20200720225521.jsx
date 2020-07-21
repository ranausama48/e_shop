import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { Grid, Typography } from "../../Components/Core";
import ContactUs from "../../assets/contact-us.jpg";
import ContactUs2 from "../../assets/about-us.png";

import {
  PhoneOutlined,
  MailOutlined,
  TwitterCircleFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
const Container = styled.div`
  padding: 50px 0px;
`;
const Image = styled.img`
  width: 100%;
`;
const Contact = () => {
  return (
    <Container>
      <Grid>
        <Row
          type="flex"
          justify="space-between"
          gutter={[16, 16]}
          style={{ margin: "50px 0px" }}
        >
          <Col md={12}>
            <Typography as="h2" align="left" color="#343b5c" weight="bold">
              Contact Us
            </Typography>
            <Typography color="rgba(52, 59, 92, 0.7)" weight="500" as="h5">
              We're here to help and answer any question you might have. We look
              forward to hearing from you <span>😀</span>
            </Typography>

            <Row type="flex" align="middle">
              <PhoneOutlined
                rotate={90}
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "rgba(52, 59, 92, 0.7)",
                  margin: "0px 20px;",
                }}
              />
              <Typography
                noMargin
                color="rgba(52, 59, 92, 0.7)"
                weight="bold"
                as="h4"
              >
                Phone :
              </Typography>
              <Typography
                noMargin
                color="rgba(52, 59, 92, 0.7)"
                weight="500"
                as="h5"
              >
                +92 111 1111111
              </Typography>
            </Row>
            <Row type="flex" align="middle">
              <MailOutlined
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "rgba(52, 59, 92, 0.7)",
                  width: "  ",
                }}
              />
              <Typography
                noMargin
                color="rgba(52, 59, 92, 0.7)"
                weight="bold"
                as="h4"
              >
                Email :
              </Typography>
              <Typography
                noMargin
                color="rgba(52, 59, 92, 0.7)"
                weight="500"
                as="h5"
              >
                dummy@something.com
              </Typography>
            </Row>
          </Col>
          <Col md={12}>
            <Image src={ContactUs} alt="" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Image src={ContactUs2} alt="" />
          </Col>
          <Col md={12}>
            <Typography as="h2" align="left" color="#343b5c" weight="bold">
              24/7 Customer Support
            </Typography>

            <Typography color="rgba(52, 59, 92, 0.7)" weight="500" as="h5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </Typography>
          </Col>
        </Row>
        <Row type="flex" justify="center" style={{ marginTop: "50px" }}>
          <div>
            <Typography as="h3" align="center" color="#343b5c" weight="bold">
              Follow Us on Socail Media
            </Typography>
            <Row type="flex" justify="space-around">
              <TwitterCircleFilled
                style={{ fontSize: "40px", color: "#343b5c" }}
              />
              <FacebookFilled style={{ fontSize: "40px", color: "#343b5c" }} />
              <InstagramFilled style={{ fontSize: "40px", color: "#343b5c" }} />
            </Row>
          </div>
        </Row>
      </Grid>
    </Container>
  );
};

export default Contact;
