import { heroText } from "@/app/lib/constants";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section>
       <div className=" bg-hero-mobile md:bg-hero-tablet lg:bg-hero-desktop bg-cover bg-bottom px-10">
          <div className="flex flex-col justify-center items-center text-center uppercase h-[60vh]">
            <div className=" tracking-[0.45em] text-base font-bold text-black-400/80">new product</div>
            <h1 className="font-extrabold text-4xl text-white-text">xx99 mark ii headphones</h1>
            <p className="lowercase text-black-400">{heroText}</p>
            <Link href='/'>
               <button type="button" className=" bg-orange-400/80 text-white-text px-8 py-3 uppercase font-bold text-sm">
                 see product
               </button>
            </Link>
          </div>
       </div>
    </section>
  );
};

