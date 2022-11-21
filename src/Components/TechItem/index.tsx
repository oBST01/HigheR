import classes from "./TechItem.module.css";

import { useNavigate } from "react-router-dom";

interface IProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
}

const TechItem: React.FC<IProps> = ({ title, description, icon, path }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.techItem}>
      <div>
        {icon}
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <button
        onClick={() => {
          navigate(path);
        }}
      >
        SAIBA MAIS
      </button>
    </div>
  );
};

export default TechItem;
