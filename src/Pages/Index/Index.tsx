import React from "react";
import About from "./Sections/About";

import Main from "./Sections/Main";
import Technologies from "./Sections/Technologies";

const Index = () => {
  return (
    <React.Fragment key={"Page sections"}>
      <Main />
      <About />
      <Technologies />
    </React.Fragment>
  );
};

export default Index;
