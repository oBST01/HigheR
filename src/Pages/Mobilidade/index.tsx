import React from "react";

import Menu from "../../Components/Menu";
import Footer from "../../Components/Footer";

import Main from "./Sections/Main";
import About from "./Sections/About";
import Products from "./Sections/Products";

const Mobilidade = () => {
  return (
    <React.Fragment>
      <Menu />
      <Main />
      <div style={{ background: "#040233" }}>
        <About />
        <Products />
      </div>
      <Footer background="linear-gradient(180deg, #040233 23.37%, #000000 100%)" />
    </React.Fragment>
  );
};

export default Mobilidade;
