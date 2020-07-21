import React from "react";
import { Grid } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import styled from "styled-components";
const Image = styled.div`
  width: 100%;
`;
const About = () => {
  return (
    <Grid>
      <Image src={AboutUs} alt="" />
    </Grid>
  );
};

export default About;
