"use client"

// Imports
import { useState } from "react"

// Components
import Card from "./components/Card"
import DesktopSteps from "./components/DesktopSteps"


export default function multiStepForm() {

    const [currentStep, setCurrentStep] = useState(1)

    return (
        <main className="flex bg-multi-step-bg  min-w-full min-h-screen justify-center items-center">
            <Card>
                <DesktopSteps currentStep={currentStep} setCurrentStep={setCurrentStep}></DesktopSteps>
            </Card>
        </main>
    )
}