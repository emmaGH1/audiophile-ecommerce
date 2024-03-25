'use client'

import { ShoppingCart } from "lucide-react";
import { useState } from "react";


const Cart = () => {
  const [toggleDisplay, setToggleDisplay] = useState(true)

  return (
    <div className={`fixed top-0 left-0 w-full h-full ${toggleDisplay ? 'flex' : 'hidden'} items-center justify-center z-50`}>
       <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50" onClick={() => setToggleDisplay(prev => !prev)} />
       <div className="z-50 flex flex-col items-center justify-center p-8 rounded-md shadow-md bg-white-primary w-96 md:w-1/2 lg:w-1/3">
           <div className="text-black-400">Your cart is empty</div>
           <div className="">
             <ShoppingCart />
           </div>
       </div>
    </div>
  );
};

export default Cart;