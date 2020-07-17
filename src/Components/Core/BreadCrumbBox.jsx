import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styled from "styled-components";
import { Typography, Section } from "../core";
import { MixStyle, theme } from "../styles";
import { LeftOutlined } from "@ant-design/icons";

const { buttonBg, textColor } = theme;

const StyledSection = styled(Section)`
  ${MixStyle.flexCenter};
  flex-flow: row wrap;
  justify-content: unset;
  padding: 10px;
  margin: 40px 0px;
  .round--anchor {
    ${MixStyle.flexCenter};
    margin-right: 15px;
    background: red;
    height: 33px;
    width: 33px;
    background: ${buttonBg.tertiary};
    border-radius: 27.5px;
    color: white;
  }
`;
const BreadCrumbBox = ({ className, tittle, route, children, ...props }) => {
  return (
    <StyledSection {...props} radius="10px" className={className}>
      {props.backlink ? (
        <Link to="" className="round--anchor">
          <LeftOutlined />
        </Link>
      ) : null}
      <Typography as="h4" noMargin weight="600" color={textColor.primary}>
        {tittle}
      </Typography>
      {children}
    </StyledSection>
  );
};
BreadCrumbBox.propTypes = {
  backlink: PropTypes.bool,
};
BreadCrumbBox.defaultProps = {
  backlink: true,
};
export default BreadCrumbBox;
