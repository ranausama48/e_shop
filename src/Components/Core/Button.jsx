import React from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
function getDefaultStyling(btntype) {
  switch (btntype) {
    case "btn-primary":
      return `min-width: 148px ; min-height:30px ;`;
    case "btn-secondary":
      return `min-width: 187px ; min-height:55px ;`;
    case "btn-tertiary":
      return `min-width: 200px ; min-height:50px ;`;
    default:
      return `min-width: 100% ; min-height:55px ;`;
  }
}

const StyledButton = styled(Button)`
  margin: ${({ margin }) => margin};
  display: block;
  border: ${({ border }) => border || "none"};
  background: ${({ bg }) => bg};
  color: ${({ color }) => color || "white"};
  font-size:${({ fontSize }) => fontSize};
  font-weight:${({ weight }) => weight};
  line-height:${({ lineHeight }) => lineHeight};
  letter-spacing:${({ letterSpacing }) => letterSpacing};
  box-shadow:${({ shadow }) => shadow};
  min-height: ${({ height }) => height};
  min-width: ${({ width }) => width};
   /* ${({ btntype }) => getDefaultStyling(btntype)}; */
 
  && {
    :hover,
    :active,
    :focus {
      background: ${({ bg }) => bg};
      /* border-color: ${({ bg }) => bg}; */
      border: ${({ border }) => border} !important;

      color: ${({ color }) => color || "white"};
      /* box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1); */
    }
  }
 
  /* box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1); */
  border-radius: ${({ radius }) => radius};
`;
const ButtonCompo = ({ children, btntype, className, ...rest }) => {
  return (
    <StyledButton btntype={btntype} className={className} {...rest}>
      {children}
    </StyledButton>
  );
};
ButtonCompo.propTypes = {
  bg: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  radius: PropTypes.string,
};
ButtonCompo.defaultProps = {
  height: "45px",
  width: "100%",
  bg: "#FF6E26",
  radius: "6px",
  margin: "auto",
};
export default ButtonCompo;
