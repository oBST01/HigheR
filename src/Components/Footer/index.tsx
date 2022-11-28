import { Link, useNavigate } from "react-router-dom";

import classes from "./Footer.module.css";

import Logo from "../../assets/logo.png";
import { FaEnvelope, FaInstagram, FaPhone, FaTwitter, FaWpforms } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

interface IProps {
  background?: string;
  darkMode?: boolean;
}

const Footer: React.FC<IProps> = ({ background, darkMode }) => {
  const navigate = useNavigate()
  return (
    <footer
      style={{ background: background }}
      className={`${classes.footer} ${darkMode && classes.dark}`}
    >
      <div className={classes.title}>
        <img
          onClick={() => {
            navigate("/");
          }}
          src={Logo}
          alt="higheR logo"
        />
        <p>HigheR</p>
      </div>
      <div>
        <div>
          <p>Sobre</p>
          <ul>
            <Link to={"/sobre"}>
              <li>Quem somos</li>
            </Link>
            <Link to={"/lojas"}>
              <li>Lojas</li>
            </Link>
            <Link to={"/duvidas"}>
              <li>Dúvidas</li>
            </Link>
          </ul>
        </div>
        <div>
          <p>Produtos</p>
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/acessorios"}>
              <li>Acessórios</li>
            </Link>
            <Link to={"/video"}>
              <li>Vídeo</li>
            </Link>
            <Link to={"/mobilidade"}>
              <li>Mobilidade</li>
            </Link>
            <Link to={"/nfts"}>
              <li>NFTs</li>
            </Link>
          </ul>
        </div>
        <div>
          <p style={{alignSelf: "center"}}>Suporte</p>
          <ul style={{display: "flex"}} className={classes.icons}>
            <IconContext.Provider value={{size: "28", style: {fill: darkMode ? "black": "white"}}}>
              <a href="mailto:higher.techoffice@higher.com" target={"_blank"}>
                <li><FaEnvelope /></li>
              </a>
              <a href="https://www.instagram.com/office_higher/" target={"_blank"}>
                <li><FaInstagram /></li>
              </a>
              <a href="https://twitter.com" target={"_blank"}>
                <li><FaTwitter /></li>
              </a>
              <Link to={"/contato"}>
                <li><FaWpforms /></li>
              </Link>
            </IconContext.Provider>
          </ul>
        </div>
      </div>
      <div>
        <h3>© HigheR 2022 - Todos os Direitos Reservados</h3>
      </div>
    </footer>
  );
};

export default Footer;
