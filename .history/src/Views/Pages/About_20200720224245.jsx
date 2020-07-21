import React from "react";
import { Grid } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import styled from "styled-components";
const Image = styled.img`
  width: 100%;
`;
const About = () => {
  return (
    <Grid>
      USama
      <Image src={AboutUs} alt="kuh" />
    </Grid>
  );
};

export default About;
