import React from 'react'
import classes from "./Button.module.css";

interface IProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button: React.FC<IProps> = ({children, onClick}) => {
  return (
    <button className={classes.defaultButton} onClick={onClick}>{children}</button>
  )
}

export default Button