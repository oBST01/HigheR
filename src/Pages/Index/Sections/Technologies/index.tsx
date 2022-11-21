import classes from "./Technologies.module.css";

import Section from "../../../../Components/Section";
import TechItem from "../../../../Components/TechItem";

import SpaceshipImage from "../../../../assets/spaceship.png";

import { FaBicycle, FaGamepad, FaImage, FaTv } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import SectionTitle from "../../../../Components/SectionTitle";

const Technologies = () => {
  return (
    <Section scrollFadePosition={1000}>
      <SectionTitle>Nossas Tecnologias</SectionTitle>
      <div className={classes.techItemsContainer}>
        <IconContext.Provider value={{ size: "85" }}>
          <div className={classes.techItemBox}>
            <TechItem
              title="ACESSÓRIOS"
              description="Nossa tecnologia no seu dia-a-dia"
              path="/HigheR/acessorios"
              icon={<FaGamepad />}
            />
            <TechItem
              title="VÍDEO"
              description="Novas maneiras de visualizar a vida"
              path="/HigheR/video"
              icon={<FaTv />}
            />
          </div>
          <div className={`${classes.techItemBox} ${classes.spaceship}`}>
            <img src={SpaceshipImage} width="200" height="200" />
          </div>
          <div className={classes.techItemBox}>
            <TechItem
              title="MOBILIDADE"
              description="Tecnologias que te levará a onde você quiser"
              path="/HigheR/mobilidade"
              icon={<FaBicycle />}
            />
            <TechItem
              title="NFTS"
              description="Uma nova forma de investimento e comércio com nossas artes."
              path="/HigheR/nfts"
              icon={<FaImage />}
            />
          </div>
        </IconContext.Provider>
      </div>
    </Section>
  );
};

export default Technologies;
