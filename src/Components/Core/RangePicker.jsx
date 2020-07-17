import React from "react";
import styled from "styled-components";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
const StyledRangePicker = styled(RangePicker)`
  background: #ffffff;
  border: 1px solid #d4d4d4;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  &&:hover,
  :focus {
    border-right-width: 1px;
  }
  &&input,
  input::placeholder,
  .ant-picker-range-separator {
    font-size: 15px;
    line-height: 20px;
    color: #979ba4;
  }
  .anticon {
    display: none;
  }
  .ant-picker-input > input {
    text-align: center;
  }
`;
const RangePickerCompo = ({ className }) => {
  return (
    <StyledRangePicker
      className={className}
      allowClear={false}
      separator="to"
      showTime={false}
      format="YYYY/MM/DD"
    />
  );
};

export default RangePickerCompo;
