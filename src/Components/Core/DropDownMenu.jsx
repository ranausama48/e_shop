import React from "react";
import { Menu } from "antd";
import styled from "styled-components";
import { MixStyle } from "../styles";
const StyledMenu = styled(Menu)`
  background: #ffffff;
  width: 120px;
  border: 1px solid #d7e1eb;
  box-sizing: border-box;
  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
  border-radius: 7px;
  && {
    li {
      ${MixStyle.flexStart};
      height: 20px;
      ${MixStyle.DropDownMenu}
      > * {
        ${MixStyle.DropDownMenu}
      }
    }
  }
`;
const DropDownMenu = ({ children, ...props }) => {
  return <StyledMenu {...props}>{children}</StyledMenu>;
};

export default DropDownMenu;
