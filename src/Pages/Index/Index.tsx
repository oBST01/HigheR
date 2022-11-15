import React from "react";
import classes from "./Index.module.css";

import Particles from "../../Components/Particles";
import Menu from "../../Components/Menu";
import DefaultContainer from "../../Components/DefaultContainer";

import { FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Index = () => {
  return (
    <div className={classes.background}>
      <Menu />
      <Particles />
      <h2>
        PENSE ALTO <br /> PENSE INFINITO
      </h2>
      <h1 className={classes.title}>HigheR</h1>
      <h3 className={classes.subtitle}>Tecnologia Futurista</h3>
      <DefaultContainer
        style={{ justifyContent: "space-between", width: "20%" }}
      >
        <IconContext.Provider value={{ size: "60px", style: {fill: "rgb(40, 40, 40)", margin: "1vh", zIndex: 99} }}>
          <FaGithub />
          <FaEnvelope />
        </IconContext.Provider>
      </DefaultContainer>
    </div>
  );
};

export default Index;
