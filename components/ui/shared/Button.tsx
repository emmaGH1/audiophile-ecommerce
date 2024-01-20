import { cn } from "@/utils/cn";
import Link from "next/link";

interface ButtonProps {
   className?: string,
   children?: string,
   linkTo?: string
}

export const Button = ({ className, children = 'see product', linkTo = '/' }: ButtonProps) => {
  return (
    <Link href={linkTo}>
        <button type="button" className={cn("px-8 py-3 uppercase font-bold text-sm", `bg-orange-500 text-white-text ${className} `)}>
          {children}
        </button>
    </Link>
  );
};

