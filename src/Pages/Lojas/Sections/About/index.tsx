import classes from "./About.module.css";

import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import BuildingImage from "../../../../assets/predio.png";

const About = () => {
  return (
    <Section scrollFadePosition={400}>
      <SectionTitle>Onde comprar</SectionTitle>
      <div className={classes.textImageContainer}>
        <p>
          Ainda não forncemos nossos produtos pelo meio de entregar, já que
          buscarmos a especialidade e a experiência durante a compra. Veja onde
          você pode encontrar nossas lojas.
        </p>
        <img  src={BuildingImage} alt="predio higheR" />
      </div>
    </Section>
  );
};

export default About;
