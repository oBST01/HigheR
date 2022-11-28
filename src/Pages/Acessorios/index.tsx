import React from "react";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import About from "./Sections/About";
import Main from "./Sections/Main";
import Products from "./Sections/Products";

const Acessorios = () => {
  return (
    <React.Fragment>
      <Menu />
      <Main />
      <About />
      <Products />
      <Footer />
    </React.Fragment>
  );
};

export default Acessorios;
