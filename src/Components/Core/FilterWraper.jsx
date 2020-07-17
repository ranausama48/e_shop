import React from "react";
import { Typography, Select, RangePicker } from "../core";
import Svg from "../assets/icons/icon";
import PropTypes from "prop-types";
import { MixStyle, media } from "../styles";
import styled from "styled-components";
const Container = styled.div`
  .mr-10 {
    margin-right: 10px;
  }
`;
const StyledSvg = styled(Svg)`
  margin-right: ${({ icon }) => (icon === "filter" ? "15px" : "")};
`;
const Wraper = styled.div`
  ${MixStyle.flexBetween};
  ${media.minidesktop`display:block;`};
  padding: 20px;
  background: ${({ bg }) => bg};
  border-radius: ${({ radius }) => radius};

  .wraper--display {
    display: contents;
    flex-flow: row wrap;
    ${media.minidesktop`${MixStyle.flexBetween}`};
    > div {
      ${media.tablet`display:block;`};
      ${media.mobile`width:100%;`}
      > h6 {
        ${media.tablet`margin-bottom:5px !important;`};
      }
    }
  }
`;
const FilterOption = ["All", "Paid", "Completed"];
const FilterWraper = ({
  children,
  className,
  dropDown,
  bg,
  range,
  radius,
  ...props
}) => {
  return (
    <Container {...props} className={className}>
      {console.log(props)}
      <Wraper dropDown={dropDown} bg={bg} range={range} radius={radius}>
        <div className="d-flex v-center">
          <StyledSvg icon="filter" width={27} height={12} color="#FF5687" />
          <Typography as="h6" noMargin weight="500" text="Filters" />
        </div>

        <div className="wraper--display">
          {dropDown ? (
            <div className="d-flex v-center">
              <Typography
                as="h6"
                color="#FF5687"
                noMargin
                className="mr-10"
                weight="500"
                text="Select Status:"
              />
              <Select
                type="filter"
                height="32px"
                width="120px"
                radius="7px"
                defaultValue={FilterOption[0]}
                Options={FilterOption}
              />
            </div>
          ) : (
            ""
          )}

          {range ? (
            <div className="d-flex v-center">
              <Typography
                as="h6"
                color="#FF5687"
                weight="500"
                className="mr-10"
                noMargin
                text="Select Date:"
              />
              <RangePicker />
            </div>
          ) : (
            ""
          )}
        </div>
      </Wraper>
      <div>{children}</div>
    </Container>
  );
};
FilterWraper.propTypes = {
  dropDown: PropTypes.bool,
  range: PropTypes.bool,
};
FilterWraper.defaultProps = {
  dropDown: true,
  range: true,
};
export default FilterWraper;
