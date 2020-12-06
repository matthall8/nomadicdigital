import React from "react";
import Header from "./Sections/Header/Header"
import Experience from "./Sections/Experience/Experience"
import Services from "./Sections/Services/Services"
import WorkLocations from "./Sections/WorkLocations/WorkLocations"
import Contact from "./Sections/Contact/Contact"
import Footer from "./Sections/Footer/Footer"
import StyledBody from "./Sections/Body/Body"
import {Helmet} from "react-helmet"
import Theme from "./Theme.js"

function App() {
  return (
    <Theme>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Muli:wght@500;700;800;900&display=swap" rel="stylesheet" /> 
      </Helmet>
      <StyledBody />
      <Header />
      <Services />
      <Experience />
      <WorkLocations />
      <Contact />
      <Footer />
    </Theme>
  );
}

export default App;
