import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
import Button from "../Button";
import classes from "./ProductItem.module.css";

interface IProps {
  title: string;
  images: string[];
  imageAlt: string;
  imageStyle?: React.CSSProperties;
  alignment?: "center" | "left" | "right";
  description: string;
}

const ProductItem: React.FC<IProps> = ({
  title,
  images,
  imageAlt,
  imageStyle,
  alignment,
  description
}) => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const handleButtonClick = () => {
    if (currentImage >= images.length - 1) return setCurrentImage(0);
    setCurrentImage((currentValue) => currentValue + 1)
  }

  return (
    <div
      className={`${classes.productFlexContainer} ${alignment && classes[alignment]
        }`}
    >
      <div style={{alignItems: "start"}}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Button onClick={() => {navigate("/lojas")}} style={{alignSelf: "center", background: "gray"}}>Comprar</Button>
      </div>
      <div>
        <img style={imageStyle} src={images[currentImage]} alt={imageAlt} />
        <button
          onClick={handleButtonClick}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>

  );
};

export default ProductItem;
