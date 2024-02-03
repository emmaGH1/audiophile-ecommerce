
import { HeroSection } from "@/components/ui/home/HeroSection";
import { fetchData } from "./lib/data";
import Explore from "@/components/ui/home/Explore";
import FeatureSection from '@/components/ui/home/FeatureSection';
import About from "@/components/ui/home/About";

const Page = () => {

  return (
    <div className="flex flex-col">
      <HeroSection />
      <Explore />
      <FeatureSection />
      <About />
    </div>
  );
};

export default Page;