import React from 'react'
import classes from "./Button.module.css";

interface IProps {
  id?: string;
  type?: "button" | "reset" | "submit";
  style?: React.CSSProperties;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({id, type, children, onClick, style}) => {
  return (
    <button id={id} type={type} style={style} className={classes.defaultButton} onClick={onClick}>{children}</button>
  )
}

export default Button