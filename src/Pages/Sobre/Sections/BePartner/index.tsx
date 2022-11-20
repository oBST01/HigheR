import classes from "./BePartner.module.css";

import Section from "../../../../Components/Section";

import { FaRegEnvelope } from "react-icons/fa";

const BePartner = () => {
  return (
    <Section
      scrollFadePosition={1000}
      row={true}
      style={{ background: "#E1F5FC" }}
    >
      <div className={classes.textContainer}>
        <div className={classes.textBox}>
          <h2>Buscando inovação</h2>
          <p>
            Produzimos toda nossa tecnologia a partir de capital próprio mas
            buscamos por empresas e pessoas que possam se juntar a nós e que
            estejam dispostas a buscar um mundo mais acessível.
          </p>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button>
          <FaRegEnvelope size={30} />&nbsp; Seja Parceiro!
        </button>
      </div>
    </Section>
  );
};

export default BePartner;
