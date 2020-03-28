import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, TaglineH2} from "./Header.style";
// import logo from "../../../../assets/logoDarkBlue.svg";

const Header = () => {
  return (
    <StyledHeader>
      <LogoH1>Nomadic Digital</LogoH1>
      <TaglineH2>Awesome at<br /> Digital</TaglineH2>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;