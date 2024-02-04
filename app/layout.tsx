import { Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/ui/shared/Navbar'
import Footer from '@/components/ui/shared/Footer'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: '%s | Audiophile',
    default: 'Audiophile'
  },
  description: 'Best Quality Audio Only',
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
      <body className="flex flex-col">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
