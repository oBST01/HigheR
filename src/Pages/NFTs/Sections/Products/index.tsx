import classes from "./Products.module.css";

import { FaArrowRight } from "react-icons/fa";
import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import Nft1 from "../../../../assets/nft1.png";
import Nft2 from "../../../../assets/nft2.png";
import Nft3 from "../../../../assets/nft3.png";
import Nft4 from "../../../../assets/nft4.png";
import { IconContext } from "react-icons/lib";
import OpenSeaButton from "../../../../Components/OpenSeaButton";

const Products = () => {
  return (
    <Section
      scrollFadePosition={800}
      style={{ background: "#1D256D", padding: "5vh" }}
    >
      <SectionTitle>Artes</SectionTitle>
      <div className={classes.nftsWrapper}>
        <IconContext.Provider
          value={{ size: "26", style: { fill: "#1D256D" } }}
        >
          <div className={classes.nft}>
            <img className={classes.nftLogo} src={Nft1} alt="nft higheR" />
            <OpenSeaButton />
          </div>
          <div className={classes.nft}>
            <img className={classes.nftLogo} src={Nft2} alt="nft higheR" />
            <OpenSeaButton />
          </div>
          <div className={classes.nft}>
            <img className={classes.nftLogo} src={Nft3} alt="nft higheR" />
            <OpenSeaButton />
          </div>
          <div className={classes.nft}>
            <img className={classes.nftLogo} src={Nft4} alt="nft higheR" />
            <OpenSeaButton />
          </div>
        </IconContext.Provider>
      </div>
    </Section>
  );
};

export default Products;
