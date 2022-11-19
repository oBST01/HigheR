import classes from "./About.module.css";

import Section from '../../../../Components/Section'

import Netuno from "../ ../../../../../assets/netuno.png";

const About = () => {
  return (
    <Section scrollFadePosition={400} row={true} style={{padding: "2vh", background: "#040233" }}>
        <div className={classes.text}>
            <h2>Tecnologia enquanto se movimenta</h2>
            <p>Tornando a atividade de se mover cada vez mais moderna e tecnológica</p>
        </div>
        <div className={classes.img}>
            <img src={Netuno} alt="netuno" width={500} />
        </div>
    </Section>
  )
}

export default About