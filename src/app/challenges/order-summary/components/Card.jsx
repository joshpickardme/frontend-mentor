// Imports
import Image from "next/image"
import { easeIn, motion } from "framer-motion"
import { useState } from "react"

// Components
import Plan from "./Plan"

export default function Card() {
    return (
        <motion.div initial={{y: 350, x: -1700, rotateZ: -180}} animate={{y: 0, x: 0, rotateZ: 0}} transition={{type: 'spring', bounce: 0.4, duration: 1}} className="flex rounded-[20px] bg-white shadow-lg flex-col w-[327px] z-10 h-[567px] sm:w-[450px] sm:h-[697px] sm:max-h-[697px]">
            <Image className="min-w-full rounded-tl-[20px] rounded-tr-[20px]" src={'/order-summary/illustration-hero.svg'} width={450} height={220}></Image>
            <div className="flex flex-col p-6 sm:p-12 h-full max-h-full gap-4 justify-between">
                <h1 className="text-center text-order-dark-blue font-bold text-[22px] sm:text-[28px]">Order Summary</h1>
                <p className="text-center text-[15px] sm:text-[16px] text-order-desaturated-blue">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <Plan></Plan>
                <div className="flex flex-col gap-5">
                    <button className="b bg-order-bright-blue min-w-full hover:bg-order-purple duration-150 text-white rounded-lg min-h-[50px] font-bold">Proceed to Payment</button>
                    <button className="min-w-full text-order-desaturated-blue hover:text-order-dark-blue duration-150 font-bold text-[15px]">Cancel Order</button>
                </div>
            </div>
        </motion.div>
    )
}