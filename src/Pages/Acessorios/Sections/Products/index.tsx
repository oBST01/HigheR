import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import RelogioImage1 from "../../../../assets/relogio1.jpg";
import RelogioImage2 from "../../../../assets/relogio2.jpg";
import LuvaImage1 from "../../../../assets/luva1.jpg";
import LuvaImage2 from "../../../../assets/luva2.jpg";

import ProductItem from "../../../../Components/ProductItem";

const Products = () => {
  return (
    <Section scrollFadePosition={800} style={{ alignItems: "center" }}>
      <SectionTitle>Acessórios</SectionTitle>
      <ProductItem
      title="Relógio"
        images={[RelogioImage1, RelogioImage2]}
        imageAlt="relogio higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="left"
        description="Esta luva controla toda tecnologia existente, ela pode controlar algo mexendo os dedos ou até mesmo a voz!"
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
