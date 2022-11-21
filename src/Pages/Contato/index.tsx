import "./index.css";

import React from "react";
import Footer from "../../Components/Footer";
import Menu from "../../Components/Menu";
import Section from "../../Components/Section";
import Button from "../../Components/Button";

const Contato = () => {
  return (
    <React.Fragment>
      <Menu />
      <Section scrollFadePosition={0} style={{padding: "2vh"}}>
        <article id="forms">
          <div className="divForms">
            <h1>Formulário de Contato</h1>
            <form method="get" target="_self">
              <div className="div1">
                <label htmlFor="nome">Nome:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome completo"
                  required
                />
                <label htmlFor="nome">Email:</label>
                <input
                  type="email"
                  id="nome"
                  name="nome"
                  placeholder="Seu Email"
                  required
                />
              </div>
              <div className="div2">
                <label htmlFor="msg">Mensagem:</label>
                <textarea
                  name="msg"
                  id="nome"
                  placeholder="Mande sua mensagem 🚀"
                ></textarea>
                <div className="divButton">
                  <Button type="submit" onClick={() => {}}>Enviar</Button>
                </div>
              </div>
            </form>
          </div>
        </article>
      </Section>
      <Footer background="linear-gradient(180deg, #000000 23.37%, #460041 50.91%, #010043 100%)" />
    </React.Fragment>
  );
};

export default Contato;
