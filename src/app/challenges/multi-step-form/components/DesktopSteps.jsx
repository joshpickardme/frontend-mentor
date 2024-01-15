"use client"

import Image from "next/image"
import Step from "./Step"
import steps from "../data/stepsData"

export default function desktopSteps({currentStep, setCurrentStep}) {
    return (
        <div className="hidden lg:flex h-full w-[274px] bg-red-600 rounded-[10px] ">
            <Image className="absolute z-0 object-cover rounded-[10px]" src={'/multi-step-form/bg-sidebar-desktop.svg'} width={274} height={300}></Image>
            <div className="flex flex-col z-10 rounded-[10px] gap-8 pt-10 pl-8 min-h-full w-full">
                {steps.map((step) => <Step key={step.number} number={step.number} step={step.step} currentStep={currentStep} setCurrentStep={setCurrentStep}></Step>)}
            </div>
        </div>
    )
}