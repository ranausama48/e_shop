import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Grid } from "../../../Components/Core";
import Icon, { MenuFoldOutlined } from "@ant-design/icons";
import { Row, Col, Drawer } from "antd";
import { Layout, Menu } from "antd";
const { Header } = Layout;
const StyledDrawer = styled(Drawer)``;
const StyledHeader = styled(Header)`
  display: flex;
  height: 50px;
  .ant-modal-wrap {
    background: #293182 !important;
  }
  .ant-menu-dark {
    background: transparent;
  }
  .ant-menu-item {
    padding: 0px 5px;
  }
  .show__button {
    display: none;
    font-size: 33px;
    color: white;
  }
  .leftMenu {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (max-width: 767px) {
    .leftMenu {
      display: none;
    }
    .show__button {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .b-r {
    border-right: 1px solid white;
  }
  .p-lr {
    padding: 0px 11px;
  }
`;
const HeaderCompo = () => {
  const [state, setState] = useState({
    current: "mail",
    visible: false,
    modal1Visible: false,
  });
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const sticky = 80;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <StyledHeader id="myHeader">
      <Grid fluid>
        <Row
          type="flex"
          justify="space-between"
          align="middle"
          style={{ height: "100%" }}
        >
          <Typography
            as="h6"
            lineHeight="15px"
            noMargin
            color="white"
            text="E Shope"
          />
          <div className="leftMenu">
            <Typography
              className="b-r p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="Home"
            />

            <Typography
              className="b-r p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="About"
            />
            <Typography
              className="b-r p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="Contact Us"
            />
            <Typography
              className="p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="Shop"
            />
          </div>
          <div className="leftMenu">
            <Typography
              className="b-r p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="Cart"
            />
            <Typography
              className="b-r p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="Login"
            />
            <Typography
              className="p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="Sign Up"
            />
          </div>
          <Icon
            component={MenuFoldOutlined}
            onClick={() => setState({ visible: true })}
            className="show__button"
            type="menu-fold"
          />
          <StyledDrawer
            title={
              <div className="logo">
                <a href="/">Eshop</a>
              </div>
            }
            placement="right"
            closable={true}
            onClose={() => setState({ visible: false })}
            visible={state.visible}
            destroyOnClose={true}
          >
            <Menu theme="light" mode="inline">
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">About</Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
              <Menu.Item key="4">Shop</Menu.Item>
              <Menu.Item key="5">Login</Menu.Item>
              <Menu.Item key="6">Sign Up</Menu.Item>
            </Menu>
          </StyledDrawer>
        </Row>
      </Grid>
    </StyledHeader>
  );
};
export default HeaderCompo;
