import { cn } from "@/utils/cn";
import Link from "next/link";

interface ButtonProps {
   classNames?: string,
   children?: string 
}

export const Button = ({ classNames, children = 'see product' }: ButtonProps) => {
  return (
    <Link href='/'>
        <button type="button" className={cn("px-8 py-3 uppercase font-bold text-sm", `bg-orange-500 text-white-text ${classNames} `)}>
          {children}
        </button>
    </Link>
  );
};

