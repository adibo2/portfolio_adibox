"use client"
import { fadeIn } from "@/utils/motionTransitions"
import { AvatarWorks } from "../AvatarWorks/AvatarWorks"
import { Circle } from "../Circle"
import { motion } from 'framer-motion'
import { cardContent } from "./Work.data"
import { useState } from "react"
import { FiGithub, FiExternalLink } from "react-icons/fi";

import Link from "next/link"

export function Work() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

    const handleClick = (index: number) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }

    const cardVariants = {
        expanded: {
            width: "360px",
            opacity: 1
        },
        collapsed: {
            width: "200px",
            opacity: 0.5
        }
    }

    return (
        <div className=" mt-10 h-screen">
            <AvatarWorks />
            <Circle />
            <div className="grid pb-32 md:min-h-screen mt-36 md:mt-0 place-items-center">
                <div>
                    <motion.h1
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="my-5 mt-5 text-4xl text-center md:text-4-xl"
                    >MY   <span className="text-secondary">Project.</span>
                    </motion.h1>
                    <motion.div
                        className="flex flex-col items-center h-full gap-5 px-2 md:flex-row"
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                    >
                        {cardContent.map(({ id, title, imageUrl, description, skills }) => (
                            <motion.div key={id}
                                className={`card cursor-pointer h-[400px] bg-auto bg-no-repeat bg-center rounded-[20px] ${id === expandedIndex && 'expanded'}`}
                                initial={{ opacity: 1 }}
                                variants={cardVariants}
                                animate={id === expandedIndex ? 'expanded' : 'collapsed'}
                                exit={{
                                    opacity: 1
                                }}
                                transition={{ duration: 0.5 }}
                                onClick={() => handleClick(id)}
                                style={{
                                    backgroundImage: `url(/assets/${imageUrl})`
                                }}
                            >
                                <div className="flex flex-col justify-end h-full">
                                    <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-95 min-h-[100px] flex flex-col items-center justify-center p-3">
                                        <h2 className="text-xl font-semibold text-center text-white">{title}</h2>
                                        {id === expandedIndex && (
                                            <>
                                                <p>{description}</p>
                                                <div className="flex gap-5 mt-2">
                                                    {skills.map((data, index) => (
                                                        <p key={index}>{data.icon}</p>
                                                    ))}
                                                </div>
                                            </>
                                        )}
                                        <ul className="flex items-center gap-4 mt-2">
                                            <li className=" block  list-none">
                                                <Link
                                                    href="/"
                                                    className=""
                                                >
                                                    <FiGithub className=" w-7 h-7 md:w-8 md:h-8"></FiGithub>
                                                </Link>
                                            </li>
                                            <li className="project-info-links-item">
                                                <Link
                                                    href="/"
                                                >
                                                    <FiExternalLink className=" w-7 h-7 md:w-8 md:h-8" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
