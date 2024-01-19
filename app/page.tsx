
import { HeroSection } from "@/components/ui/home/HeroSection";
import { fetchData } from "./lib/data";
import Explore from "@/components/ui/home/Explore";
import FeatureSection from '@/components/ui/home/FeatureSection';

const Page = () => {

  return (
    <div className="flex flex-col">
      <HeroSection />
      <Explore />
      <FeatureSection />
    </div>
  );
};

export default Page;