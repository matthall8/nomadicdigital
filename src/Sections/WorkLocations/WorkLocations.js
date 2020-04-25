import React from "react";
import {WorkLocationsSection} from "./WorkLocations.style";
import {StyledH2} from "../../Components/H2/H2.style"
import mapImg from "../../../client/images/map.png";



const WorkLocations = () => {
  return (
    <WorkLocationsSection>
      <StyledH2>Where we've worked from</StyledH2>
      <img src={mapImg} alt="World Map" />
    </WorkLocationsSection>
  );
};

export default WorkLocations;