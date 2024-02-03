import Image from "next/image";
import { Button } from "../../shared/Button";
import ImageContainer from "../../shared/ImageContainer";
import { Title } from "../../shared/Title";

export const ZX7Speaker = () => {
  return (
    <div className="relative w-full my-10 h-[22rem] md:h-[19rem] flex items-center">
      {/* <Image src='/home/desktop/image-speaker-zx7.jpg' alt="zx7 speaker" fill  className="rounded-xl -z-10" /> */}
      <ImageContainer 
          mobileSrc="/home/mobile/image-speaker-zx7.jpg"
          tabletSrc="/home/tablet/image-speaker-zx7.jpg"
          desktopSrc="/home/desktop/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          fill
          quality={100}
          className="rounded-lg md:rounded-xl -z-10 md:object-cover"
      />
      <div className="flex flex-col ml-5 lg:ml-20">
        <h1
         className="text-3xl font-semibold uppercase sm:font-bold text-black-900 lg:font-semibold"
        >ZX7 Speaker</h1>
        <Button className="mt-6 transition-colors duration-300 bg-transparent border border-black-900 text-black-900 lg:font-semibold hover:bg-black-900 hover:text-white-text" />
      </div>
    </div>
  );
};

