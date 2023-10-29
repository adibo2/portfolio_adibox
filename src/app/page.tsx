import { Cover } from '@/components/Cover'
import { Transition } from '@/components/Transition/Transition'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Portfolio Adib - Bensmina',
  description: 'Portfolio animated ',
}


export default function Home() {
  return (
    <main className= ' mt-36 md:mt-10 h-[100vh]'>
      <Transition />
      <Cover />
    </main>
  )
}
