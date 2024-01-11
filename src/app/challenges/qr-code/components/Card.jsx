"use client"

import { motion } from "framer-motion"

export default function Card({children}) {
    return (
        <motion.div initial={{y: 350, x: -1700, rotateZ: -180}} animate={{y: 0, x: 0, rotateZ: 0}} transition={{type: 'spring', bounce: 0.4, duration: 1}} className="flex flex-col w-[320px] h-[497px] p-4 bg-white rounded-[20px] shadow-lg">
            {children}
        </motion.div>
    )
}