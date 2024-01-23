import { Button } from "../../shared/Button";
import ImageContainer from "../../shared/ImageContainer";
import { Title } from "../../shared/Title";

export const ZX7Speaker = () => {
  return (
    <div className="container relative flex flex-col justify-center w-full h-full mt-10 overflow-hidden py-36">
      <ImageContainer 
          mobileSrc="/home/mobile/image-speaker-zx7.jpg"
          tabletSrc="/home/tablet/image-speaker-zx7.jpg"
          desktopSrc="/home/desktop/image-speaker-zx7.jpg"
          alt="ZX7 Speaker"
          fill={true}
          quality={100}
          className="absolute object-cover sm:object-contain -z-10 rounded-xl"
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

