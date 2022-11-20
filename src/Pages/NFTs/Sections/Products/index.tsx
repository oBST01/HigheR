import classes from "./Products.module.css";

import { FaArrowRight } from "react-icons/fa";
import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import Nft1 from "../../../../assets/nft1.png";
import Nft2 from "../../../../assets/nft2.png";
import Nft3 from "../../../../assets/nft3.png";
import Nft4 from "../../../../assets/nft4.png";
import { IconContext } from "react-icons/lib";

const Products = () => {
  return (
    <Section scrollFadePosition={1200} style={{ background: "#1D256D", padding: "5vh" }}>
      <SectionTitle>Artes</SectionTitle>
      <div className={classes.nftsWrapper}>
        <IconContext.Provider
          value={{ size: "26", style: { fill: "#1D256D" } }}
        >
          <div className={classes.nft}>
            <img src={Nft1} alt="nft higheR" />
            <button>
              Open Sea &nbsp;
              <FaArrowRight />
            </button>
          </div>
          <div className={classes.nft}>
            <img src={Nft2} alt="nft higheR" />
            <button>
              Open Sea &nbsp;
              <FaArrowRight />
            </button>
          </div>
          <div className={classes.nft}>
            <img src={Nft3} alt="nft higheR" />
            <button>
              Open Sea &nbsp;
              <FaArrowRight />
            </button>
          </div>
          <div className={classes.nft}>
            <img src={Nft4} alt="nft higheR" />
            <button>
              Open Sea <FaArrowRight />
            </button>
          </div>
        </IconContext.Provider>
      </div>
    </Section>
  );
};

export default Products;
