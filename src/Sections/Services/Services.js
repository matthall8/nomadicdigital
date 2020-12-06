import React from "react";
import {ServicesSection, ServiceBoxes, Strategy, Seo, Javascript, Paid} from "./Services.style";
import {StyledH2} from "../../Components/H2/H2.style"

const Services = () => {
  return (
    <ServicesSection id="services">
      <StyledH2>Services</StyledH2>
      <ServiceBoxes>
        <Strategy>Digital Strategy</Strategy>
        <Seo>SEO</Seo>
        <Javascript>Full Stack JavaScript</Javascript>
        <Paid>Paid Search & Social</Paid>
      </ServiceBoxes>
    </ServicesSection>
  );
};

export default Services;