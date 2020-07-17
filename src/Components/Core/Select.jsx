import React from "react";
import styled from "styled-components";
import { Select } from "antd";
import PropTypes from "prop-types";
import { MixStyle } from "../styles";
const { Option } = Select;

const StyledSelect = styled(Select)`
  width: ${(width) => width};
  .select__placeholder {
    ${MixStyle.flexCenter};
    svg {
      margin-right: 5px;
    }
  }
  svg {
    font-size: ${(props) => (props.type === "filter" ? "unset" : "25px")};
    color: ${(props) =>
      props.type === "filter" ? "rgba(0, 0, 0, 0.25)" : "#404e67"};
  }
  .ant-select-arrow {
    width: ${(props) => (props.type === "filter" ? "unset" : "25px")};
    top: ${(props) => (props.type === "filter" ? "50%" : "40%")};
  }
  .ant-select-selector {
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
    border-radius: ${({ radius }) => radius} !important;

    height: ${({ height }) => height} !important;
  }
  .ant-select-selection-placeholder,
  .ant-select-selection-item {
    display: flex;
    align-items: center;

    ${MixStyle.inputTextSize}
    opacity:unset;
  }
  .ant-select-selection-search-input {
    height: 100% !important;
  }
`;
const SelectCompo = ({
  children,
  prefixIcon,
  placeholder,
  onChange,
  defaultValue,
  Options,
  type,
  NewClothQualityOption,
  ...rest
}) => {
  return (
    <StyledSelect
      {...rest}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={
        <span className="select__placeholder">
          {prefixIcon ? prefixIcon : ""}
          {placeholder}
        </span>
      }
    >
      {type === "qualities"
        ? Options.map(
            ({ cloth_quality_id, pick, reed, type, warp, weft, width }) => (
              <Option key={cloth_quality_id} value={cloth_quality_id}>
                {reed +
                  "*" +
                  pick +
                  "/" +
                  warp +
                  "*" +
                  weft +
                  "=" +
                  width +
                  "″" +
                  type}
              </Option>
            )
          )
        : type === "yarnQualities"
        ? Options.map(({ id, count, con_size, brand, type }) => (
            <Option key={id} value={id}>
              {count + "/" + con_size + "/" + brand + "/" + type}
            </Option>
          ))
        : Options.map((value, index) => (
            <Option key={index} value={value}>
              {value}
            </Option>
          ))}
    </StyledSelect>
  );
};
SelectCompo.propTypes = {
  height: PropTypes.string,
  radius: PropTypes.string,
};
SelectCompo.defaultProps = {
  height: "50px",
  radius: "10px",
};

export default SelectCompo;
