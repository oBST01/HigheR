import classes from "./Creators.module.css";

import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

const Creators = () => {
  return (
    <Section scrollFadePosition={1600} style={{ background: "#E1F5FC" }}>
      <SectionTitle style={{ color: "black" }}>Idealizadores</SectionTitle>
      <div className={classes.namesContainer}>
        <div>
          <h3>Nomes</h3>
          <ul>
            <li>Pedro Henrique</li>
            <li>Rodolfo</li>
            <li>Flávia</li>
            <li>Isac</li>
          </ul>
        </div>
        <div>
          <h3>Contato (GitHub)</h3>
          <ul>
            <a target="_blank" href="https://github.com/rachzy">
              <li>Pedro Henrique</li>
            </a>
            <a target="_blank" href="https://github.com/oBST01">
              <li>Rodolfo</li>
            </a>
            <a target="_blank" href="https://github.com/httpsFlavia">
              <li>Flávia</li>
            </a>
            <a target="_blank" href="https://github.com/isac471">
              <li>Isac</li>
            </a>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Creators;
