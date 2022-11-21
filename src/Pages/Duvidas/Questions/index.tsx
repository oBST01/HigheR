import "./Questions.css";
import Section from "../../../Components/Section";
import { Link } from "react-router-dom";

const Questions = () => {
  return (
    <Section scrollFadePosition={400}>
      <div className="wrap-collabsible">
        <input id="collapsible" className="toggle" type="checkbox" />
        <label htmlFor="collapsible" className="lbl-toggle">
          Qual o objetivo desta empresa?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>Buscar a inovação criando o impensável.</p>
          </div>
        </div>
      </div>
      <div className="wrap-collabsible">
        <input id="collapsible2" className="toggle" type="checkbox" />
        <label htmlFor="collapsible2" className="lbl-toggle">
          Essa empresa pretende possuir empresas parceiras?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Sim, clique <Link to="/contato">aqui</Link> e seja redirecionado para fazer uma parceria com
              nossa empresa.
            </p>
          </div>
        </div>
      </div>
      <div className="wrap-collabsible">
        <input id="collapsible3" className="toggle" type="checkbox" />
        <label htmlFor="collapsible3" className="lbl-toggle">
          Onde posso comprar os itens de sua empresa?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>Clique <Link to="/lojas">aqui</Link> e seja redirecionado para a página lojas.</p>
          </div>
        </div>
      </div>
      <div className="wrap-collabsible">
        <input id="collapsible4" className="toggle" type="checkbox" />
        <label htmlFor="collapsible4" className="lbl-toggle">
          A empresa pretende se expandir no futuro?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>
              Sim pretendemos expandir a empresa nacionalmente e
              internacionalmente.
            </p>
          </div>
        </div>
      </div>
      <div className="wrap-collabsible">
        <input id="collapsible5" className="toggle" type="checkbox" />
        <label htmlFor="collapsible5" className="lbl-toggle">
          Esta empresa trabalha com quais tipos de tecnologia?
        </label>
        <div className="collapsible-content">
          <div className="content-inner">
            <p>Com tecnologias futuristas, que jamais foram vistas.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Questions;
