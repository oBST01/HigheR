import classes from "./About.module.css";

import Button from "../../../../Components/Button";
import Section from "../../../../Components/Section";

import galaxyImage from "../../../../assets/galaxy.png";

import { FaRegEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <Section
      scrollFadePosition={300}
      style={{ justifyContent: "space-around", padding: "5vh" }}
      row={true}
      reverse={true}
    >
      <div className={classes.container}>
        <img width={500} src={galaxyImage} alt="galaxy" />
        <Button style={{marginTop: "-6vh"}} onClick={() => {}}>
          <FaRegEnvelope size={20} style={{ margin: "1vh" }} /> FALE CONOSCO
        </Button>
      </div>
      <div className={classes.container}>
        <h2 className={classes.segTitle}>
          "Você segue a evolução da tecnologia ou do universo?"
        </h2>
        <p className={classes.segDesc}>
          Nós seguimos os dois. Com nossas tecnologias, proporcionamos
          experiências capazes de te levar ao mais longe canto de todo o espaço
        </p>
      </div>
    </Section>
  );
};

export default About;
