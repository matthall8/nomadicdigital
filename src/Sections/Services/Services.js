import React from "react";
import {ServicesSection, ServiceBoxes, Strategy, Seo, Javascript, Paid} from "./Services.style";
import {StyledH2} from "../../Components/H2/H2.style"

const Services = () => {
  return (
    <ServicesSection>
      <StyledH2>Services</StyledH2>
      <ServiceBoxes>
        <Strategy><a href="#">Digital Strategy</a></Strategy>
        <Seo><a href="#">SEO</a></Seo>
        <Javascript><a href="#">Full Stack JavaScript</a></Javascript>
        <Paid><a href="#">Paid Search & Social</a></Paid>
      </ServiceBoxes>
    </ServicesSection>
  );
};

export default Services;