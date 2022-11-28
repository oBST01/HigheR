import { useNavigate } from "react-router-dom";

import classes from "./ProductItem.module.css";

interface IProps {
  imageSrc: string;
  imageAlt: string;
  imageStyle?: React.CSSProperties;
  href?: string;
  alignment?: "center" | "left" | "right";
}

const ProductItem: React.FC<IProps> = ({
  imageSrc,
  imageAlt,
  imageStyle,
  href,
  alignment,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${classes.productFlexContainer} ${
        alignment && classes[alignment]
      }`}
    >
      <div>
        <img style={imageStyle} src={imageSrc} alt={imageAlt} />
        <button
          onClick={() => {
            if (!href) return;
            navigate(href);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
