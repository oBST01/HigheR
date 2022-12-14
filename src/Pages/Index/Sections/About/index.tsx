import { useNavigate } from "react-router-dom";

import classes from "./About.module.css";

import Button from "../../../../Components/Button";
import Section from "../../../../Components/Section";

import galaxyImage from "../../../../assets/galaxy.png";

const About = () => {
  const navigate = useNavigate();
  return (
    <Section
      scrollFadePosition={200}
      style={{ justifyContent: "space-around", padding: "5vh" }}
      row={true}
      reverse={true}
    >
      <div className={classes.container}>
        <img width={500} src={galaxyImage} alt="galaxy" />
        <Button
          style={{ marginTop: "-6vh" }}
          onClick={() => {
            navigate("/contato");
          }}
        >
          SAIBA MAIS
        </Button>
      </div>
      <div className={classes.container}>
        <h2 className={classes.segTitle}>
          "Você segue a evolução da tecnologia ou do universo?"
        </h2>
        <p className={classes.segDesc}>
          Nós seguimos os dois. Com nossas tecnologias, proporcionamos
          experiências capazes de te levar ao mais longe canto de todo o espaço,
          usando de novas inovações, criamos produtos que proporcionam
          experiências nunca antes vistas até então.
        </p>
      </div>
    </Section>
  );
};

export default About;
