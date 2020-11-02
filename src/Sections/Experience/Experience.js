import React from "react";
import {ExperienceSection, ExperienceLogos, Logo} from "./Experience.style";
import {StyledH2} from "../../Components/H2/H2.style"
import avivaLogo from "../../../client/images/aviva.png";
import gotLogo from "../../../client/images/game-of-thrones.png";
import michelinLogo from "../../../client/images/michelin.png";
import playstationLogo from "../../../client/images/playstation.png";
import skyLogo from "../../../client/images/sky.png";
import unileverLogo from "../../../client/images/unilever.png";

const Experience = () => {
  return (
    <ExperienceSection>
      <StyledH2>Experience</StyledH2>
      <ExperienceLogos>
        <Logo><img src={michelinLogo} alt="Michelin" /></Logo>
        <Logo><img src={avivaLogo} alt="Aviva" /></Logo>
        <Logo><img src={gotLogo} alt="Game of Thrones" /></Logo>
        <Logo><img src={skyLogo} alt="Sky" /></Logo>
        <Logo><img src={unileverLogo} alt="Unilever" /></Logo>
        <Logo><img src={playstationLogo} alt="Playstation" /></Logo>
      </ExperienceLogos>
    </ExperienceSection>
  );
};

export default Experience;