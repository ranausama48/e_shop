import React from "react";
import { Typography } from "../core";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CardBox = styled.div`
  width: 235px;
  background: #f6f7ff;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  margin: 20px auto;

  span {
    margin-left: 5px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #7e93ab;
  }
  .card--body {
    padding: 20px 0px;
  }
  .card--footer {
    background: #233b67;
    border-radius: 0px 0px 15px 15px;
    padding: 10px 0px;
    display: inherit;
    a {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff !important;
      display: inherit;
      text-align: center;
    }
  }
`;
const Card = ({ tittle, value, className, ...props }) => {
  return (
    <CardBox {...props} className={className}>
      <div className="card--body">
        <Typography
          noMargin
          align="center"
          as="h3"
          weight="600"
          color="#233B67"
        >
          {tittle}
        </Typography>
        <Typography
          as="h4"
          noMargin
          align="center"
          fontSize="30px"
          lineHeight="45px"
          color="#55BD86"
          weight="500"
        >
          {value}
          <span>Qty</span>
        </Typography>
      </div>
      <div className="card--footer">
        <Link to="/yarn-stock-history"> View More</Link>
      </div>
    </CardBox>
  );
};

export default Card;
