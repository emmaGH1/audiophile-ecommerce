import { NavLinks } from "@/app/lib/constants";
import { ChevronRight, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Explore = () => {
  return (
    <section className="mt-5 mb-10 sm:mt-14 sm:mb-10"> 
        <div className="w-full grid grid-cols-1 md:grid-cols-3">
            {
            NavLinks.slice(1).map((link) => {
                return (
                    <div key={link.label} className="
                      w-9/10 md:w-4/5 bg-white-secondary text-black-900 flex flex-col mx-auto items-center my-6 first:mt-16 md:first:mt-20 md:mt-20 rounded-xl
                    ">
                    <Image src={link.imgUrl!} alt={link.label} width={150} height={200} className="-mt-10"/>
                      <Link href={link.path} className="uppercase text-black-900 font-bold mb-4">
                        {link.label}
                      </Link>
                      <Link href={link.path} className="text inline-flex items-center text-black-400 uppercase text-xs mb-8" >
                        <p>Shop</p>
                        <ChevronRight className=" text-orange-600 w-4 h-4"/>
                      </Link>
                    </div>
                )
              })
            } 
        </div>
      </section>
  );
};

export default Explore;