import { NavLinks, footerText } from "@/app/lib/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black-900">
      <div className="flex flex-col items-center w-9/10 mx-auto ">
        <div className="h-1 w-20 bg-orange-400"/>
        <Link href='/' className="font-extrabold text-2xl text-white-text mt-9">audiophile</Link>
        <ul className="flex flex-col items-center mt-7 mb-5">
            {NavLinks.map(link => {
                return (
                    <Link 
                        href={link.path} 
                        key={link.label}
                        className='text-white-text uppercase text-base font-bold mt-3 hover:text-orange-primary transition-colors duration-300'
                        >
                        {link.label}
                    </Link>
                )
            })}
        </ul>
        <p className="text-black-200/80 text-center">
            {footerText}
        </p>
        <p className="text-black-200/80 text-center mt-10 mb-7">Copyright 2024. All Rights Reserved</p>
        <div className="flex text-white-text mb-10">
          <Facebook className="mr-2" />
          <Twitter className="mr-2" />
          <Instagram className="mr-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;