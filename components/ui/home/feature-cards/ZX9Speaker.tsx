import { zx9SpeakerText } from "@/app/lib/constants";
import { Description } from "../../shared/Description";
import ImageContainer from "../../shared/ImageContainer";
import { Title } from "../../shared/Title";
import { Button } from "../../shared/Button";
import Image from "next/image";

// Import statements remain the same

export const ZX9Speaker = () => {
  return (
    <div className="container flex flex-col w-full mt-14 rounded-xl bg-orange-secondary">
      {/* Mobile & Tablet View */}
      <div className="relative flex flex-col items-center justify-center pt-12 pb-10 lg:hidden">
        <Image
          src='/home/desktop/pattern-circles.svg'
          alt=''
          width={100}
          height={100}
          className="absolute left-0 right-0 object-cover w-full h-full -top-32"
        />
        <ImageContainer
          mobileSrc="/home/mobile/image-speaker-zx9.png"
          mobileWidth={160}
          mobileHeight={100}
          tabletSrc="/home/tablet/image-speaker-zx9.png"
          tabletWidth={200}
          tabletHeight={100}
          desktopSrc="/home/desktop/image-speaker-zx9.png"
          desktopWidth={300}
          desktopHeight={100}
          alt="ZX9 Speaker"
        />
        <Title text='zx9 speaker' className="w-2/4 mt-5 text-center md:w-2/5 md:text-[3.5rem]" />
        <Description text={zx9SpeakerText} className="w-3/4 text-center text-white-text/50" />
        <Button className="mt-10 rounded-sm bg-black-900" />
      </div>

      {/* Desktop View */}
      <div className="relative z-10 hidden overflow-hidden lg:flex pt-28">
        <Image
          src='/home/desktop/pattern-circles.svg'
          alt=''
          width={1000}
          height={100}
          className="absolute -top-[20%] -left-[15%] -z-10"
        />
        <div className="-mb-2 ml-28">
          <Image
            src='/home/desktop/image-speaker-zx9.png'
            width={500}
            height={100}
            alt="ZX9 Speaker"
          />
        </div>
        <div className="flex flex-col ml-36">
          <Title text="zx9 speaker" className="tracking-[.15em] lg:text-5xl" />
          <Description
            text={zx9SpeakerText}
            className="lg:text-base lg:font-light text-white-text/60 lg:w-[80%]"
          />
          <Button />
        </div>
      </div>
    </div>
  );
};
