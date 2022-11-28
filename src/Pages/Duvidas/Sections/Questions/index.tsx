import "./Questions.css";
import Section from "../../../../Components/Section";
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
            <p>
              Observamos que ao passar dos anos, foram surgindo na cabeça das
              pessoas, tecnologias que facilitariam suas vidas, tais inovações
              só foram representadas em filmes, até o surgimento da nossa
              empresa, que visa transformar essas ideias em realidade.
            </p>
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
              Essa empresa pretende possuir empresas parceiras? Sim, sabemos que
              entrar e produzir tecnologias tão diferenciadas não seria fácil,
              por isso estamos abertos para investidores ou empresas mais
              experientes no mercado que queriam inovar conosco. Clique{" "}
              <Link to="/contato">aqui</Link> para nos contatar.
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
            <p>
              Não possuímos entregas visando melhor contato com nossos
              compradores e clientes, caso queira saber onde estão nossas lojas,
              clique <Link to="/lojas">aqui</Link>.
            </p>
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
              Esta empresa trabalha com quais tipos de tecnologia? Temos nossos
              próprios pesquisadores da área que produzem e criam as
              tecnologias, também utilizamos de componentes já existentes no
              mercado para criar nossos produtos
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
            <p>Temos nossos próprios pesquisadores da área que produzem e criam as tecnologias, 
            também utilizamos de componentes já existentes no mercado para criar nossos produtos.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Questions;
