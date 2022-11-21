import React from "react";

import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import About from "./Sections/About";
import BePartner from "./Sections/BePartner";
import Creators from "./Sections/Creators";
import Main from "./Sections/Main";

const Sobre = () => {
  return (
    <React.Fragment>
      <Menu darkMode={true} />
      <Main />
      <div style={{background: "#E1F5FC"}}>
        <About />
        <BePartner />
        <Creators />
      </div>
      <Footer
        darkMode={true}
        background="linear-gradient(180deg, #E1F5FC 23.37%, #B8E9F0 100%)"
      />
    </React.Fragment>
  );
};

export default Sobre;
