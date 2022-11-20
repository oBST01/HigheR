import classes from "./BackgroundSection.module.css";

interface IProps {
  backgroundImageName: string;
  children: React.ReactNode;
  darkMode?: boolean;
}

const BackgroundSection: React.FC<IProps> = ({
  backgroundImageName,
  children,
  darkMode
}) => {
  const backgroundImage = new URL(
    `../../assets/${backgroundImageName}`,
    import.meta.url
  ).href;
  return (
    <div className={`${classes.background} ${darkMode && classes.dark}`}>
      <img src={backgroundImage} />
      {children}
    </div>
  );
};

export default BackgroundSection;
