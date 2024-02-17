"use client"

// Imports
import { useState } from "react"

// Components
import Plan from "./Plan"

export default function PlanForm() {

    // State
    const [duration, setDuration] = useState("Monthly")


    function updateDuration() {
        if(duration === "Monthly") setDuration('Yearly')
        if(duration === "Yearly") setDuration('Monthly')
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-[18px]">
                <Plan icon={'/multi-step-form/icon-arcade.svg'} title={'Arcade'} price={duration == 'Monthly' ? '$9/mo' : '$90/yr'} duration={duration} ></Plan>
                <Plan icon={'/multi-step-form/icon-advanced.svg'} title={'Advanced'} price={duration == 'Monthly' ? '$12/mo' : '$120/yr'} duration={duration} ></Plan>
                <Plan icon={'/multi-step-form/icon-pro.svg'} title={'Pro'} price={duration == 'Monthly' ? '$15/mo' : '$150/yr'} duration={duration} ></Plan>
            </div>
            <div className="flex w-full h-12 gap-6 rounded-[8px] items-center justify-center bg-multi-step-very-light-gray">
                <p className={`${duration == 'Monthly' ? 'text-multi-step-denim' : 'text-multi-step-gray'} text-[14px] font-medium`}>Monthly</p>
                <button onClick={updateDuration}>+</button>
                <p className={`${duration == 'Yearly' ? 'text-multi-step-denim' : 'text-multi-step-gray'} text-[14px] font-medium`}>Yearly</p>
            </div>
        </div>
    )
}