import classes from "./About.module.css";

import Section from "../../../../Components/Section";

import Netuno from "../ ../../../../../assets/netuno.png";

const About = () => {
  return (
    <Section
      scrollFadePosition={300}
      row={true}
      style={{ padding: "2vh", background: "#000115" }}
    >
      <div className={classes.text}>
        <h2>Tecnologia enquanto se movimenta</h2>
        <p>
          Deseja ter novas experiências no caminho para o trabalho ou para sua
          escola e deixar de lado a lentidão dos trânsitos? Com certeza temos os
          produtos certos para seu pensamento, podemos fornecer maior velocidade
          e eficiência para aqueles que ou estão atrasados ou apenas não curtem
          a parte de ter que se deslocar para outros locais.
        </p>
      </div>
      <div className={classes.img}>
        <img src={Netuno} alt="netuno" width={500} />
      </div>
    </Section>
  );
};

export default About;
