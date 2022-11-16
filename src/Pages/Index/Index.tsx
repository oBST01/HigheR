import React from "react";
import About from "./Sections/About";

import Main from "./Sections/Main";

const Index = () => {
  return (
    <React.Fragment key={"Page sections"}>
      <Main />
      <About />
    </React.Fragment>
  );
};

export default Index;
