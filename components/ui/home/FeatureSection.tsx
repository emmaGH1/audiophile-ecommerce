import { YX1Earphones } from "./feature-cards/YX1Earphones";
import { ZX7Speaker } from "./feature-cards/ZX7Speaker";
import { ZX9Speaker } from "./feature-cards/ZX9Speaker";

const FeatureSection = () => {
  return (
    <section className="w-full">
       <div className="flex flex-col mx-auto w-9/10 ">
          <ZX9Speaker />
          <ZX7Speaker />
          <YX1Earphones />
       </div>
    </section>
  );
};

export default FeatureSection;