import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import SondaImg from "../../../../assets/sonda.png";

const About = () => {
  return (
    <Section
      row={true}
      scrollFadePosition={0}
      style={{
        paddingInline: "8vh",
        background: "linear-gradient(180deg, #DE3E32 27.02%, #000000 39.35%)",
      }}
    >
      <div className={classes.text}>
        <h2>Minimalistas, mas eficientes</h2>
        <p>
          Com nossa tecnologia, estes acessórios podem proporcionar experiências
          que antes eram presentes apenas em filmes.
        </p>
      </div>
      <div className={classes.img}>
        <img width={500} src={SondaImg} alt="sonda" />
      </div>
    </Section>
  );
};

export default About;
