import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import RelogioImage1 from "../../../../assets/relogio1.jpg";
import RelogioImage2 from "../../../../assets/relogio2.jpg";
import LuvaImage1 from "../../../../assets/luva1.jpg";
import LuvaImage2 from "../../../../assets/luva2.jpg";

import ProductItem from "../../../../Components/ProductItem";

const Products = () => {
  return (
    <Section scrollFadePosition={600} style={{ alignItems: "center" }}>
      <SectionTitle>Acessórios</SectionTitle>
      <ProductItem
      title="Relógio"
        images={[RelogioImage1, RelogioImage2]}
        imageAlt="relogio higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="left"
        description="Ja pensou em unir o vintage com a mais alta tecnologia da atualidade? 
        Nós sim,um instrumento do dia a dia com uma 
        aparência excêntrica e antiga com a mais alta 
        tecnologia e recursos inovadores."
      />
      <ProductItem
      title="Luva"
        images={[LuvaImage1, LuvaImage2]}
        imageAlt="luva higheR"
        alignment="right"
        description="Esta luva controla toda tecnologia existente, ela pode controlar algo mexendo os dedos ou até mesmo a voz!"
      />
    </Section>
  );
};

export default Products;
