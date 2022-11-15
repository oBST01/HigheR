import React, { useEffect, useRef, MutableRefObject } from "react";
import classes from "./Section.module.css";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  scrollFadePosition: number;
}

const Section: React.FC<IProps> = ({ children, style, scrollFadePosition }) => {
  const sectionElement = useRef() as MutableRefObject<HTMLDivElement>;
  document.addEventListener("scroll", () => {
    const { scrollY } = window;
    if (scrollY < scrollFadePosition || !sectionElement.current) return;
    sectionElement.current.style.opacity = "100%";
  });

  useEffect(() => {
    if (scrollFadePosition) return;
    sectionElement.current.style.opacity = "100%";
  }, [sectionElement]);
  return (
    <div ref={sectionElement} style={style} className={classes.section}>
      {children}
    </div>
  );
};

export default Section;
