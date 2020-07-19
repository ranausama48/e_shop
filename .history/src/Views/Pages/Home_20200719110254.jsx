import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import { Grid, Button } from "../../Components/Core";
import styled from "styled-components";
import { Card } from "antd";

const { Meta } = Card;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
const StyledCard = styled(Card)`
  width: 100%;
  border: none !important;
  box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
    0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  .ant-card-body {
    padding: 0px !important;
  }
  .p-10 {
    padding: 10px;
  }
`;
const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return (
    <Grid style={{ margin: "20px auto" }}>
      <Row type="flex" justify="center" gutter={[16, 16]}>
        {state ? (
          state.map((data, index) => (
            <Col lg={8} sm={13} xs={24} key={index}>
              {console.log(state)}
              <StyledCard
                hoverable
                style={{}}
                cover={<img alt="example" src={data.ImgUrls} />}
              >
                <div className="p-10">
                  <Row type="flex" justify="space-around">
                    <p>Posted Date: {data.posting_date}</p>
                    <p>Post By: {data.posted_by}</p>
                  </Row>
                  <Meta title={data.product_name} description={data.desc} />
                </div>
                <Button>Add To Cart</Button>
              </StyledCard>
              {/* <div>
                <Image src={data.ImgUrls} alt="" />
                <Row type="flex" justify={"space-between"}>
                  <p>{data.posting_date}</p>
                  <p>{data.posted_by}</p>
                </Row>
                <h2>{data.product_price}</h2>
                <p>{data.desc}</p>
              </div> */}
            </Col>
          ))
        ) : (
          <div>Laoding....</div>
        )}
      </Row>
    </Grid>
  );
};

export default Home;
