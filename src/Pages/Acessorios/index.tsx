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
      <Footer background="linear-gradient(180deg, #000000 23.37%, #DE3E32 100%)" />
    </React.Fragment>
  );
};

export default Acessorios;
