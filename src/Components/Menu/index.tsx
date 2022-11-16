import React, { useEffect, useRef, MutableRefObject } from "react";
import classes from "./Menu.module.css";

import logo from "../../assets/logo.png";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <ul>
        <li>DÚVIDAS</li>
        <li>CONTATO</li>
      </ul>
      <img src={logo} className={classes.logo} alt="higheR logo" />
    </div>
  );
};

export default Menu;
