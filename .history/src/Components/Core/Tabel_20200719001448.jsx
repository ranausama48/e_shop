import React from "react";
import { Table } from "antd";
import PropTypes from "prop-types";
import styled from "styled-components";
import { MixStyle, media, theme } from "../../styles";
const { colors, fontSizes } = theme;
const StyledTabel = styled(Table)`
  .ant-table-pagination.ant-pagination li {
    margin: 0px;
  }
  .ant-pagination-prev a {
    border-radius: 7px 0px 0px 7px;
  }
  .ant-pagination-next a {
    border-radius: 0px 7px 7px 0px;
  }
  .ant-pagination-prev li,
  .ant-pagination-prev a,
  .ant-pagination-next a,
  .ant-pagination-prev a:hover,
  .ant-pagination-next a:hover,
  .ant-pagination-prev a:focus,
  .ant-pagination-next a:focus {
    background: ${colors.Fiord};
    color: white;
    border: none;
  }
  .ant-pagination-next:focus .ant-pagination-item-link,
  .ant-pagination-prev:focus .ant-pagination-item-link {
    color: white;
  }
  .ant-pagination-item-active a {
    color: ${colors.Fiord};
  }
  .ant-pagination-item-active {
    display: inline-block !important;
    border: 1px solid ${colors.Fiord};
    color: ${colors.Fiord};
    border-radius: 0px;
  }
  .ant-pagination-item,
  .ant-pagination-jump-next,
  .ant-pagination-jump-prev {
    display: none;
  }
  .ant-pagination-options-size-changer.ant-select {
    margin-right: 0px;
  }
  .ant-table-pagination.ant-pagination {
    width: 100%;
    display: flex;
    padding: 0px 10px;
    .ant-pagination-options {
      margin-left: auto;
    }
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #989898;
    box-sizing: border-box;
    border-radius: 5px;
  }
  .ant-select,
  .ant-select-arrow {
    color: black;
    font-size: ${fontSizes.link};
    font-weight: 500;
    line-height: 24px;
  }
  .ant-select-arrow .anticon > svg {
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid black;
    width: 0px;
    height: 0px;
  }
  tr {
    cursor: pointer;
  }
  tr:nth-child(even) {
    background: #e9f2ff;
  }
  tr:nth-child(odd) {
    background: #f9f9ff;
  }
  table {
    width: auto;
  }
  .ant-table-container {
    ${media.minidesktop`overflow-x: scroll;`};
    /* overflow-x: scroll; */
  }
  thead > tr > th {
    width: 1006px;
    height: 50px;
    background: #233b67;
    padding: ${(props) => props.padding};
    ${MixStyle.Link}
    display:table-cell;
    color: white;
  }
  .ant-table-cell {
    text-align: center;
  }
  .ant-table-tbody > tr > td {
    ${MixStyle.TabelTd}
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    padding: 0px;
    /* width: 0px; */
    width: ${(props) => (props.nowidth ? "0px" : null)};
  }
  .profile--img--box {
    ${MixStyle.flexBetween}
  }
`;
const Tabel = ({ ...rest }) => {
  return (
    <StyledTabel
      {...rest}
      columns={rest.columns}
      dataSource={rest.data}
      pagination={rest.pagination}
    />
  );
};

Tabel.propTypes = {
  // pagination: PropTypes.bool,
  nowidth: PropTypes.bool,
};
Tabel.defaultProps = {
  nowidth: true,
  pagination: {
    pageSizeOptions: ["6", "10", "20", "30"],
    showSizeChanger: true,
    locale: { items_per_page: "" },
    defaultCurrent: 4,
    defaultPageSize: 6,
  },
};
export default Tabel;
