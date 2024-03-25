import { heroText } from "@/app/lib/constants";
import Link from "next/link";
import { Button } from "../shared/Button";
import { Title } from "../shared/Title";
import { Description } from "../shared/Description";

export const HeroSection = () => {
  return (
    <section>
       <div className="bg-bottom bg-cover xl:bg-fixed bg-hero-mobile sm:bg-hero-tablet xl:bg-hero-desktop xl:bg-right">
          <div className="flex flex-col text-center xl:text-left uppercase h-[60vh] xl:h-screen hero xl:w-9/10 xl:mx-auto lg:items-center xl:items-start">
            <div className=" tracking-[0.45em] text-base font-bold text-black-400/80 pt-24">new product</div>
            <Title text="xx99 mark ii headphones" />
            <Description text={heroText} />
            <Button linkTo='/headphones/xx99-mark-two-headphones' className="transition-colors duration-150 bg-orange-secondary hover:bg-orange-secondary/80 text-white-text" />
          </div>
       </div>
    </section>
  );
};

