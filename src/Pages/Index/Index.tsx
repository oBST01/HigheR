import React from "react";
import Footer from "../../Components/Footer";
import About from "./Sections/About";

import Main from "./Sections/Main";
import Technologies from "./Sections/Technologies";

const Index = () => {
  return (
    <React.Fragment key={"Page sections"}>
      <Main />
      <About />
      <Technologies />
      <Footer background="linear-gradient(180deg, #000000 23.37%, #460041 50.91%, #010043 100%)" />
    </React.Fragment>
  );
};

export default Index;
