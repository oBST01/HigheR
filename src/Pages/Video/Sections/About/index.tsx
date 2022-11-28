import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import SaturnoImage from "../../../../assets/saturno.png";

const About = () => {
  return (
    <Section scrollFadePosition={300} style={{ background: "#390F37" }}>
      <div className={classes.img}>
        <img src={SaturnoImage} alt="saturno higheR" />
      </div>
      <div className={classes.text}>
        <h2>Veja o mundo de outra maneira</h2>
        <p>
          Nossas tecnologias proporcionam aos usuários experiências áudio
          visuais nunca antes vistas, causando efeitos ultra reais nos usuários.
          Além do mais, os dispositivos também trazem uma experiência de usuário
          visualmente atrativa e satisfatória, melhorando ainda mais a
          experiência de maratonar sua série ou do seu trabalho
        </p>
      </div>
    </Section>
  );
};

export default About;
