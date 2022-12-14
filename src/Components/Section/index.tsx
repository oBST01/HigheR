import React, { useEffect, useRef, MutableRefObject } from "react";
import classes from "./Section.module.css";

interface IProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  row?: boolean;
  reverse?: boolean;
  scrollFadePosition: number;
}

const Section: React.FC<IProps> = ({
  children,
  style,
  scrollFadePosition,
  row,
  reverse,
}) => {
  const sectionElement = useRef() as MutableRefObject<HTMLDivElement>;
  document.addEventListener("scroll", () => {
    const { scrollY } = window;
    if (scrollY < scrollFadePosition || !sectionElement.current) return;
    sectionElement.current.style.opacity = "100%";
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (scrollFadePosition) return;
    sectionElement.current.style.opacity = "100%";
  }, [sectionElement]);
  return (
    <div
      ref={sectionElement}
      style={style}
      className={`${classes.section} ${
        row && `${reverse ? classes.rowReverse : classes.row}`
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
