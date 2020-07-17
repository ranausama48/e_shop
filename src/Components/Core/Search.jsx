import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";

const { Search } = Input;
const StyledSearch = styled(Search)`
  .ant-input,
  .ant-input:hover,
  .ant-input:focus {
    border-color: #233b67;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: none;
    ::placeholder {
      font-size: 16px;
      line-height: 24px;
      color: #ababab;
    }
  }
  .ant-btn-primary {
    border: none;
  }
  button,
  button:hover,
  button:active,
  button:focus {
    background: #233b67;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;
const SearchCompo = ({ placeholder, ...props }) => {
  return (
    <StyledSearch
      {...props}
      //   placeholder={placeholder}
      placeholder={placeholder}
      onSearch={(value) => console.log(value)}
      enterButton
    />
  );
};
SearchCompo.propTypes = {
  placeholder: PropTypes.string,
};
SearchCompo.defaultProps = {
  placeholder: "Search",
};

export default SearchCompo;
