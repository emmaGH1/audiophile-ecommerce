import { Menu, ShoppingCart } from "lucide-react"

export const Navbar = () => {
    return (
        <div className="relative flex justify-between w-full mx-auto">
          {/* <div></div>   */}
            <Menu />
            <h1 className="font-bold">audiophile</h1>
            <ShoppingCart />
        </div>
    )
}