"use client"

// Imports
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

// Components
import Back from "@/components/master/utils/Back"
import Card from "./components/Card"

export default function order() {
    return (
        <>
        <Image className="absolute min-w-full min-h-[437px] z-0 h-[437px] hidden sm:block" src={'/order-summary/pattern-background-desktop.svg'} height={100} width={100}></Image>
        <Image className="absolute min-w-full min-h-[194px] z-0 h-[194px] block sm:hidden" src={'/order-summary/pattern-background-desktop.svg'} height={100} width={100}></Image>
        <main className="flex  bg-order-pale-blue  min-w-full min-h-screen justify-center items-center">
            <Back fem={'https://www.frontendmentor.io/solutions/order-summary-component-with-entrance-antimation-r6nDsskZ6v'}></Back>
            <Card></Card>
        </main>
        </>

    )
}