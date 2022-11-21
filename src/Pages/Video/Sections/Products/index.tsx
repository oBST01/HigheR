import ProductItem from "../../../../Components/ProductItem";
import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import PcImage1 from "../../../../assets/pc1.jpg";
import PcImage2 from "../../../../assets/pc2.jpg";
import PhoneImage1 from "../../../../assets/cel1.png";
import PhoneImage2 from "../../../../assets/cel2.jpg";

const Products = () => {
  return (
    <Section scrollFadePosition={900} style={{ background: "#390F37", marginTop: "10vh" }}>
      <SectionTitle>Inovações</SectionTitle>
      <ProductItem
      title="Pc"
      description=""
        images={[PcImage1, PcImage2]}
        imageAlt="pc higheR"
        alignment="right"
        imageStyle={{ maxWidth: "50vh" }}
      />
      <ProductItem
      title="Smartphone"
      description="Um smartphone celular que vai fazer satisfazer as sua necessidades. dando tudo que você precisa tecnologicamente."
        images={[PhoneImage1, PhoneImage2]}
        imageAlt="phone higheR"
        alignment="left"
        imageStyle={{ maxWidth: "50vh" }}
      />
    </Section>
  );
};

export default Products;
