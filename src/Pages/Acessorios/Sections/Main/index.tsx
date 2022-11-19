import BackgroundSection from "../../../../Components/BackgroundSection";
import Section from "../../../../Components/Section";

const Main = () => {
  return (
    <Section scrollFadePosition={0}>
      <BackgroundSection backgroundImageName="background-acessorios.jpg">
        <h2 style={{color: "black"}}>HigheR</h2>
        <h1 style={{color: "black", fontSize: "18vmin"}}>Acessórios</h1>
      </BackgroundSection>
    </Section>
  );
};

export default Main;
