import classes from "./OpenSeaButton.module.css";

import OpenSeaLogoLight from "../../assets/opensea-logo-light.png";
import OpenSeaLogoDark from "../../assets/opensea-logo-dark.png";
import { useState } from "react";

const OpenSeaButton = () => {
  const [currentButtonType, setCurrentButtonType] = useState<"light" | "dark">(
    "light"
  );

  const imageTypes = {
    light: OpenSeaLogoLight,
    dark: OpenSeaLogoDark,
  };

  return (
    <a href="https://opensea.io/assets" target="_blank">
      <button
        onMouseOver={() => setCurrentButtonType("dark")}
        onMouseLeave={() => setCurrentButtonType("light")}
        className={`${classes.openSea} ${classes[currentButtonType]}`}
      >
        <img src={imageTypes[currentButtonType]} alt="opensea logo" />
        <p>OpenSea</p>
      </button>
    </a>
  );
};

export default OpenSeaButton;
