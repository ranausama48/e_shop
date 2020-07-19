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
            <Col md={8}>
              <Typography as="h2" color="red" weight="bold">
                Online Shoping
              </Typography>
            </Col>
            <Col md={12}>
              <img src={HeroImg} alt="" />
            </Col>
          </Row>
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
                      <Typography noMargin as="h6" color="red" align="left">
                        Post By: {data.posted_by}
                      </Typography>
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

                      <Typography noMargin as="p" color="red" align="right">
                        Posted Date: {data.posting_date}
                      </Typography>
                      {/* <Meta title= description={data.desc} /> */}
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
