import React from "react";
import styled from "styled-components";
import { Collapse } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
const { Panel } = Collapse;
const StyledCollaps = styled(Collapse)`
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  border: none;
  .ant-collapse-content {
    border: none;
  }
  .ant-collapse-header {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    color: #233b67 !important;
    /* span {
      padding-right: 20px;
    } */
  }
  .anticon-history > svg {
    width: 59px;
    height: 39px;
  }
  .mr-20 {
    margin-right: 20px;
  }
`;
const CollapsPanel = ({ children, className, header, ...props }) => {
  return (
    <StyledCollaps
      className={className}
      expandIconPosition="right"
      {...props}
      // onChange={callback}
      expandIcon={({ isActive }) =>
        isActive ? <MinusOutlined /> : <PlusOutlined />
      }
    >
      <Panel
        header={
          <div className="d-flex v-center">
            <span className="mr-20">{header.icon}</span>
            {header.tittle}
          </div>
        }
        key={header.tittle}
      >
        {/* <StyledTabel
            dataSource={dataSource}
            pagination={false}
            columns={columns}
          /> */}
        {children}
      </Panel>
    </StyledCollaps>
  );
};

export default CollapsPanel;
