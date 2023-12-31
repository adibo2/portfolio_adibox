"use client"
import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { socialNetworks } from './dataHeader'

export function Header() {
    return (
        <div className='absolute z-[9999999] inline-block w-full  top-5 md:top-10'>
            <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden">
                <div className="container justify-between mx-auto md:flex">
                    <Link href="/">
                        <h1 className="my-3 text-4xl text-center text-white md:text-lef">Adib
                            <span className="text-secondary">Bensmina</span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7 cursor-pointer z-[9999999]">
                        {socialNetworks.map(({ logo, src }) => (
                            <Link target="_blank" key={src} href={src}  className="transition-all z-[9999999] duration-300 hover:text-secondary">
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
