import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import AstronautImage from "../../../../assets/astronauta.png";

const About = () => {
  return (
    <Section
      scrollFadePosition={300}
      row={true}
      style={{ background: "#E1F5FC", padding: "5vh" }}
      reverse={true}
    >
      <div className={classes.img}>
        <img src={AstronautImage} alt="astronaut higheR" />
      </div>
      <div className={classes.text}>
        <h2>
          Criando o impensável
        </h2>
        <p>
          A base de nossa fundação foi pensando em trazer ao mundo tecnologias
          nunca antes vistas, levando tecnologia de ponta a cada pessoa da
          Terra. Pensamos em criar tecnologias que apenas foram pensadas na
          ficção e que caso criadas na realidade, trariam diversos benficios à
          humanidade.
        </p>
      </div>
    </Section>
  );
};

export default About;
