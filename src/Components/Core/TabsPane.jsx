import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const TabsPane = ({ children, ...props }) => {
  return (
    <TabPane {...props} tab="Transactions" key="1">
      {children}
    </TabPane>
  );
};

export default TabsPane;
