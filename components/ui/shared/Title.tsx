import { CSSProperties } from "react";

interface Props {
    text: string,
    className?: string
    style?: CSSProperties
}

export const Title = ({ text, className, style }: Props) => {
  return (
    <h1 className={`font-extrabold text-4xl
    md:text-5xl lg:text-6xl 
    text-white-text pt-5 
    sm:w-2/4 sm:mx-auto lg:mx-0 uppercase ${className}`} style={style}>
        {text}
    </h1>
  );
};
