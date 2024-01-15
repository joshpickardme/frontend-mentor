"use client"

// Imports
import Image from "next/image"
import steps from "../data/stepsData"

// Components
import Step from "./Step"


export default function MobileSteps({currentStep, setCurrentStep}) {
    return (
        <div className="top-0 w-full absolute lg:hidden">
            <Image className="absolute w-full z-0" src={'/multi-step-form/bg-sidebar-mobile.svg'} width={100} height={100}></Image>
            <div className="flex flex-row w-full justify-center mt-8 gap-4">
                {steps.map((step) => <Step key={step.number} number={step.number} step={step.step} currentStep={currentStep} setCurrentStep={setCurrentStep}></Step>)}
            </div>
            
        </div>
    )
}