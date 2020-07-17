import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import { MixStyle } from "../../styles";
import { UserOutlined } from "@ant-design/icons";
const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
  ${MixStyle.inputStyle};
  ${MixStyle.inputTextSize}
  resize: none;
  ::placeholder {
    ${MixStyle.inputTextSize}
  }
  ::placeholder:after {
    content: ">";
  }
`;
const TextAreaCompo = ({ onChange, ...rest }) => {
  return (
    <StyledTextArea
      onChange={onChange}
      prefix={<UserOutlined />}
      placeholder="Description"
      rows={6}
    />
  );
};

export default TextAreaCompo;
