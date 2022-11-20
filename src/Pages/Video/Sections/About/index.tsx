import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import SaturnoImage from "../../../../assets/saturno.png";

const About = () => {
  return (
    <Section scrollFadePosition={400} style={{ background: "#390F37" }}>
      <div className={classes.img}>
        <img src={SaturnoImage} alt="saturno higheR" />
      </div>
      <div className={classes.text}>
        <h2>Veja o mundo de outra maneira</h2>
        <p>
          Nossas tecnologias proporcionam aos usuários experiências audio
          visuais nunca antes vistas
        </p>
      </div>
    </Section>
  );
};

export default About;
