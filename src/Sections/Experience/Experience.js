import React from "react";
import {ExperienceSection} from "./Experience.style";
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
      <img src={michelinLogo} alt="Michelin" />
      <img src={avivaLogo} alt="Aviva" />
      <img src={gotLogo} alt="Game of Thrones" />
      <img src={skyLogo} alt="Sky" />
      <img src={unileverLogo} alt="Unilever" />
      <img src={playstationLogo} alt="Playstation" />
    </ExperienceSection>
  );
};

export default Experience;