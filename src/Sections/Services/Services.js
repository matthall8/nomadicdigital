import React from "react";
import {ServicesSection, Strategy, Seo, Javascript, Paid} from "./Services.style";
import {StyledH2} from "../../Components/H2/H2.style"
// import logo from "../../../../assets/logoDarkBlue.svg";

const Services = () => {
  return (
    <ServicesSection>
    <StyledH2>Services</StyledH2>
      <Strategy>Digital Strategy</Strategy>
      <Seo>SEO</Seo>
      <Javascript>Full Stack JavaScript</Javascript>
      <Paid>Paid Search & Social</Paid>
    </ServicesSection>
  );
};

export default Services;