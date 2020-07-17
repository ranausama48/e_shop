import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Row, Col } from "antd";
import { Typography, ActionCard } from "../core";
import { theme, MixStyle } from "../styles";
const { colors } = theme;
const Container = styled.div`
  display: flex;
  margin: 20px 0px;
  .container--left {
    background: ${colors.darkBlue};
    max-width: 110px;
    padding: 25px;
    border-radius: 20px 0px 0px 20px;
    min-height: 100%;
    ${MixStyle.flexCenter}
    flex-flow: column;
  }
  .container--right {
    background: ${colors.white};
    width: 984px;
    border-radius: 0px 20px 20px 0px;
    min-height: 100%;
    ${MixStyle.flexBetween};
    flex-flow: row wrap;
  }
`;

const ModuleCards = ({ icon, tittle, data, className, ...props }) => {
  return (
    <Container className={className}>
      <div className="container--left">
        {icon}
        <Typography text={tittle} as="h4" weight="600" color="white" />
      </div>
      <div className="container--right">
        <Row type="flex" justify="flex-start" className="w-100">
          {data.map((Items, key) => {
            return (
              <Col md={8} sm={12} xs={24} key={key}>
                <ActionCard
                  tittle={Items.tittle}
                  route={Items.route}
                  svg={Items.svg}
                  svgWidth={Items.svgWidth}
                  svgHeight={Items.svgHeight}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};
ModuleCards.propTypes = {
  icon: PropTypes.element.isRequired,
  tittle: PropTypes.string.isRequired,
  data: PropTypes.array,
};

export default ModuleCards;
