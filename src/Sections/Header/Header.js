import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, TaglineH2} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <LogoH1>Nomadic Digital</LogoH1>
      <TaglineH2>We help businesses grow through creative digital strategies inspired by world travel </TaglineH2>
      <Navigation />
    </StyledHeader>
  );
};

export default Header;