'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

import { NavLinks } from "@/app/lib/constants"
import { Menu, ShoppingCart, User } from "lucide-react"
import Image from "next/image"

export const Navbar = () => {
    const pathname = usePathname()

    return (
        <div className="relative  bg-black text-white-text">
            <div className="w-9/10 mx-auto flex justify-between     items-center py-4 md:hidden">
                <Menu />
                <h1 className="font-extrabold text-2xl">audiophile</h1>
                <ShoppingCart />
            </div>

            <div className="hidden lg:hidden md:flex w-9/10 mx-auto justify-between items-center py-4 text-lg">
                <div className="flex items-center">
                    <Menu className="font-bold text-white"/>
                    <h1 className="font-extrabold text-3xl ml-10">audiophile</h1>
                </div>
                <div className="flex">
                  <ShoppingCart />
                  <User className="mx-4" />
                </div>
            </div>

            <div className="hidden lg:flex flex-row w-9/10 mx-auto items-center justify-between py-4">
               <h1 className="font-extrabold text-3xl">audiophile</h1>
               <ul>
                    {NavLinks.map(link => {
                        return (
                            <Link 
                              href={link.path} 
                              key={link.label}
                              className={`${pathname === link.path ? ' text-orange-secondary' : 'text-white-text'} uppercase text-base font-bold m-4 hover:text-orange-primary transition-colors duration-300`}
                              >
                                {link.label}
                            </Link>
                        )
                    })}
                </ul>
                <div className="flex">
                    <User className="mx-3 hover:text-orange-primary transition-colors duration-300 cursor-pointer"/>
                    <ShoppingCart className="hover:text-orange-primary transition-colors duration-300 cursor-pointer"/>
                </div>
            </div>

             <Image src='/assets/category-earphones/mobile/image-yx1-earphones.jpg' alt='earphones' width={20} height={30}/>

            <div className="h-px w-full md:w-9/10 mx-auto bg-gray-500/20"/>
        </div>
    )
}