import { aboutText } from "@/app/lib/constants";
import { Description } from "./Description";
import ImageContainer from "./ImageContainer";

const About = () => {
  return (
    <div className="flex flex-col mx-auto mt-10 mb-10 lg:flex-row-reverse lg:justify-between w-9/10 lg:mt-12">
       <ImageContainer 
         mobileSrc="/shared/mobile/image-best-gear.jpg"
         tabletSrc="/shared/tablet/image-best-gear.jpg"
         desktopSrc="/shared/desktop/image-best-gear.jpg"
         fill
         quality={100}
         alt="Best Gear"
         className="rounded-xl"
         containerStyle="relative w-full lg:w-2/4  h-[22rem] lg:h-[30rem] mb-5 xl:w-2/5"
       /> 
       <div className="flex-col lg:w-2/4 lg:mr-5 lg:flex lg:justify-center">
         <h1 className="text-[26px] sm:text-3xl font-semibold text-center uppercase sm:mt-0 sm:font-bold text-black-900 lg:font-semibold tracking-widest mb-3 xl:text-4xl xl:text-left">
            bringing you the <span className=" text-orange-secondary">best</span> audio gear
         </h1>
         <Description text={aboutText} className="pt-3 text-lg leading-relaxed tracking-wide normal-case sm:w-9/10 sm:text-center sm:mt-1 lg:w-full xl:text-left" />
       </div>
    </div>
  );
};

export default About;