import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Typography, Grid } from "../../../Components/Core";
import Icon, { MenuFoldOutlined } from "@ant-design/icons";
import { Row, Col, Drawer } from "antd";
import { Layout, Menu } from "antd";
const { Header } = Layout;
const StyledDrawer = styled(Drawer)`
  .ant-drawer-header,
  .ant-drawer-wrapper-body {
    background: #fff;
  }
  .ant-drawer-header {
    border-bottom: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ant-menu-inline {
    height: 100%;
    background: #fff;
    border-right: 0px;
  }
  .ant-menu-item {
    background: transparent !important;
  }
  .ant-menu-item-selected > a,
  .ant-menu-item-selected > a:hover {
    color: #293182;
  }
  .ant-menu-inline .ant-menu-item::after {
    border: 3px solid #293182;
  }
  .ant-drawer-close .anticon svg {
    width: 100%;
    height: 100%;
  }
  .ant-drawer-close span {
    width: 50%;
    height: 50%;
  }
`;
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
const Image = styled.img`
  width: 100%;
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
              className="p-lr"
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="About Nithi"
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
                <a href="/">
                  <Image src="/assets/images/logo.png" alt="" />
                </a>
              </div>
            }
            placement="right"
            closable={true}
            onClose={() => setState({ visible: false })}
            visible={state.visible}
            destroyOnClose={true}
          >
            <Menu theme="light" mode="inline">
              <Menu.Item onClick={() => setState({ visible: false })} key="1">
                Home
              </Menu.Item>
              <Menu.Item onClick={() => setState({ visible: false })} key="2">
                About Nithi
              </Menu.Item>
              <Menu.Item onClick={() => setState({ visible: false })} key="3">
                Team
              </Menu.Item>
            </Menu>
          </StyledDrawer>
        </Row>
      </Grid>
    </StyledHeader>
  );
};
export default HeaderCompo;
