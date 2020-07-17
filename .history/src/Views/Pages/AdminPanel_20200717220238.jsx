import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { MixStyle, media } from "../../../styles";
import Svg from "../../../assets/icons/icon";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { getBuyer } from "../../../redux/Action/addBuyer";
import { getClothQuality } from "../../../redux/Action/clothQuality";
import { getYarnQuality } from "../../../redux/Action/yarnQuality";
import { getContracts } from "../../../redux/Action/contract";

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
export const NavLinks = () => {
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
        mode="horizontal"
      >
        <Menu.Item
          key="overview"
          icon={<Svg width={16} height={15} color="#9FA2B4" icon="dashboard" />}
        >
          <Link className="color-inherit" to="/admin">
            overview
          </Link>
        </Menu.Item>

        <SubMenu
          icon={<Svg width={16} height={20} color="#9FA2B4" icon="buyer" />}
          title="Buyer"
        >
          <Menu.ItemGroup>
            <Menu.Item key="add_buyer">
              <StyledLink to="/addBuyer">Add Buyer</StyledLink>
            </Menu.Item>
            <Menu.Item key="buyer_list">
              <StyledLink to="/buyer-list">Buyer List</StyledLink>
            </Menu.Item>
            <Menu.Item key="transaction_history">
              <StyledLink to="/transactions">Transaction History</StyledLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          icon={<Svg width={16} height={20} color="#9FA2B4" icon="contract" />}
          title="Contract"
        >
          <Menu.ItemGroup>
            <Menu.Item key="add_contract">
              <StyledLink to="/add-contract">Add Contract</StyledLink>
            </Menu.Item>
            <Menu.Item key="contract_list">
              <StyledLink to="/contract-list">Contract List</StyledLink>
            </Menu.Item>
            <Menu.Item key="yarn_history">
              <StyledLink to="/yarn-history">Yarn History</StyledLink>
            </Menu.Item>
            <Menu.Item key="dispatch_history">
              <StyledLink to="/dispatch-history">Dispatch History</StyledLink>
            </Menu.Item>
            <Menu.Item key="return_history">
              <StyledLink to="/return-history">Return History</StyledLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          icon={<Svg width={16} height={20} color="#9FA2B4" icon="sizer" />}
          title="Sizer"
        >
          <Menu.ItemGroup>
            <Menu.Item key="sizer_dash">
              <StyledLink to="/sizer-dashboard">Sizer Dash</StyledLink>
            </Menu.Item>
            <Menu.Item key="add_sizer">
              <StyledLink to="/add-sizer">Add Sizer</StyledLink>
            </Menu.Item>
            <Menu.Item key="sizer_list">
              <StyledLink to="/sizer-list">Sizers List</StyledLink>
            </Menu.Item>
            <Menu.Item key="sizer_history">
              <StyledLink to="/program-history">History</StyledLink>
            </Menu.Item>
            <Menu.Item key="send_yarn">
              <StyledLink to="/send-yarn">Send Yarn</StyledLink>
            </Menu.Item>
            <Menu.Item key="add_program">
              <StyledLink to="/add-program">Add Program</StyledLink>
            </Menu.Item>
            <Menu.Item key="generate_bill">
              <StyledLink to="/generate-bill">Generate Bill</StyledLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          icon={<Svg width={16} height={20} color="#9FA2B4" icon="setting" />}
          title="Settings"
        >
          <Menu.ItemGroup>
            <Menu.Item key="setting_general">
              <StyledLink to="/general">General</StyledLink>
            </Menu.Item>
            <Menu.Item key="manage_role">
              <StyledLink to="/manage-roles">Manage Roles</StyledLink>
            </Menu.Item>
            <Menu.Item key="add_user">
              <StyledLink to="/add-user">Add users</StyledLink>
            </Menu.Item>
            <Menu.Item key="add_yarn_quality">
              <StyledLink to="/add-yarn-quality">Add Yarn quality</StyledLink>
            </Menu.Item>
            <Menu.Item key="add_cloth_quality">
              <StyledLink to="/add-cloth-quality">Add Cloth quality</StyledLink>
            </Menu.Item>
            <Menu.Item key="add_tax_rate">
              <StyledLink to="/add-tax-rate">Add Tax Rate</StyledLink>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </StyledMenu>
    </SubHeader>
  );
};
