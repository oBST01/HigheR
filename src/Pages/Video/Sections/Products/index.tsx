import ProductItem from "../../../../Components/ProductItem";
import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import PcImage from "../../../../assets/pc2.jpg";
import PhoneImage from "../../../../assets/cel1.png";

const Products = () => {
  return (
    <Section scrollFadePosition={1200} style={{ background: "#390F37", marginTop: "10vh" }}>
      <SectionTitle>Inovações</SectionTitle>
      <ProductItem
        imageSrc={PcImage}
        imageAlt="pc higheR"
        alignment="right"
        imageStyle={{ maxWidth: "50vh" }}
      />
      <ProductItem
        imageSrc={PhoneImage}
        imageAlt="phone higheR"
        alignment="left"
        imageStyle={{ maxWidth: "50vh" }}
      />
    </Section>
  );
};

export default Products;
