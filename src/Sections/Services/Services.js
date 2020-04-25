import React from "react";
import {ServicesSection, Strategy, Seo, Javascript, Paid} from "./Services.style";
import {StyledH2} from "../../Components/H2/H2.style"
// import logo from "../../../../assets/logoDarkBlue.svg";

const Services = () => {
  return (
    <ServicesSection>
    <StyledH2>Services</StyledH2>
      <Strategy><a href="#">Digital Strategy</a></Strategy>
      <Seo><a href="#">SEO</a></Seo>
      <Javascript><a href="#">Full Stack JavaScript</a></Javascript>
      <Paid><a href="#">Paid Search & Social</a></Paid>
    </ServicesSection>
  );
};

export default Services;