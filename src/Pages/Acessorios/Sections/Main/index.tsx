import BackgroundSection from "../../../../Components/BackgroundSection";
import Section from "../../../../Components/Section";

const Main = () => {
  return (
    <Section scrollFadePosition={0}>
      <BackgroundSection backgroundImageName="background-acessorios.jpg" darkMode={false}>
        <h2>HigheR</h2>
        <h1>Acessórios</h1>
      </BackgroundSection>
    </Section>
  );
};

export default Main;
