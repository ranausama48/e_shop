import React from "react";
import { Grid } from "../../Components/Core";
import AboutUs from "../../assets/about-us.jpg";
import styled from "styled-components";
const About = () => {
  return (
    <Grid>
      <img src={AboutUs} alt="" />
    </Grid>
  );
};

export default About;
