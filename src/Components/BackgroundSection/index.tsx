import classes from "./BackgroundSection.module.css";

interface IProps {
  backgroundImageName: string;
  children: React.ReactNode;
}

const BackgroundSection: React.FC<IProps> = ({
  backgroundImageName,
  children,
}) => {
  const backgroundImage = new URL(
    `../../assets/${backgroundImageName}`,
    import.meta.url
  ).href;
  return (
    <div   
      className={classes.background}
    >
        <img src={backgroundImage} />
      {children}
    </div>
  );
};

export default BackgroundSection;
