import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import RelogioImage from "../../../../assets/relogio1.jpg";
import LuvaImage from "../../../../assets/luva1.jpg";
import ProductItem from "../../../../Components/ProductItem";

const Products = () => {
  return (
    <Section scrollFadePosition={800} style={{ alignItems: "normal" }}>
      <SectionTitle>Acessórios</SectionTitle>
      <ProductItem
        imageSrc={RelogioImage}
        imageAlt="relogio higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="left"
      />
      <ProductItem
        imageSrc={LuvaImage}
        imageAlt="luva higheR"
        alignment="right"
      />
    </Section>
  );
};

export default Products;
