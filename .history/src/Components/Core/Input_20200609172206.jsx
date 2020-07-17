import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import styled from "styled-components";
import { MixStyle } from "../styles";
const InputWraper = styled.span`
  .ant-input-affix-wrapper-lg {
    max-height: 50px;
  }
  .ant-input-prefix {
    color: #404e67;
  }
  svg {
    ${MixStyle.inputPrefixIcon}
  }
`;
const StyledInput = styled(Input)`
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: #ffffff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  margin: auto;
  border: 1px solid #dedede;
  ${MixStyle.inputTextSize};
  ::placeholder {
    ${MixStyle.inputTextSize}
  }
`;
const InputCompo = ({ children, placeholder, prefix, className, ...rest }) => {
  return (
    <InputWraper>
      <StyledInput
        size="large"
        placeholder={placeholder}
        prefix={prefix}
        disabled={rest.disabled}
        className={className}
        {...rest}
      />
    </InputWraper>
  );
};
InputCompo.defaultProps = {
  placeholder: "Type here",
  type: "text",
  height: "50px",
};
InputCompo.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  height: PropTypes.string,
};

export default InputCompo;
