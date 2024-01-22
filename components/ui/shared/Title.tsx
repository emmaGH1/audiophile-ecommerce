
interface Props {
    text: string,
    className?: string
}

export const Title = ({ text, className }: Props) => {
  return (
    <h1 className={`
    font-extrabold text-4xl
     md:text-5xl lg:text-6xl 
     text-white-text pt-5 
     sm:w-2/4 sm:mx-auto lg:mx-0 uppercase
     ${className}`
     }>
        {text}
    </h1>
  );
};
