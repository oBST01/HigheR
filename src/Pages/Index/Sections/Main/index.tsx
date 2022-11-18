import classes from "./Main.module.css";

import Menu from "../../../../Components/Menu";
import Particles from "../../../../Components/Particles";
import Section from "../../../../Components/Section";

import { FaGithub, FaRegEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Main = () => {
  return (
    <Section scrollFadePosition={0}>
      <div className={classes.background}>
        <Menu />
        <Particles />
        <h2 className={classes.uppertitle}>
          PENSE ALTO <br /> PENSE INFINITO
        </h2>
        <h1 className={classes.title}>HigheR</h1>
        <h3 className={classes.subtitle}>Tecnologia Futurista</h3>
        <div className={classes.iconsContainer}>
          <IconContext.Provider
            value={{
              size: "64px",
              style: { fill: "#231F20" },
            }}
          >
            <a className={classes.icon} target="_blank" href="https://github.com/oBST01/HigheR">
              <FaGithub />
            </a>
            <a className={classes.icon} target="_blank" href="mailto:contato@higher.com">
              <FaRegEnvelope />
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </Section>
  );
};

export default Main;
