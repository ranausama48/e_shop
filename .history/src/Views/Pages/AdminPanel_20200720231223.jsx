import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { MixStyle, media } from "../../styles";
// import Svg from "../../../assets/icons/icon";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { AddProduct } from "../../Views/Pages/AdminSubPages/add-product";
import { ViewProduct } from "../../Views/Pages/AdminSubPages/view-product";
import { Settings } from "../../Views/Pages/AdminSubPages/settings";
import { EditFilled, EyeFilled } from "@ant-design/icons";

const SubHeader = styled.div`
  background: #ed4c67;
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
    setState({
      current: e.key,
    });
  };
  return (
    <React.Fragment>
      <MenuBar handleClick={handleClick} state={state} />
      {state.current === "add_product" ? (
        <AddProduct />
      ) : state.current === "view_product" ? (
        <ViewProduct />
      ) : state.current === "Settings" ? (
        <Settings />
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
      <Menu.Item key="add_product">
        <Link className="color-inherit" to="/admin">
          Add Products
        </Link>
      </Menu.Item>
      <Menu.Item key="view_product">
        <Link className="color-inherit" to="/admin">
          View Product List
        </Link>
      </Menu.Item>
      {/* <Menu.Item
        key="Settings"
        //   icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
      >
        <Link className="color-inherit" to="/admin">
          Settings
        </Link>
      </Menu.Item> */}
    </StyledMenu>
  </SubHeader>
);
export default AdminPanel;
