import React from 'react'
import classes from "./Button.module.css";

interface IProps {
    children: React.ReactNode;
    style: React.CSSProperties;
    onClick: () => void;
}

const Button: React.FC<IProps> = ({children, onClick, style}) => {
  return (
    <button style={style} className={classes.defaultButton} onClick={onClick}>{children}</button>
  )
}

export default Button