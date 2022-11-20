import classes from "./Title.module.css";

interface IProps {
    children: string;
    style?: React.CSSProperties;
}

const SectionTitle: React.FC<IProps> = ({children, style}) => {
  return (
    <h1 style={style} className={classes.title}>{children}</h1>
  )
}

export default SectionTitle