import React from "react";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";

import Main from "./Sections/Main";
import About from "./Sections/About";
import Products from "./Sections/Products";

const Video = () => {
  return (
    <React.Fragment>
      <Menu darkMode={true} />
      <Main />
      <div style={{ background: "#390F37" }}>
        <About />
        <Products />
      </div>
      <Footer background="linear-gradient(180deg, #390F37 23.37%, #000000 100%)" />
    </React.Fragment>
  );
};

export default Video;
