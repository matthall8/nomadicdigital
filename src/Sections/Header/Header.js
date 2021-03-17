import React from "react";
import whiteLogo from "../../../client/images/nomadic-logo-final-white.png";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, TaglineH2, NavigationArea, ContactCTA} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <NavigationArea>
        <LogoH1><img src={whiteLogo} alt="Nomadic Digital" height="40" /></LogoH1>
        <Navigation />
      </NavigationArea>
      <TaglineH2>We help businesses grow through creative digital strategies inspired by world travel </TaglineH2>
      <ContactCTA href="#contact">
        Say Hello!
      </ContactCTA>
    </StyledHeader>
  );
};

export default Header;