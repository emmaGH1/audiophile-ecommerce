import { zx9SpeakerText } from "@/app/lib/constants";
import Image from "next/image";

export const ZX9Speaker = () => {
 return (
    <div className="bg-orange-400 bg-pattern-circle-svg flex">
        <div>
            <Image src={''} alt="" />
        </div>
        <div>
            <h1>
                zx9 speaker
            </h1>
            <p>{zx9SpeakerText}</p>
        </div>
    </div>
  );
}