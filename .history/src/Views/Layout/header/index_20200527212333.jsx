import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, Typography, Grid, Button } from '../../../components/core'
import Icon, { MenuFoldOutlined } from '@ant-design/icons'
import { Row, Col, Drawer } from 'antd'
import { Layout, Menu } from 'antd'
import { Dropdown } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Header } = Layout
const SubMenu = Menu.SubMenu
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
`
const StyledHeader = styled(Header)`
  /* drop down */

  .dropbtn {
    /* background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer; */
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content div {
    display: flex;
    justify-content: space-around;
  }
  .dropdown-content a {
    font-size: 10px;
  }
  .dropdown-content {
    display: none;
    top: 15px;
    left: 13px;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 254px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: display 0s, opacity 0.5s linear;

    @media (min-width: 1017px) {
      left: -112px;
    }
    @media (min-width: 1200px) {
      left: 0px;
    }
  }

  .dropdown-content a {
    color: black;
    padding: 0px 5px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  /* .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  } */

  /* ---------- */

  display: flex;
  background: url('/assets/images/newheader.png') no-repeat;
  height: 112px;
  background-size: 100% 100%;
  height: 95px;
  .ant-modal-wrap {
    background: rgba(0, 0, 0, 0.59) !important;
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
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
  }
  @media (min-width: 1200px) {
    .remove--grid {
      max-width: 100%;
    }
    .leftMenu {
      justify-content: flex-end;
    }
  }
  @media (min-width: 3000px) {
    height: 180px;
  }
  @media screen and (min-width: 768px) and (max-width: 1200px) {
    .remove--grid {
      max-width: 100%;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1300px) {
    .apply_button {
      margin-top: 4px;
    }
  }
  @media (max-width: 767px) {
    padding: 0px;
    .remove--grid {
      max-width: 100%;
    }
    .leftMenu {
      display: none;
    }
    .show__button {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  @media (max-width: 575px) {
    background: white;
    .show__button {
      color: #293182;
    }
  }
  .b-r {
    border-right: 1px solid white;
  }
  .p-lr {
    padding: 0px 11px;
  }
`
const Image = styled.img`
  width: 100%;
`
const HeaderCompo = () => {
  const [state, setState] = useState({
    current: 'mail',
    visible: false,
    modal1Visible: false,
  })
  useEffect(() => {
    const header = document.getElementById('myHeader')
    const sticky = 80
    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
      } else {
        header.classList.remove('sticky')
      }
    })
    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])
  return (
    <StyledHeader id="myHeader">
      <Grid className="remove--grid">
        <Row type="flex" justify="space-between" align="middle" style={{ height: '100%' }}>
          <Col md={5} xxl={3} xl={4} xs={8} sm={5}>
            <div className="logo">
              <Link style={{ width: '100%' }} href="/">
                <Image src="/assets/images/logo.png" alt="" />
              </Link>
            </div>
          </Col>
          <Col md={17} sm={1}>
            <div className="leftMenu">
              <div className="d-flex h-center v-center" style={{ flexWrap: 'wrap' }}>
                <Link href="/" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Home"
                  />
                </Link>
                <Link href="/about-us" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="About Nithi"
                  />
                </Link>
                <Link href="/team" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Team"
                  />
                </Link>
                <Link href="/intermediate" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Intermediate"
                  />
                </Link>
                <Link href="/degree-ias" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Degree+IAS"
                  />
                </Link>
                <Link href="/campus" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Campus"
                  />
                </Link>

                <Link href="/career" className="dropbtn" as="" size="16">
                  <Typography
                    className="b-r p-lr"
                    as="h6"
                    lineHeight="15px"
                    noMargin
                    color="white"
                    text="Careers"
                  />
                </Link>

                <Link href="/contact-us" as="" size="16">
                  <Typography
                    className="p-lr"
                    as="h6"
                    noMargin
                    lineHeight="15px"
                    color="white"
                    text="Contact Us"
                  />
                </Link>
                <Button
                  style={{ marginLeft: '5px' }}
                  width="89px"
                  height="27px"
                  radius="13.5px"
                  bg="#D82651"
                  className="d-flex h-center apply_button"
                >
                  <Link href="https://forms.gle/GcoygUAQSbTnSRA18" external target="_blank">
                    Apply
                  </Link>
                </Button>
              </div>
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
                  <Link href="/">
                    <Image src="/assets/images/logo.png" alt="" />
                  </Link>
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
                  <Link href="/" as="" size="16" color="#293182" weight="500">
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => setState({ visible: false })} key="2">
                  <Link href="/about-us" as="" size="16" color="#293182" weight="500">
                    About Nithi
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => setState({ visible: false })} key="3">
                  <Link href="/team" as="" size="16" color="#293182" weight="500">
                    Team
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => setState({ visible: false })} key="4">
                  <Link href="/intermediate" size="16" color="#293182" weight="500">
                    Intermediate
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => setState({ visible: false })} key="5">
                  <Link href="/degree-ias" size="16" color="#293182" weight="500">
                    Degree+IAS
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={() => setState({ visible: false })} key="6">
                  <Link href="/campus" size="16" color="#293182" weight="500">
                    Campus
                  </Link>
                </Menu.Item>
                {/* <Menu.Item  onClick={() => setState({ visible: false })} key="7">
                  <Link href="/career" size="16" color="#293182" weight="500">
                    Careers
                    
                  </Link>
                </Menu.Item> */}
                <SubMenu
                  key="7"
                  title={
                    <span>
                      <Link href="/career" size="16" color="rgba(0, 0, 0, 0.65)" weight="500">
                        Careers
                      </Link>
                    </span>
                  }
                >
                  <Menu.Item key="sub1">
                    <Link href="/commarce" as="" size="16">
                      Career in Commarce
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="sub2">
                    <Link href="/civil-services" as="" size="16">
                      Career in Civil Services
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="sub3">
                    <Link href="career-in-law" as="" size="16">
                      Career in Law
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="sub4">
                    <Link href="career-economics" as="" size="16">
                      Career in Economics
                    </Link>
                  </Menu.Item>
                </SubMenu>
                <Menu.Item onClick={() => setState({ visible: false })} key="8">
                  <Link href="/contact-us" size="16" color="#293182" weight="500">
                    Contact Us
                  </Link>
                </Menu.Item>
                <Menu.Item key="9">
                  <Button
                    onClick={() => setState({ visible: false })}
                    width="89px"
                    height="27px"
                    radius="13.5px"
                    bg="#D82651"
                    className="d-flex h-center"
                  >
                    <Link external href="https://forms.gle/GcoygUAQSbTnSRA18" target="_blank">
                      Apply
                    </Link>
                  </Button>
                </Menu.Item>
              </Menu>
            </StyledDrawer>
          </Col>
        </Row>
      </Grid>
    </StyledHeader>
  )
}
export default HeaderCompo
