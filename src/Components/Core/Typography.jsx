import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
function getDefaultStyling(headers) {
  let fontSize = null;
  let lineHeight = null;
  switch (headers) {
    case "h1":
      fontSize = "48px";
      lineHeight = "73px";
      break;
    case "h2":
      fontSize = "36px";
      lineHeight = "54px";
      break;
    case "h3":
      fontSize = "24px";
      lineHeight = "36px";
      break;
    case "h4":
      fontSize = "20px";
      lineHeight = "30px";
      break;
    case "h5":
      fontSize = "18px";
      lineHeight = "27px";
      break;
    case "h6":
      fontSize = "16px";
      lineHeight = "24px";
      break;
    default:
      fontSize = "13px";
      lineHeight = "20px";
  }
  return `font-size: ${fontSize}; line-height: ${lineHeight};`;
}
const Text = styled.h2`
  color: ${({ color }) => color};
  text-align: ${({ align }) => align};
  ${({ as }) => getDefaultStyling(as)};
  font-weight: ${({ weight }) => weight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  ${({ noMargin }) => noMargin && "margin: 0"};
  && {
    line-height: ${({ lineHeight }) => lineHeight};
    font-size: ${({ fontSize }) => fontSize};
  }
`;
const Typography = ({ className, text, children, ...rest }) => (
  <Text className={className} {...rest}>
    {children ? children : text}
  </Text>
);
Typography.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  lineHeight: PropTypes.string,
  letterSpacing: PropTypes.string,
};
Typography.defaultProps = {
  as: "h2",
  align: "left",
  weight: "normal",
  color: "#000000",
};
export default Typography;
