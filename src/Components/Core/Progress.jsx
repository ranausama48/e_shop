import React from "react";
import { Progress } from "antd";
import styled from "styled-components";
const StyledProgress = styled(Progress)`
  max-width: 178px;
  display: block;
  margin: auto;
  .ant-progress-bg {
    background: ${(props) =>
      props.bgcolor === "received-payment"
        ? "#7194F8"
        : props.bgcolor === "pending-payment"
        ? "#DC4A84"
        : props.bgcolor === "in-progress"
        ? "#FCD550"
        : props.bgcolor === "contract-complete"
        ? "#55BD86 "
        : ""};
  }
`;
const ProgressCompo = ({ children, className, ...props }) => {
  return <StyledProgress className={className} {...props} />;
};

export default ProgressCompo;
