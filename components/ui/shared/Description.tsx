
interface Props {
    text: string,
    className?: string
}

export const Description = ({ text, className }: Props) => {
  return (
    <p className={` lowercase text-sm md:text-base text-black-400 pt-5 pb-12 sm:pb-5 md:pb-12  w-9/10 sm:w-2/4 lg:w-[35%] mx-auto lg:mx-0 ${className}`}>
         {text}
    </p>
  );
};

