import React from "react";
import Navigation from "../Navigation/Navigation"
import {LogoH1, StyledHeader} from "./Header.style";
// import logo from "../../../../assets/logoDarkBlue.svg";

const Header = () => {
  return (
    <StyledHeader>
      <LogoH1>Nomadic Digital</LogoH1>
      Awesome at Digital
      <Navigation />
    </StyledHeader>
  );
};

export default Header;