import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { MixStyle, media } from "../../styles";
// import Svg from "../../../assets/icons/icon";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AddProduct,
  ViewProduct,
  Settings,
} from "../../Views/Pages/AdminSubPages";

const { SubMenu } = Menu;
const SubHeader = styled.div`
  background: #233b67;
`;
const StyledMenu = styled(Menu)`
  background: none;
  border-bottom: none;
  ${MixStyle.flexArround};
  height: 60px;
  li > a {
    color: white !important;
  }
`;
const AdminPanel = () => {
  const [state, setState] = useState({ current: "add_product" });
  const handleClick = (e) => {
    console.log("click ", e);
    setState({
      current: e.key,
    });
  };
  return (
    <React.Fragment>
      <MenuBar handleClick={handleClick} state={state} />
      {state.current === "add_product" ? (
        <div>add_product</div>
      ) : state.current === "view_product" ? (
        <div>view_product</div>
      ) : state.current === "Settings" ? (
        <div>Settings</div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};
const MenuBar = ({ handleClick, state }) => (
  <SubHeader>
    <StyledMenu
      onClick={handleClick}
      selectedKeys={[state.current]}
      mode="horizontal"
    >
      <Menu.Item
        key="add_product"
        //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
      >
        <Link className="color-inherit" to="/admin">
          Add Products
        </Link>
      </Menu.Item>
      <Menu.Item
        key="view_product"
        //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
      >
        <Link className="color-inherit" to="/admin">
          View Product List
        </Link>
      </Menu.Item>
      <Menu.Item
        key="Settings"
        //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
      >
        <Link className="color-inherit" to="/admin">
          Settings
        </Link>
      </Menu.Item>
    </StyledMenu>
  </SubHeader>
);
export default AdminPanel;
