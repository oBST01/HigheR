import React from "react";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import Main from "./Main";
import Questions from "./Questions";

const Duvidas = () => {
  return (
    <React.Fragment>
      <Menu />
      <Main />
      <Questions />
      <Footer background="linear-gradient(180deg, #02060C 23.37%, #0C1F49 100%)" />
    </React.Fragment>
  );
};

export default Duvidas;
