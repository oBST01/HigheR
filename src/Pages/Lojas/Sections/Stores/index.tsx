import classes from "./Stores.module.css";

import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import Button from "../../../../Components/Button";
import { FaLocationArrow } from "react-icons/fa";

import SPStore from "../../../../assets/loja-sp.jpg";
import CuritibaStore from "../../../../assets/loja-curitiba.jpg";
import BCStore from "../../../../assets/loja-bc.jpg";

const Stores = () => {
  return (
    <Section scrollFadePosition={600}>
      <SectionTitle>Lojas</SectionTitle>
      <div className={classes.store}>
        <div style={{ flex: 2 }}>
          <h3>São Paulo - SP</h3>
          <p>
            Av. Brg. Faria Lima, 2277 - Jardim Paulistano, São Paulo - SP,
            01452-000
          </p>
          <Button
            onClick={() => {
              window.open("https://www.google.com/maps/place/Av.+Brg.+Faria+Lima,+2277+-+Jardim+Paulistano,+São+Paulo+-+SP,+01452-000/@-23.5767193,-46.6866258,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce576dbe161b5f:0x2126c3edda36f725!8m2!3d-23.5767193!4d-46.6866258");
            }}
          >
            <FaLocationArrow /> &nbsp;COMO CHEGAR
          </Button>
        </div>
        <div>
          <img src={SPStore} alt="predio faria lima" />
        </div>
      </div>
      <div className={classes.store}>
        <div style={{ flex: 2 }}>
          <h3>Curitiba - PR</h3>
          <p>Alameda Dom Pedro II, 818 - Batel, Curitiba - PR, 80420-060</p>
          <Button
            onClick={() => {
              window.open("https://www.google.com/maps/place/Alameda+Dom+Pedro+II,+818+-+Batel,+Curitiba+-+PR,+80420-060/@-25.4407898,-49.2904167,17z/data=!3m1!4b1!4m5!3m4!1s0x94dce38be6e77bb3:0x1f6c62ec6f6ddf6!8m2!3d-25.4407898!4d-49.2882227");
            }}
          >
            <FaLocationArrow /> &nbsp;COMO CHEGAR
          </Button>
        </div>
        <div>
          <img src={CuritibaStore} alt="predio batel curitiba" />
        </div>
      </div>
      <div className={classes.store}>
        <div style={{ flex: 2 }}>
          <h3>Balneário Camboriú - SC</h3>
          <p>
            Av. Atlântica, 5382 - Centro, Balneário Camboriú - SC, 88330-130
          </p>
          <Button
            onClick={() => {
              window.open("https://www.google.com/maps/place/Condomínio+Edifício+Ivo+Agostinho+Roveda+-+Av.+Atlântica,+5382+-+Barra+Sul,+Balneário+Camboriú+-+SC,+88330-130/@-27.0063002,-48.6102724,17z/data=!3m1!4b1!4m5!3m4!1s0x94d8b65a689deb3f:0x4ae2130208ec7c6f!8m2!3d-27.0063002!4d-48.6080784");
            }}
          >
            <FaLocationArrow /> &nbsp;COMO CHEGAR
          </Button>
        </div>
        <div>
          <img src={BCStore} alt="predio batel curitiba" />
        </div>
      </div>
    </Section>
  );
};

export default Stores;
