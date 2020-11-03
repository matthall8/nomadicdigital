import React from "react";
import Navigation from "../Navigation/Navigation"
import {StyledHeader, LogoH1, TaglineH2, NavigationArea, ContactCTA} from "./Header.style";

const Header = () => {
  return (
    <StyledHeader>
      <NavigationArea>
        <LogoH1>Nomadic Digital</LogoH1>
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