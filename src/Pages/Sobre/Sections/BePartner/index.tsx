import { useNavigate } from "react-router-dom";

import classes from "./BePartner.module.css";

import Section from "../../../../Components/Section";

import { FaRegEnvelope } from "react-icons/fa";
import Button from "../../../../Components/Button";

const BePartner = () => {
  const navigate = useNavigate();
  return (
    <Section
      scrollFadePosition={800}
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
        <Button>
          <FaRegEnvelope size={30} />&nbsp; Seja Parceiro!
        </Button>
      </div>
    </Section>
  );
};

export default BePartner;
