"use client"

// Imports
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"
import Card from "./components/Card"

// Components
import BackV2 from "@/components/master/utils/BackV2"

export default function qr() {
    return (
        <main className="flex bg-qr-light-gray  min-w-full min-h-screen justify-center items-center">
            <BackV2 fem={'https://www.frontendmentor.io/solutions/qr-code-component-huPxEfPJEX'} git={"https://github.com/joshpickardme/frontend-mentor/tree/main/src/app/challenges/qr-code"}></BackV2>
            <Card>
                <Image className="rounded-[10px]" src={'/qr-code/image-qr-code.png'} width={288} height={288}></Image>
                <div className="flex flex-col items-center gap-4 mt-6 mb-10 min-w-full">
                    <h1 className=" text-qr-dark-navy text-[22px] text-center font-bold">Improve your front-end skills by building projects</h1>
                    <p className="text-qr-gray text-center text-[15px]">Scan the QR code to vist Frontend Mentor and take your coding skills to the next level</p>
                </div>
                
            </Card>
        </main>
    )
}