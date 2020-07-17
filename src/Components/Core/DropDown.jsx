import React from "react";
import { Dropdown, Tag } from "antd";

const DropDown = ({ record, overlay, ...rest }) => {
  return (
    <div>
      <Dropdown
        {...rest}
        onClick={(record) => {
          return <div>{console.log("record", record)}</div>;
        }}
        overlay={overlay}
        trigger={["click"]}
      >
        {/* <a
          className="ant-dropdown-link"
          href="#"
          
        > */}
        <Tag onClick={(e) => e.stopPropagation()} color="blue" key="action">
          More
        </Tag>
        {/* </a> */}
      </Dropdown>
    </div>
  );
};
export default DropDown;
