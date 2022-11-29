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
      }}
    >
      <div className={classes.text}>
        <h2>Minimalistas, mas eficientes</h2>
        <p>
          Com estes acessórios podemos proporcionar experiências no dia-a-dia de
          todos os que as utilizam, facilitando e transformando ainda mais a
          rotina maçante e cansativa atualmente. Além de tudo, estes produtos
          foram pensado exclusivamente em que deseja chamar a atenção, onde eles
          se destacam por sua aparência exótica.
        </p>
      </div>
      <div className={classes.img}>
        <img width={500} src={SondaImg} alt="sonda" />
      </div>
    </Section>
  );
};

export default About;
