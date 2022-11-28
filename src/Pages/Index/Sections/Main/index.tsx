import classes from "./Main.module.css";

import Particles from "../../../../Components/Particles";
import Section from "../../../../Components/Section";

import { FaGithub, FaRegEnvelope } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import BackgroundSection from "../../../../Components/BackgroundSection";

const Main = () => {
  return (
    <Section scrollFadePosition={0}>
      <BackgroundSection backgroundImageName="background-index.png">
        <Particles />
        <h2>
          PENSE ALTO <br /> PENSE INFINITO
        </h2>
        <h1 style={{fontSize: "25vmin"}}>HigheR</h1>
        <h3>Tecnologia Futurista</h3>
        <div className={classes.iconsContainer}>
          <IconContext.Provider
            value={{
              size: "64px",
              style: { fill: "#231F20" },
            }}
          >
            <a
              className={classes.icon}
              target="_blank"
              href="https://github.com/oBST01/HigheR"
            >
              <FaGithub />
            </a>
            <a
              className={classes.icon}
              target="_blank"
              href="mailto:higher.techoffice@gmail.com"
            >
              <FaRegEnvelope />
            </a>
          </IconContext.Provider>
        </div>
      </BackgroundSection>
    </Section>
  );
};

export default Main;
