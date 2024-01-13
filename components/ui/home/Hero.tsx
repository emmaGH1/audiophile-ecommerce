import Link from "next/link";

import { heroText } from "@/app/lib/constants";
import BannerImage from "./BannerImage";

const Hero = () => {
  return (
    <div className="w-full relative bg-black-900"> 
      <BannerImage />
      <div className="flex flex-col items-center justify-center text-center w-4/5 mx-auto"> 
        <strong className="text-black-400/80 uppercase tracking-[.5em] pt-24">
          New Product
        </strong>
        <h1 className="uppercase text-4xl font-bold mt-5">
          xx99 mark ii headphones
        </h1>
        <p className="text-black-400 pt-5 pb-10">{heroText}</p>
        <Link href={'/'} className="uppercase bg-orange-400/80 text-white-text font-bold text-sm px-7 py-3">
          See Product
        </Link>
        </div>
      </div>
  );
};

export default Hero;
