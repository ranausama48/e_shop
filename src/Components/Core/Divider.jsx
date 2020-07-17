import React from "react";
import { Divider } from "antd";
import PropTypes from "prop-types";

import styled from "styled-components";
const StyledDivider = styled(Divider)`
  /* width: ${({ width }) => width}; */
  width:${(props) => (props.type === "vertical" ? "8px" : props.width)};
  height:${(props) => (props.type === "vertical" ? "30px" : props.height)};
  min-width: unset;
  background: ${({ bg }) => bg};
  margin:${(props) => (props.type === "vertical" ? "0px 5px" : "")};
  border-radius: ${({ radius }) => radius};
`;
const DividerCompo = ({ type, ...rest }) => {
  return <StyledDivider type={type} {...rest} />;
};

DividerCompo.propTypes = {
  width: PropTypes.string,
};
DividerCompo.defaultProps = {
  width: "92px",
  height: "8px",
  bg: "#404e67",
  radius: "2px",
};

export default DividerCompo;
