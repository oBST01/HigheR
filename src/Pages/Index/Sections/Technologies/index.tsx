import classes from "./Technologies.module.css";

import Section from "../../../../Components/Section";
import TechItem from "../../../../Components/TechItem";

import SpaceshipImage from "../../../../assets/spaceship.png";

import {
  FaBicycle,
  FaGamepad,
  FaImage,
  FaLandmark,
  FaTv,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Technologies = () => {
  return (
    <Section scrollFadePosition={1000}>
      <h2 style={{ fontWeight: "bold" }}>Nossas Tecnologias</h2>
      <div className={classes.techItemsContainer}>
        <IconContext.Provider value={{ size: "85" }}>
            <TechItem
              title="ACESSÓRIOS"
              description="bla bla bla"
              path="/acessorios"
              icon={<FaGamepad />}
            />
            <TechItem
              title="VÍDEO"
              description="bla bla bla"
              path="/video"
              icon={<FaTv />}
            />
          <img src={SpaceshipImage} width="300" height="300" />
            <TechItem
              title="MOBILIDADE"
              description="bla bla bla"
              path="/mobilidade"
              icon={<FaBicycle />}
            />
            <TechItem
              title="NFTS"
              description="bla bla bla"
              path="/acessorios"
              icon={<FaImage />}
            />
        </IconContext.Provider>
      </div>
    </Section>
  );
};

export default Technologies;
