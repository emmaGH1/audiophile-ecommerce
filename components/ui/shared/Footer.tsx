import { NavLinks, footerText } from "@/app/lib/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full bg-black-900">
      <div className="flex flex-col items-center w-9/10 mx-auto md:items-start">
        <div className="h-1 w-20 md:w-24 bg-orange-400"/>
        <div className="md:flex md:justify-between mt-10 md:mt-8 md:mb-8 md:w-full">
            <Link href='/' className="font-extrabold text-2xl text-white-text mt-9">audiophile</Link>
            <ul className="flex flex-col md:flex-row items-center mt-7 mb-5">
                {NavLinks.map(link => {
                    return (
                        <Link 
                            href={link.path} 
                            key={link.label}
                            className='text-white-text uppercase text-base font-bold mt-3 md:mr-5 hover:text-orange-primary transition-colors duration-300'
                            >
                            {link.label}
                        </Link>
                    )
                })}
            </ul>
        </div>
        <div className="md:flex md:justify-between md:w-full">
            <div className="md:flex md:flex-col">
                <p className="text-black-200/80 text-center md:text-start md:w-3/5">
                    {footerText}
                </p>
                <p className="text-black-200/80 text-center md:text-start mt-10 mb-7">Copyright 2024. All Rights Reserved
                </p>
            </div>
            <div className="flex justify-center text-white-text/80 mb-10 md:items-center">
            <Link href='github.com/emmagh1' className="mr-2 md:hover:text-orange-400 transition-colors duration-150" >
                <Facebook />
            </Link>
            <Link href='https://twitter.com/emmadotdev' className="mr-2 md:hover:text-orange-400 transition-colors duration-150">
                <Twitter />
            </Link>
            <Link href='emmajs.vercel.app' className="mr-2 md:hover:text-orange-400 transition-colors duration-150">
                <Instagram />
            </Link>
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;