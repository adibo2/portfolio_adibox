import { fadeIn } from '@/utils/motionTransitions'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
export function Introduction() {
    return (
        <div className=" w-full z-20">
            <div className="w-full h-full ">
                <div className="container grid mt-5 items-center h-full px-5 mx-auto md:grid-cols-2 md:text-left">
                    <motion.div className="hidden w-auto h-auto mx-auto md:block"
                        variants={fadeIn('right', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <Image src="/assets/adib.png" priority width="800" height="600" alt="Avatar" />
                    </motion.div>

                    <motion.div variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        <h1 className="mb-3 text-center sm:text-start md:text-4xl text-2xl  leading-tight md:mb-10">Hi 👋🏼.My name is,  <br />
                            <span className="text-secondary">ADIB BENSMINA</span></h1>
                        <p className="max-w-xl  text-center sm:text-start  mb-10 leading-8 text-xl md:max-w-[37rem] md:mx-0 md:mb-16 md:text-[20px] md:leading-10 ">
                        I'm an aspiring software engineer equipped with skills in Java, JavaScript, React, Next.js, Docker and AWS cloud. As a recent graduate, I'm passionate about crafting digital products that put user needs first. My focus is on utilizing my expertise to collaborate with cross-functional teams, implement accessible and inclusive design, and rapidly build applications that provide seamless experiences across platforms. 
                        </p>

                        <div className="flex  items-center justify-between md:justify-normal gap-3 md:gap-10 md:flex-row">
                            <Link target='_blank' download="CV__Adib_Bensmina-en.pdf" href="https://portfolio-adibbensmina.vercel.app/CV_en_Adib_Bensmina.pdf"   className="px-6 py-3 my-2 transition-all border-2 cursor-pointer w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Resume
                            </Link>
                            <Link href="mailto:adib.bensminaa@gmail.com" className="px-6 py-3 my-2 transition-all border-2 cursor-pointer text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Say Hello
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
