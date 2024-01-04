// Imports
import Image from "next/image"
import { motion } from "framer-motion"


export default function Icon() {
    return (
        <motion.div whileHover={{rotateZ: 360}} transition={{rotateZ: {duration: 0.5}, scale: {duration: 0.05}}} whileTap={{scale: 1.1}} className="flex items-center justify-center w-[40px] h-[40px] sm:w-[51px] sm:h-[51px] rounded-full bg-rating-dark-blue">
            <Image alt="star icon" src={'/interactive-rating/icon-star.svg'} width={16} height={16}></Image>
        </motion.div>
    )
}