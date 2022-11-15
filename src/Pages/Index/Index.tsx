import React from "react";
import classes from "./Index.module.css";

import Particles from "../../Components/Particles";
import Menu from "../../Components/Menu";
import DefaultContainer from "../../Components/DefaultContainer";

import { FaGithub, FaEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Section from "../../Components/Section";

const Index = () => {
  return (
    <React.Fragment>
      <Section scrollFadePosition={0}>
        <div className={classes.background}>
          <Menu />
          <Particles />
          <h2 className={classes.uppertitle}>
            PENSE ALTO <br /> PENSE INFINITO
          </h2>
          <h1 className={classes.title}>HigheR</h1>
          <h3 className={classes.subtitle}>Tecnologia Futurista</h3>
          <DefaultContainer
            style={{ justifyContent: "space-between", width: "200px" }}
          >
            <IconContext.Provider
              value={{
                size: "60px",
                style: { fill: "rgb(40, 40, 40)", margin: "1vh", zIndex: 99 },
              }}
            >
              <FaGithub />
              <FaEnvelope />
            </IconContext.Provider>
          </DefaultContainer>
        </div>
      </Section>
      <Section scrollFadePosition={800}>

      </Section>
    </React.Fragment>
  );
};

export default Index;
