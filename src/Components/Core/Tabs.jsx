import React from "react";
import { Tabs } from "antd";
import styled from "styled-components";

const StyledTabs = styled(Tabs)`
  background: #ffffff;
  border-radius: 10px;
  margin-top: 30px;
  padding-bottom: 20px;
  .ant-tabs-ink-bar {
    top: 2px;
    background-color: #55bd86 !important;
  }
  .ant-tabs-bar {
    border: none;
  }
  .ant-tabs-nav .ant-tabs-tab-active {
    color: #55bd86 !important;
  }
  .ant-tabs-nav .ant-tabs-tab {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.2px;
    color: #000000;
  }
  .ant-tabs-nav-scroll {
    padding: 5px 10px;
  }
`;
const TabsCompo = ({ children, ...props }) => {
  return (
    <StyledTabs {...props} defaultActiveKey="1" animated={false}>
      {children}
    </StyledTabs>
  );
};

export default TabsCompo;
