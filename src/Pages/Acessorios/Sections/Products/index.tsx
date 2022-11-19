import classes from "./Products.module.css";

import Section from "../../../../Components/Section";

import RelogioImage from "../../../../assets/relogio1.jpg";
import LuvaImage from "../../../../assets/luva1.jpg";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  return (
    <Section scrollFadePosition={800} style={{ alignItems: "normal" }}>
      <h1 className={classes.title}>Acessórios</h1>
      <div className={classes.productFlexContainer}>
        <div>
          <img style={{maxWidth: "90vmin"}} src={RelogioImage} alt="relogio higheR" />
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className={`${classes.productFlexContainer} ${classes.right}`}>
      <div>
          <img src={LuvaImage} alt="luva higheR" />
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Products;
