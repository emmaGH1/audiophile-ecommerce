import { Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: '%s | Audiophile',
    default: 'Audiophile'
  },
  description: 'Get the best audio quality with Audiophile',
}

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="">
        <Navbar />
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
