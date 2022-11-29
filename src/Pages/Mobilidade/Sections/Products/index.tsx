import ProductItem from "../../../../Components/ProductItem";
import Section from "../../../../Components/Section";
import SectionTitle from "../../../../Components/SectionTitle";

import BikeImage1 from "../../../../assets/bike1.jpeg";
import BikeImage2 from "../../../../assets/bike2.jpeg";
import BikeImage3 from "../../../../assets/bike3.jpeg";
import BikeImage4 from "../../../../assets/bike4.jpeg";
import HoverboardImage1 from "../../../../assets/hoverboard1.png";
import HoverboardImage2 from "../../../../assets/hoverboard2.jpeg";
import HoverboardImage3 from "../../../../assets/hoverboard3.jpeg";

const Products = () => {
  return (
    <Section scrollFadePosition={700} style={{ background: "#000115" }}>
      <SectionTitle>Produtos</SectionTitle>
      <ProductItem
      title="Bike"
        images={[BikeImage1, BikeImage2, BikeImage3, BikeImage4]}
        imageAlt="bike higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="center"
        description="Uma bike altamente tecnológica, que não possui raios nas rodas. A bicicleta é equipada com sistema bluetooth capaz de parear com qualquer aparelho, obedece a comandos de voz e possui sistema GPS"
      />
      <ProductItem
      title="Hoverboard"
        images={[HoverboardImage1, HoverboardImage2, HoverboardImage3]}
        imageAlt="hoverboard higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="center"
        description="Diferentemente dos outros fakeboards que você já está acostumado a ver, esse hoverboard realmente levita, não toca no chão e pode voar até certas altitudes"
      />
    </Section>
  );
};

export default Products;
