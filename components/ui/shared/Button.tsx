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
        <button type="button" className={cn("px-8 py-3 uppercase font-bold text-xs", `text-white-text bg-black-900 ${className} `)}>
          {children}
        </button>
    </Link>
  );
};

