import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Typography, Grid } from "../../../Components/Core";
import { MixStyle } from "../../../styles";
import Icon, {
  MenuFoldOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Row, Drawer, Badge } from "antd";
import { Layout, Menu, Popover } from "antd";
import { logout } from "../../../Redux/Action/auth";
const { Header } = Layout;
const { SubMenu } = Menu;
const StyledDrawer = styled(Drawer)`
  /* background: #001529; */
  .ant-menu .ant-menu-light .ant-menu-root .ant-menu-inline {
    ul > li {
      ${MixStyle.flexBetween}
    }
  }
`;
const TypoProps = {
  as: "span",
  fontSize: "14px",
  weight: "600",
  letterSpacing: "0.2px",
  color: "#ED4C67",
};
const StyledMenu = styled(Menu)`
  /* width: 150px; */
  > li {
    padding: 0px !important;
    ${MixStyle.flexBetween};
  }
`;
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  span {
    margin: 0px 10px;
  }
  cursor: pointer;
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
const HeaderCompo = () => {
  const { auth, user } = useSelector((state) => state.auth);
  const itmeInCart = useSelector(
    (state) => state.shopingCart.shopingProduct.length
  );

  const [visible, setVisible] = useState({
    visible: false,
  });
  const handleVisibleChange = (visible) => {
    setVisible({ visible });
  };
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
          <Link to="/">
            <Typography
              as="h6"
              lineHeight="15px"
              noMargin
              color="white"
              text="E Shope"
            />
          </Link>

          <div className="leftMenu">
            <Link to="/">
              <Typography
                className="b-r p-lr"
                as="h6"
                lineHeight="15px"
                noMargin
                color="white"
                text="Home"
              />
            </Link>

            <Link to="/about">
              <Typography
                className="b-r p-lr"
                as="h6"
                lineHeight="15px"
                noMargin
                color="white"
                text="About"
              />
            </Link>

            <Link to="/contact">
              <Typography
                className="b-r p-lr"
                as="h6"
                lineHeight="15px"
                noMargin
                color="white"
                text="Contact Us"
              />
            </Link>

            <Link to="/shop">
              <Typography
                className="p-lr"
                as="h6"
                lineHeight="15px"
                noMargin
                color="white"
                text="Shop"
              />
            </Link>
          </div>
          <div className="leftMenu">
            <Badge count={itmeInCart}>
              <ShoppingCartOutlined
                style={{ color: "white", fontSize: "30px" }}
              />
            </Badge>
            {auth ? (
              <>
                <Link to="/admin">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Admin Panel"
                  />
                </Link>
                <Popover
                  content={<MenuCompo />}
                  title={false}
                  placement="bottomRight"
                  trigger="click"
                  visible={visible.visible}
                  onVisibleChange={handleVisibleChange}
                >
                  <Container>
                    <Typography {...TypoProps} text={user.name} />
                  </Container>
                </Popover>
              </>
            ) : (
              <Link to="/login">
                <Typography
                  className="p-lr"
                  as="h6"
                  lineHeight="15px"
                  noMargin
                  color="white"
                  text="Login"
                />
              </Link>
            )}
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
            <StyledMenu theme="light" mode="inline">
              {auth ? (
                <Menu.Item key="user">
                  <Popover
                    style={{ width: "100%" }}
                    content={<MenuCompo />}
                    title={false}
                    placement="bottomRight"
                    trigger="click"
                    visible={visible.visible}
                    onVisibleChange={handleVisibleChange}
                  >
                    <Container>
                      <Typography {...TypoProps} text={user.name} />
                    </Container>
                  </Popover>
                </Menu.Item>
              ) : null}
              {auth ? (
                <Menu.Item key="auth">
                  <Link to="/">
                    <Typography
                      className="b-r p-lr"
                      as="h6"
                      lineHeight="15px"
                      noMargin
                      color="#343b5c"
                      text="Admin Panel"
                    />
                  </Link>
                </Menu.Item>
              ) : (
                <Menu.Item key="auth">
                  <Link to="/login">
                    <Typography
                      className="b-r p-lr"
                      as="h6"
                      lineHeight="15px"
                      noMargin
                      color="#343b5c"
                      text="Login"
                    />
                  </Link>
                </Menu.Item>
              )}

              <Menu.Item key="cart">
                <Row type="flex" align="middle" justify="space-between">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="#343b5c"
                    text="Shoping Cart"
                  />
                  <Badge count={itmeInCart}>
                    <ShoppingCartOutlined
                      style={{ color: "#343b5c", fontSize: "20px" }}
                    />
                  </Badge>
                </Row>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="#343b5c"
                    text="Home"
                  />
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="#343b5c"
                    text="About"
                  />
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/contact">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="#343b5c"
                    text="Contact Us"
                  />
                </Link>
              </Menu.Item>

              <Menu.Item key="5">
                <Link to="/shop">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="#343b5c"
                    text="Shop"
                  />
                </Link>
              </Menu.Item>
            </StyledMenu>
          </StyledDrawer>
        </Row>
      </Grid>
    </StyledHeader>
  );
};
const MenuCompo = () => {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(logout());
  };
  return (
    <StyledMenu>
      <Menu.Item key="logout" onClick={clickHandler}>
        <Typography {...TypoProps} text="Logout" />
      </Menu.Item>
    </StyledMenu>
  );
};
export default HeaderCompo;
