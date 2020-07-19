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
const Home = () => {
  const state = useSelector((state) => state.addProduct.products);
  return (
    <Grid style={{ margin: "20px auto" }}>
      <Row type="flex" justify="center" gutter={[16, 16]}>
        {state ? (
          state.map((data, index) => (
            <Col lg={8} sm={13} xs={24} key={index}>
              {console.log(state)}
              <Card
                hoverable
                style={{
                  width: "100%",
                  border: "2px solid black",
                  boxShadow: " rgba(0, 0, 0, 0.15) 0px 2px",
                  background: "#f7f7ff",
                  padding: "20px",
                }}
                cover={<img alt="example" src={data.ImgUrls} />}
              >
                <Row type="flex" justify="space-around">
                  <p>Posted Date: {data.posting_date}</p>
                  <p>Post By: {data.posted_by}</p>
                </Row>
                <Meta title={data.product_name} description={data.desc} />
                <Button>Add To Cart</Button>
              </Card>
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
