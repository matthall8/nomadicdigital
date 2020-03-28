import React from "react";
import {ServicesSection, ServicesH2, Strategy, Seo, Javascript, Paid} from "./Services.style";
// import logo from "../../../../assets/logoDarkBlue.svg";

const Services = () => {
  return (
    <ServicesSection>
    <ServicesH2>Services</ServicesH2>
      <Strategy>Digital Strategy</Strategy>
      <Seo>SEO</Seo>
      <Javascript>Full Stack JavaScript</Javascript>
      <Paid>Paid Search & Social</Paid>
    </ServicesSection>
  );
};

export default Services;