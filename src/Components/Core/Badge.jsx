import React from "react";
import { Badge } from "antd";
import { MixStyle, theme } from "../styles";
import styled from "styled-components";
const { colors, textColor } = theme;
const handleColorType = (bgcolor, theme) => {
  switch (bgcolor) {
    case "isued":
    case "paid":
    case "Completed":
    case "yarn in":
    case "Received":
      return `color: ${textColor.sucess} ; background:${colors.success} ;`;
    case "partially":
    case "In Progress":
    case "inprogress":
    case "in progress":
      return `color: ${textColor.warning} ; background:${colors.warning} ;`;
    case "pending":
    case "yarn out":
    case "Retutrn":
      return `color: ${textColor.danger} ; background:${colors.danger} ;`;
    default:
      return "#fff";
  }
};
const StyledBadge = styled(Badge)`
  height: 30px;
  min-width: 80px;
  max-width: 100%;
  .ant-badge-count {
    border-radius: 20px;
    font-weight: 500;
    height: 100%;
    ${MixStyle.flexCenter}
    font-size: 12px;
    background: unset;
    line-height: 18px;
    ${({ bgcolor }) => handleColorType(bgcolor)};
  }
  border-radius: 20px;
`;
const BadgeCompo = ({ children, status, text, ...rest }) => {
  return <StyledBadge bgcolor={status} count={text} />;
};
export default BadgeCompo;
