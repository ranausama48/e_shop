import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { Row, Col } from "antd";
import { Grid, Button, Typography } from "../../Components/Core";
import styled from "styled-components";
import { Card, Carousel } from "antd";
import EshopBanner1 from "../../assets/eshop-banner-1.jpg";
import EshopBanner2 from "../../assets/eshop-banner-2.jpg";
import HeroImg from "../../assets/img1.jpg";
import bata from "../../assets/bata.png";
import service from "../../assets/service.png";
import hushPupies from "../../assets/hush-pupies.png";
import indure from "../../assets/indure.png";
import CBlogo from "../../assets/CB-logo.png";
import gulahmed from "../../assets/gulahmed.png";

const Image = styled.img`
  width: 200px;
  height: 200px;
  margin: auto;
`;
const StyledCard = styled(Card)`
  width: 100%;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  .ant-card-body {
    padding: 0px !important;
  }
  .ant-card-cover {
    padding: 10px;
  }
  .p-10 {
    padding: 10px;
  }
`;
const LogoImages = styled.img`
  width: 100%;
`;
const ImageContainer =styled.div`


  border: 1px solid #f1f1f1;
  border-radius: 0.25rem;
  background: #fff;
  padding: 8px;
  height: 120px;
  /* display: flex; */
  display: flex;
  justify-content: center;
  align-items: center;
}
`
const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  const history = useHistory();
  let length = state.length;
  let totalItems = 3;
  const stateIndex = length - totalItems;
  const NewArray = state.slice(stateIndex, length);

  console.log(length);
  return (
    <div>
      {/* <Carousel autoplay>
        <div>
          <img src={EshopBanner2} alt="" />
        </div>

        <div>
          <img src={EshopBanner1} alt="" />
        </div>
      </Carousel> */}
      <div style={{ background: "white" }}>
        <Grid>
          <Row type="flex" justify="space-between" align="middle">
            <Col md={12}>
              <Typography as="h2" color="#343b5c" weight="bold">
                E Shop
              </Typography>
              <Typography color="rgba(52, 59, 92, 0.7)" as="h5">
                Eshop is the Pakistan’s first marketplace providing you best
                sales and deals from all over the top brands of Pakistan. Search
                your most favourite items now and Get upto 70% off on flat items
                including clothing, jewellery, makeup and foot wears.
              </Typography>
            </Col>

            <Col md={12}>
              <img style={{ width: "100%" }} src={HeroImg} alt="" />
            </Col>
          </Row>
          <div>
            <Row type="flex" justify="center">
              <Col md={16}>
                <Typography
                  align="center"
                  as="h2"
                  color="#343b5c"
                  weight="bold"
                >
                  Top Brands on Eshop
                </Typography>
                <Typography
                  align="center"
                  color="rgba(52, 59, 92, 0.7)"
                  as="h6"
                >
                  Here are the best sales offers from the top selling brands of
                  Pakistan. Checkout the brands profile now and grab one of the
                  finest retail brands offers in the country.
                </Typography>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col md={18}>
                <Row
                  type="flex"
                  justify="space-between"
                  align="middle"
                  gutter={[16, 16]}
                >
                  <Col md={4}>
                    <LogoImages src={bata} alt="" />
                  </Col>
                  <Col md={4}>
                    <LogoImages src={service} alt="" />
                  </Col>
                  <Col md={4}>
                    <LogoImages src={hushPupies} alt="" />
                  </Col>
                  <Col md={4}>
                    <LogoImages src={indure} alt="" />
                  </Col>
                  <Col md={4}>
                    <ImgContainer>
                    
                    </ImgContainer>
                    <LogoImages src={CBlogo} alt="" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Grid>
      </div>

      <Grid style={{ margin: "20px auto" }}>
        <Row type="flex" justify="center" gutter={[16, 16]}>
          {state ? (
            NewArray.map((data, index) => (
              <Col lg={8} sm={13} xs={24} key={index}>
                {console.log(state)}
                <Link to={`/shop/${data.id}`}>
                  <StyledCard
                    hoverable
                    style={{}}
                    cover={<Image alt="example" src={data.ImgUrls} />}
                  >
                    <div className="p-10">
                      <Typography
                        noMargin
                        text={data.product_name}
                        as="h3"
                        weight="500"
                        color="red"
                        align="center"
                      />
                      <Typography
                        noMargin
                        as="h6"
                        bweight="400"
                        color="red"
                        align="center"
                      >
                        {data.desc}
                      </Typography>
                      <Typography
                        noMargin
                        as="h3"
                        weight="bold"
                        color="red"
                        align="center"
                      >
                        ${data.product_price}
                      </Typography>
                    </div>
                    <Button radius="0px">Add To Cart</Button>
                  </StyledCard>
                </Link>
              </Col>
            ))
          ) : (
            <div>Laoding....</div>
          )}
        </Row>
      </Grid>
    </div>
  );
};

export default Home;
