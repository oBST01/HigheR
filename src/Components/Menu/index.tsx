import { useState } from "react";
import classes from "./Menu.module.css";

import logo from "../../assets/logo.png";

const Menu = () => {
  const [menuScrolled, setMenuScrolled] = useState(false);

  document.addEventListener("scroll", () => {
    const { scrollY } = window;
    if (scrollY < 100) return setMenuScrolled(false);
    setMenuScrolled(true);
  });
  return (
    <div className={`${classes.menu} ${menuScrolled && classes.scrolled}`}>
      <ul>
        <li>DÚVIDAS</li>
        <li>CONTATO</li>
      </ul>
      <img src={logo} className={classes.logo} alt="higheR logo" />
    </div>
  );
};

export default Menu;
