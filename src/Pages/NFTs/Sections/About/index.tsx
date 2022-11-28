import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import MoonImage from "../../../../assets/lua.png";
import SectionTitle from "../../../../Components/SectionTitle";

const About = () => {
  return (
    <Section scrollFadePosition={300} style={{ background: "#1D256D" }}>
      <div className={classes.imgText}>
        <img src={MoonImage} alt="moon higheR" />
        <SectionTitle>Artes únicas e especiais</SectionTitle>
      </div>
      <div className={classes.text}>
        <p>
          Claro que não poderia faltar a parte comercial, também investimos nas
          nfts como uma forma de comércio do futuro. E para isso criamos nossas
          próprias artes, que foram produzidas por nossos designers e artistas,
          pensando especialmente neste novo mercado em ascensão. Vale ressaltar
          que várias outras artes estão sendo criadas, para poder abranger o
          máximo de pessoas que queiram entrar neste mundo com estilo
        </p>
      </div>
    </Section>
  );
};

export default About;
