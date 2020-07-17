import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Typography } from "../core";
import Svg from "../assets/icons/icon";
import { MixStyle, theme } from "../styles";
const { colors, boxShadow } = theme;
const StyledLink = styled(Link)`
  padding: 3px 20px;
  border: 2px solid ${colors.purpel};
  border-radius: 20px;
`;
const Box = styled.div`
  padding: 20px;
  background: ${colors.white};
  border: 1px solid ${colors.gray};
  box-sizing: border-box;
  box-shadow: ${boxShadow.shadowfirst};
  border-radius: 20px;
  width: 172px;
  min-height: 120px;
  ${MixStyle.flexCenter}
  margin: 25px auto;
  .box--svg {
    width: 40px;
    height: 40px;
    background: ${colors.soilColor};
    border-radius: 100%;
    ${MixStyle.flexCenter}
    margin: auto;
  }
`;
const ActionCard = ({
  className,
  svgWidth,
  svgHeight,
  tittle,
  svg,
  route,
  ...props
}) => {
  return (
    <Box>
      <div className="text-center">
        <div className="box--svg">
          <Svg
            width={svgWidth}
            height={svgHeight}
            color={colors.purpel}
            icon={svg}
          />
        </div>
        <div className="mt-10">
          <Typography
            text={tittle}
            as="p"
            noMargin
            weight="500"
            color="#233B67"
            align="center"
          />
        </div>
        <div className="mt-10">
          <StyledLink to={route}>
            <Typography
              as="span"
              fontSize="12px"
              lineHeight="17px"
              weight="500"
              color="#333333"
              text="Action"
            />
          </StyledLink>
        </div>
      </div>
    </Box>
  );
};
ActionCard.propTypes = {
  svgWidth: PropTypes.number,
  svgHeight: PropTypes.number,
  svg: PropTypes.string.isRequired,
  tittle: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default ActionCard;
