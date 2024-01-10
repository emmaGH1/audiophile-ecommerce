import { StaticImport } from "next/dist/shared/lib/get-img-props"

interface NavLinks {
  label: string,
  path: string,
  imgUrl?: string 
}[]

export const NavLinks: NavLinks[] = [
            {
            label: 'Home',
            path: '/',
            },
            {
            label: 'Headphones',
            path: '/headphones',
            imgUrl: '/assets/category-headphones/mobile/image-xx99-mark-one.jpg'
            },
            {
                label: 'Speakers',
                path: '/speakers',
                imgUrl: '/assets/category-speakers/mobile/image-zx9.jpg'
            },
            {
                label: 'Earphones',
                path: '/earphones',
                imgUrl: '/assets/category-earphones/mobile/image-yx1-earphones.jpg'
            },
]