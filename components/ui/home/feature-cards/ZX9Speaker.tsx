
import { zx9SpeakerText } from "@/app/lib/constants";
import { Button } from "../../shared/Button";
import ImageContainer from "../../shared/ImageContainer";


export const ZX9Speaker = () => {

 return (
    <div className="bg-orange-secondary bg-pattern-circle-svg bg-top bg-contain lg:bg-contain lg:bg-repeat lg:bg-left bg-no-repeat flex flex-col lg:flex-row justify-center items-center my-10 rounded-lg">
        <div className="mt-14 lg:-mb-2 overflow-hidden">
            <ImageContainer 
              mobileSrc="/home/mobile/image-speaker-zx9.png"
              tabletSrc="/home/tablet/image-speaker-zx9.png"
              desktopSrc="/home/desktop/image-speaker-zx9.png"
              mobileHeight={100}
              mobileWidth={160}
              tabletWidth={200}
              tabletHeight={100}
              desktopHeight={500}
              desktopWidth={400}
              alt='ZX9 Speakers'
              
            />            
        </div>
        <div className="text-white-text flex flex-col justify-center text-center lg:ml-20 lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase w-2/4 mx-auto lg:mx-0 mt-7">
                zx9 speaker
            </h2>
            <p className=" text-white-text/70 text-sm w-7/10 lg:mx-0 lg:w-2/4 mx-auto mt-8 mb-10">{zx9SpeakerText}</p>
            <Button className="bg-black-900 mb-12 md:mt-5 md:mb-16"/>
        </div>
    </div>
  );
}