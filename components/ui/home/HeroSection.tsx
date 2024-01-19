import { heroText } from "@/app/lib/constants";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section>
       <div className=" bg-hero-mobile sm:bg-hero-tablet lg:bg-hero-desktop bg-cover bg-bottom lg:bg-right">
          <div className="flex flex-col text-center lg:text-left uppercase h-[60vh] lg:h-screen hero lg:w-9/10 lg:mx-auto">
            <div className=" tracking-[0.45em] text-base font-bold text-black-400/80 pt-24">new product</div>
            <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white-text pt-5 sm:w-2/4 sm:mx-auto lg:mx-0">xx99 mark ii headphones</h1>
            <p className="lowercase text-sm md:text-base text-black-400 pt-5 pb-12 sm:pb-5 md:pb-12  w-9/10 sm:w-2/4 lg:w-[35%] mx-auto lg:mx-0">{heroText}</p>
            <Link href='/'>
               <button type="button" className=" bg-orange-500 text-white-text px-8 py-3 uppercase font-bold text-sm">
                 see product
               </button>
            </Link>
          </div>
       </div>
    </section>
  );
};

