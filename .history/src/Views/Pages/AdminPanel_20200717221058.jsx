import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { MixStyle, media } from "../../styles";
// import Svg from "../../../assets/icons/icon";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;
const SubHeader = styled.div`
  background: #233b67;
`;
const StyledMenu = styled(Menu)`
  background: none;
  border-bottom: none;
  ${MixStyle.flexArround};
  height: 60px;
  .color-inherit,
  .color-inherit:hover {
    color: inherit;
  }
  .ant-menu-submenu,
  .ant-menu-item {
    ${MixStyle.flexCenter};
  }
  .ant-menu-submenu-selected,
  .ant-menu-item-selected,
  .ant-menu-submenu-active,
  .ant-menu-item:hover {
    color: white !important;
    background: rgba(255, 255, 255, 0.2);
    border-bottom: 0px;
    svg {
      color: white !important;
    }
  }
  li {
    height: 100%;
    ${MixStyle.Link};
    line-height: unset;
    color: #a4a6b3;
    ${media.tablet`padding:10px 18px;`}

    svg {
      margin-right: 10px;
      ${media.tablet`margin:0px;`}
    }
    .ant-menu-submenu-title {
      color: unset !important;
      transition: none !important;
    }
    :hover {
      color: white !important;
      background: rgba(255, 255, 255, 0.2);
      transition: background 0s cubic-bezier(0.645, 0.045, 0.355, 1);
      border-bottom: 0px !important;

      svg {
        color: white !important;
      }
    }
  }

  .ant-menu-horizontal > .ant-menu-item-selected {
    border-top: 2px solid red !important;
  }
  .ant-menu-item {
    ${media.tablet`padding:10px 18px;`};
  }

  .ant-menu-submenu-title {
    ${media.tablet`padding:0px;`};
  }
  span {
    ${media.tablet`display:none;`};
  }
`;
const StyledLink = styled(Link)`
  color: ${(props) =>
    props.color === "no_color" ? "unset" : "#7E93AB !important"};
  font-weight: 500;
  :hover {
    color: ${(props) =>
      props.color === "no_color" ? "white !important" : "#7E93AB !important"};
  }
`;
const AdminPanel = () => {
  const company_id = localStorage.getItem("company_id");

  const [state, setState] = useState({ current: "overview" });
  const dispatch = useDispatch();

  const handleClick = (e) => {
    console.log("click ", e);
    setState({
      current: e.key,
    });
  };
  return (
    <SubHeader>
      <StyledMenu
        onClick={handleClick}
        selectedKeys={[state.current]}
        mode="verticel"
      >
        <Menu.Item
          key="overview"
          //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
        >
          <Link className="color-inherit" to="/admin">
            Add Products
          </Link>
        </Menu.Item>
        <Menu.Item
          key="overview"
          //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
        >
          <Link className="color-inherit" to="/admin">
            View Product List
          </Link>
        </Menu.Item>
        <Menu.Item
          key="overview"
          //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
        >
          <Link className="color-inherit" to="/admin">
            Settings
          </Link>
        </Menu.Item>
      </StyledMenu>
    </SubHeader>
  );
};
export default AdminPanel;
