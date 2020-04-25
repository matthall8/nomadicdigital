import React from "react";
import {WorkLocationsSection} from "./WorkLocations.style";
import {StyledH2} from "../../Components/H2/H2.style"


const WorkLocations = () => {
  return (
    <WorkLocationsSection>
      <StyledH2>Where we've worked from</StyledH2>
      <img src="https://user-images.githubusercontent.com/9437789/77850286-4ba9b600-71c9-11ea-9356-98744bb468bf.png" alt="World Map" />
    </WorkLocationsSection>
  );
};

export default WorkLocations;