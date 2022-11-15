import React, { useEffect, useRef, MutableRefObject } from "react";
import classes from "./Menu.module.css";

const Menu = () => {
    const logo = new URL("../../assets/logo.jpg", import.meta.url).href;

  return (
    <div className={classes.menu}>
      <ul>
        <li>DÚVIDAS</li>
        <li>CONTATO</li>
      </ul>
      <img
        src={logo}
        className={classes.logo}
        alt="higheR logo"
      />
    </div>
  );
};

export default Menu;
