import { zx9SpeakerText } from "@/app/lib/constants";
import { Button } from "../../shared/Button";
import ImageContainer from "../../shared/ImageContainer";
import Image from "next/image";

export const ZX9Speaker = () => {
 return (
    <div className="bg-orange-500 bg-pattern-circle-svg flex">
        <div>
            <ImageContainer 
              mobileSrc="/home/mobile/image-speaker-zx9.png"
              tabletSrc="/home/tablet/image-speaker-zx9.png"
              desktopSrc="/home/desktop/image-speaker-zx9.png"
              mobileHeight={200}
              tabletHeight={300}
              desktopHeight={400}
              mobileWidth={200}
              tabletWidth={300}
              desktopWidth={400}
              alt='ZX9 Speakers'
              
            />
            
        </div>
        <div>
            <h1>
                zx9 speaker
            </h1>
            <p>{zx9SpeakerText}</p>
            <Button className="bg-black-900"/>
        </div>
    </div>
  );
}