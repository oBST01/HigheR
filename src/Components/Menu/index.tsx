import { useState } from "react";
import classes from "./Menu.module.css";

import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

interface IProps {
  darkMode?: boolean;
}

const Menu: React.FC<IProps> = ({ darkMode }) => {
  const navigate = useNavigate();
  const [menuScrolled, setMenuScrolled] = useState(false);

  document.addEventListener("scroll", () => {
    const { scrollY } = window;
    if (scrollY < 100) return setMenuScrolled(false);
    setMenuScrolled(true);
  });
  return (
    <div
      className={`${classes.menu} ${darkMode && classes.dark} ${
        menuScrolled && classes.scrolled
      }`}
    >
      <ul>
        <Link to={"/duvidas"}>
          <li>DÚVIDAS</li>
        </Link>
        <Link to={"/contato"}>
          <li>CONTATO</li>
        </Link>
      </ul>
      <img
        onClick={() => {
          navigate("/");
        }}
        src={logo}
        className={classes.logo}
        alt="higheR logo"
      />
    </div>
  );
};

export default Menu;
