import React from "react";
import { DatePicker } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MixStyle } from "../styles";

const StyledDate = styled(DatePicker)`
  ${MixStyle.inputStyle}
  .ant-picker-input > input {
    ${MixStyle.inputTextSize}
    color: #979ba4 !important;
  }
  ${(props) =>
    (props.reverse = "reverse"
      ? ` .ant-picker-input {
    flex-direction: row-reverse;
    svg {
      ${MixStyle.inputPrefixIcon}
    }
  } `
      : "")}
  width: 100%;
`;
const Date = ({ onChange, placeholder, reverse, ...rest }) => {
  return (
    <StyledDate
      {...rest}
      format="YYYY-MM-DD"
      // placeholder="Contract Date"
      placeholder={placeholder}
      reverse="reverse"
      onChange={onChange}
    />
  );
};

Date.propTypes = {
  placeholder: PropTypes.string,
};
Date.defaultProps = {
  placeholder: "Select Date",
};
export default Date;
