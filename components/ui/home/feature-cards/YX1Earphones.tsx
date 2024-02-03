import { Button } from "../../shared/Button";
import ImageContainer from "../../shared/ImageContainer"

export const YX1Earphones = () => {
  return (
    <div className="flex flex-col w-full mb-10 sm:flex-row sm:justify-between">
      <ImageContainer 
        mobileSrc="/home/mobile/image-earphones-yx1.jpg"
        tabletSrc="/home/tablet/image-earphones-yx1.jpg"
        desktopSrc="/home/desktop/image-earphones-yx1.jpg"
        quality={100}
        fill
        className="object-cover rounded-xl"
        containerStyle="relative w-full sm:w-[49%] h-52 sm:h-72 rounded-xl mb-5"
        alt="yx1 earphones"
      />

      <div className="flex flex-col w-full sm:w-[49%] h-52 pl-7 bg-white-secondary rounded-xl sm:h-72 sm:justify-center sm:items-center ">
      <h1
         className="mt-8 text-3xl font-semibold uppercase sm:mt-0 sm:font-bold text-black-900 lg:font-semibold"
      >
        yx1 earphones
      </h1>
        <Button className="mt-6 transition-colors duration-300 bg-transparent border border-black-900 text-black-900 lg:font-semibold hover:bg-black-900 hover:text-white-text" />
      </div>
    </div>
  );
};
