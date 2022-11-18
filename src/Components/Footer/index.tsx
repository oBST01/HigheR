import classes from "./Footer.module.css";

import Logo from "../../assets/logo.png";

interface IProps {
  background: string;
}

const Footer: React.FC<IProps> = ({background}) => {
  return (
    <footer style={{background: background}} className={classes.footer}>
      <div className={classes.title}>
        <img src={Logo} alt="higheR logo" />
        <p>HigheR</p>
      </div>
      <div>
        <div>
          <p>Sobre</p>
          <ul>
            <li>Quem somos</li>
            <li>Lojas</li>
            <li>Dúvidas</li>
          </ul>
        </div>
        <div>
          <p>Produtos</p>
          <ul>
            <li>Home</li>
            <li>Acessórios</li>
            <li>Vídeo</li>
            <li>Mobilidade</li>
            <li>NFTs</li>
          </ul>
        </div>
        <div>
          <p>Suporte</p>
          <ul>
            <li>Email</li>
            <li>Instagram</li>
            <li>Formulário</li>
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
