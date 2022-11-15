import React from 'react'
import classes from "./DefaultContainer.module.css";

interface IProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
    flexDirection?: "column" | "row";
}

const DefaultContainer: React.FC<IProps> = ({style, children, flexDirection}) => {
  return (
    <div className={classes.defaultContainer} style={{flexDirection: flexDirection || "initial", ...style}}>{children}</div>
  )
}

export default DefaultContainer