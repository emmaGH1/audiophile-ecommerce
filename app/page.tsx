
import { HeroSection } from "@/components/ui/home/HeroSection";
import Explore from "@/components/ui/shared/Explore";
import FeatureSection from '@/components/ui/home/FeatureSection';
import About from "@/components/ui/shared/About";

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