import React from "react";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import Main from "./Sections/Main";
import Questions from "./Sections/Questions";

const Duvidas = () => {
  return (
    <React.Fragment>
      <Menu />
      <Main />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default Duvidas;
