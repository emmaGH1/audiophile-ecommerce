import { ZX9Speaker } from "./feature-cards/ZX9Speaker";

const FeatureSection = () => {
  return (
    <section className="w-full">
       <div className="mx-auto w-9/10 flex flex-col">
         <ZX9Speaker />
       </div>
    </section>
  );
};

export default FeatureSection;