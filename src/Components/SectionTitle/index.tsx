import classes from "./Title.module.css";

interface IProps {
    children: string;
}

const SectionTitle: React.FC<IProps> = ({children}) => {
  return (
    <h1 className={classes.title}>{children}</h1>
  )
}

export default SectionTitle