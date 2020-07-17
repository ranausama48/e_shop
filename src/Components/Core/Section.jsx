import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Section = styled.div`
  background: ${({ bg }) => bg};
  border-radius: 10px;
  box-shadow: ${({ shadow }) => shadow};
  border-radius: ${({ radius }) => radius};
  padding: ${({ padding }) => padding};
  max-width: ${({ maxwidth }) => maxwidth};
  min-height: ${({ minheight }) => minheight};
`;
const SectionCompo = ({ children, className, ...rest }) => {
  return (
    <Section className={className} {...rest}>
      {children}
    </Section>
  );
};
SectionCompo.propTypes = {
  bg: PropTypes.string,
  radius: PropTypes.string,
  shadow: PropTypes.string,
  padding: PropTypes.string,
  maxwidth: PropTypes.string,
  minheight: PropTypes.string,
};
SectionCompo.defaultProps = {
  bg: "white",
  radius: "10px",
};
export default SectionCompo;
