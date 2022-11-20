import ProductItem from "../../../../Components/ProductItem";
import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import BikeImage from "../../../../assets/bike1.jpeg";
import HoverboardImage from "../../../../assets/hoverboard1.png";

const Products = () => {
  return (
    <Section scrollFadePosition={800} style={{ background: "#040233" }}>
      <SectionTitle>Produtos</SectionTitle>
      <ProductItem
        imageSrc={BikeImage}
        imageAlt="bike higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="center"
      />
      <ProductItem
        imageSrc={HoverboardImage}
        imageAlt="hoverboard higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="center"
      />
    </Section>
  );
};

export default Products;
