import React from "react";
import styled from "styled-components";
import { Checkbox } from "antd";

const StyledCheckBox = styled(Checkbox)`
  && {
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #404e67;
  }

  .ant-checkbox-checked::after,
  .ant-checkbox > .ant-checkbox-inner,
  .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner {
    border: 2px solid #404e67;
    border-radius: 5px;
  }
  .ant-checkbox > .ant-checkbox-inner {
    background: #f6f7ff;
  }
  .ant-checkbox.ant-checkbox-checked .ant-checkbox-inner {
    background: #404e67;
  }
  .ant-checkbox-inner::after {
    left: 30%;
  }
  .ant-checkbox-inner {
    width: 24px;
    height: 24px;
    border-radius: 5px;
  }
`;
const CheckBox = ({ onChange, children, ...rest }) => {
  return (
    <StyledCheckBox {...rest} onChange={onChange}>
      {children}
    </StyledCheckBox>
  );
};

export default CheckBox;
