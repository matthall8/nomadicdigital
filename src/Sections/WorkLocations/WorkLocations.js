import React from "react";
import {WorkLocationsSection} from "./WorkLocations.style";
import {StyledH2} from "../../Components/H2/H2.style"


const WorkLocations = () => {
  return (
    <WorkLocationsSection>
      <StyledH2>Where we've worked from</StyledH2>
      <img src="https://user-images.githubusercontent.com/9437789/80276671-20d85200-86e2-11ea-9e45-c21490da4b3f.png" alt="World Map" />
    </WorkLocationsSection>
  );
};

export default WorkLocations;