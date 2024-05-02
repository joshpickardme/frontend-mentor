"use client" 

// Imports
import { useState } from "react"
import { motion } from "framer-motion"
import { AnimatePresence } from "framer-motion"

// Components
import Score from "./components/Score"
import Icon from "./components/Icon"
import HowCard from "./components/HowCard"
import ThanksCard from "./components/ThanksCard"
import BackV2 from "@/components/master/utils/BackV2"



export default function rating() {

    const [scoreActive, setScoreActive] = useState(0)
    const [howActive, setHowActive] = useState(true)
    const scores = [1,2,3,4,5]


    return (
        <main className="flex bg-rating-very-dark-blue min-w-full min-h-screen justify-center items-center">
            <BackV2 fem={'https://www.frontendmentor.io/solutions/interactive-rating-with-framer-motion-animations-cTYntoc2IF'} git={"https://github.com/joshpickardme/frontend-mentor/tree/main/src/app/challenges/interactive-rating"} white={true}></BackV2>
            {howActive && 
                <HowCard scores={scores} scoreActive={scoreActive} setScoreActive={setScoreActive} setHowActive={setHowActive} />
            }
            {!howActive && 
                <ThanksCard scoreActive={scoreActive} />
            }
        </main>
        
    )
}