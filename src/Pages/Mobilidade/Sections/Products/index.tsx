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
        description="Ja pensou em ter um meio de trasporte prático,rápido,tecnologico e nao poluente?
        Pois temos soluções acessíveis,nosso novo produto Cnc56 é um exemplo, se mover nunca foi tao facil e tecnológico.
        Conectado a tudo e todos mesmo em movimento."
      />
      <ProductItem
        title="Hoverboard"
        images={[HoverboardImage1, HoverboardImage2, HoverboardImage3]}
        imageAlt="hoverboard higheR"
        imageStyle={{ maxWidth: "90vmin" }}
        alignment="center"
        description="Levitaçao,caregamento via 
        energia solar,limpo de poluentes,velocidade e praticidade,
        estamos falando do nosso hoverboard."
      />
    </Section>
  );
};

export default Products;
