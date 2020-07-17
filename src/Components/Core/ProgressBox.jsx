import React from "react";
import styled from "styled-components";
import { Typography } from "../core";
import { MixStyle } from "../styles";
import PropTypes from "prop-types";
const handleColorType = (bgcolor) => {
  switch (bgcolor) {
    case "primary":
      return `color: #80C2F6 ; background:#80C2F6 ;`;
    case "success":
      return `color: #55BD86 ; background:#55BD86;`;
    case "warnning":
      return `color: #FCD550 ; background:#FCD550 ;`;
    case "danger":
      return `color: #FF5959 ; background: #FF5959;`;
    default:
      return "#fff";
  }
};
const Container = styled.div`
  background: #fff;
  min-width: 253.05px;
  min-height: 98.63px;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  display: flex;
  margin: 10px 0px;
  > div {
    ${MixStyle.flexCenter}
    flex-direction: column;
  }
  span {
    ${({ bgcolor }) => handleColorType(bgcolor)}
    background: white;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
  }

  div:first-child {
    min-width: 98.63px;
    min-height: 98.63px;
    ${({ bgcolor }) => handleColorType(bgcolor)};
    border-radius: 15px 0px 0px 15px;
  }
  div:nth-child(2) {
    margin: auto;
    padding: 0px 5px;
  }
`;

const DetailBox = ({ children, className, ...rest }) => {
  const { tittle, Rs, value, status, svg } = rest;
  return (
    <Container className={className} paid bgcolor={status}>
      <div>{svg}</div>
      <div>
        <Typography as="p" noMargin text={tittle} color="#000000" />
        <Typography as="h3" weight="600" noMargin>
          {Rs ? (
            <>
              <span>Rs</span> {value}
            </>
          ) : (
            value
          )}
        </Typography>
      </div>
    </Container>
  );
};

DetailBox.propTypes = {
  tittle: PropTypes.string,
  Rs: PropTypes.bool,
  value: PropTypes.string,
  status: PropTypes.string,
  svg: PropTypes.element,
};
DetailBox.defaultProps = {
  Rs: true,
};
export default DetailBox;
