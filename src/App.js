import React from "react";
import Header from "./Header/Header"
import Experience from "./Experience/Experience"
import Services from "./Services/Services"
import WorkLocations from "./WorkLocations/WorkLocations"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import StyledBody from "./Body/Body"
import {Helmet} from "react-helmet"


function App() {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nomadic Digital</title>
      </Helmet>
      <StyledBody />
      <Header />
      <Services />
      <Experience />
      <WorkLocations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
