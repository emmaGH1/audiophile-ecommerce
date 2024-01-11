'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

import { useState } from "react"
import { NavLinks } from "@/app/lib/constants"
import { ChevronRight, Menu, ShoppingCart, User, X } from "lucide-react"
import Image from "next/image"

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)
    const pathname = usePathname()

    return (
        <div className="relative  bg-black-900 text-white-text">
            <div className="w-9/10 mx-auto flex justify-between     items-center py-6 md:hidden">
               {showNavbar ? 
                   <X className="stroke-[3px] text-white" onClick={() => setShowNavbar(prev => !prev)}/>
                      :
                   <Menu className="stroke-[3px] text-white" onClick={() => setShowNavbar(prev => !prev)} />
                    }
                <Link href='/' className="font-extrabold text-2xl">audiophile</Link>
                <ShoppingCart />
            </div>

            <div className="hidden lg:hidden md:flex w-9/10 mx-auto justify-between items-center py-4 text-lg">
                <div className="flex items-center ">
                  {showNavbar ? 
                    <X className="mt-2 text-white stroke-[3px]" onClick={() => setShowNavbar(prev => !prev)}/>
                      :
                    <Menu className="mt-2 stroke-[3px] text-white" onClick={() => setShowNavbar(prev => !prev)} />
                   }
                    <Link href='/' className="font-extrabold text-3xl ml-10">audiophile</Link>
                </div>
                <div className="flex">
                  <ShoppingCart />
                 <Link href='/login'>
                   <User className="mx-4" />
                 </Link> 
                </div>
            </div>

            <div className="hidden lg:flex flex-row w-9/10 mx-auto items-center justify-between py-4">
               <Link href='/' className="font-extrabold text-3xl">audiophile</Link>
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

            <div className={`${showNavbar ? "w-full bg-white-primary grid grid-cols-1 md:grid-cols-3 lg:hidden" : "hidden"}`}>
               {
                NavLinks.slice(1).map((link) => {
                    return (
                        <div key={link.label} className="
                          w-9/10 md:w-4/5 bg-white-secondary text-black-900 flex flex-col mx-auto items-center my-6 first:mt-16 md:first:mt-20 md:mt-20 rounded-xl
                        ">
                        <Image src={link.imgUrl!} alt={link.label} width={150} height={200} className="-mt-10"/>
                          <Link href={link.path} className="uppercase text-black-900 font-bold mb-4" onClick={() => setShowNavbar(false)}>
                            {link.label}
                          </Link>
                          <Link href={link.path} className="text inline-flex items-center text-black-400 uppercase text-xs mb-8" onClick={() => setShowNavbar(false)} >
                            <p>Shop</p>
                            <ChevronRight className=" text-orange-600 w-4 h-4"/>
                          </Link>
                        </div>
                    )
                })
               } 
               <Link href='/login' className="flex text-black-900 ml-5 mt-3 mb-2 items-center" onClick={() => setShowNavbar(false)} >
                 <User className="mr-2"/> Sign In / Create Account
               </Link>
            </div>

            <div className="h-px w-full md:w-9/10 mx-auto bg-gray-500/20"/>
        </div>
    )
}