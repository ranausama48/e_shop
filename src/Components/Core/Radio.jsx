import React from "react";
import { Radio } from "antd";
import styled from "styled-components";
import { MixStyle } from "../styles";
const StyledRadio = styled(Radio.Group)`
  ${(props) => (props.placement ? `${MixStyle.flexBetween}` : "")}
  .ant-radio-wrapper {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    color: #404e67;
  }
  .ant-radio-inner {
    width: 24px;
    height: 24px;
    background: #f6f7ff;
    border: 2px solid #404e67;
    box-sizing: border-box;
    border-radius: 12px;
  }
  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: #404e67;
  }
  .ant-radio-inner::after {
    width: 12px;
    height: 12px;
    top: unset;
    left: unset;
    background: #404e67;
  }
  .ant-radio-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const RadioCompo = ({ onChange, checked, value, children, ...rest }) => {
  return (
    <StyledRadio {...rest} onChange={onChange}>
      {console.log("value", rest)}
      {children}
    </StyledRadio>
  );
};

export default RadioCompo;
