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
            imgUrl: '/shared/desktop/image-headphones.png'
            },
            {
                label: 'Speakers',
                path: '/speakers',
                imgUrl: '/shared/desktop/image-speakers.png'
            },
            {
                label: 'Earphones',
                path: '/earphones',
                imgUrl: '/shared/desktop/image-earphones.png'
            },
]