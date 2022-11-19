import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import MoonImage from "../../../../assets/lua.png";
import SectionTitle from "../../../../Components/SectionTitle";

const About = () => {
  return (
    <Section
      scrollFadePosition={400}
      style={{ background: "#1D256D" }}
    >
      <div className={classes.imgText}>
        <img src={MoonImage} alt="moon higheR" />
        <SectionTitle>Artes únicas e especiais</SectionTitle>
      </div>
      <div className={classes.text}>
        <p>
          Nossas artes foram produzidas por nossos prórprios designers e
          artistas, pensando especialmente neste novo mercado em ascensão
        </p>
      </div>
    </Section>
  );
};

export default About;
