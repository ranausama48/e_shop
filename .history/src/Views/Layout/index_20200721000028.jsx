import React from "react";
import Footer from "./Footer";
import Header from "./header";
import styled from "styled-components";
import { BackTop } from "antd";
const Main = styled.main`
  min-height: 100vh;
  && {
    .sticky {
      position: fixed;
      width: 100%;
      top: 0px;
      transition: 1s;
      z-index: 11;
    }
  }
`;
const StyledBackTop = styled(BackTop)`
  background: #293182;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const Layout = ({ children }) => (
  <Main>
    <Header />
    {children}
    <StyledBackTop />
    <Footer />
  </Main>
);
export default Layout;
