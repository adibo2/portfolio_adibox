import { Navbar } from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Prosto_One,Roboto } from 'next/font/google'
import { Header } from '@/components/Header'
import StarsCanvas from '@/components/StarBackground'

const prosto = Prosto_One({ subsets: ['latin'], weight: "400" })
export const roboto = Roboto(
  {
    subsets: ['latin'],
    weight: "300",
    display: 'swap',
    variable: '--font-roboto'
  }
)

export const metadata: Metadata = {
  title: 'Portfolio TarreDev - NextJS 13',
  description: 'Portfolio animated',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${prosto.className} ${roboto.className}`}>
        <StarsCanvas></StarsCanvas>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  )
}
