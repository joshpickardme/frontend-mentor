"use client"

// Imports
import { useState } from "react"
import steps from "./data/stepsData"

// Components
import Card from "./components/Card"
import DesktopSteps from "./components/DesktopSteps"
import MobileSteps from "./components/MobileSteps"
import MobileNavigation from "./components/MobileNavigation"
import DesktopNavigation from "./components/DesktopNavigation"
import Content from "./components/Content"
import Header from "./components/Header"
import InfoForm from "./components/InfoForm"
import PlanForm from "./components/PlanForm"


export default function multiStepForm() {

    // State
    const [currentStep, setCurrentStep] = useState(1)

    // Personal Info
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()



    return (
        <main className="flex bg-multi-step-bg  min-w-full min-h-screen justify-center items-center">
            <MobileSteps currentStep={currentStep} setCurrentStep={setCurrentStep}></MobileSteps>
            <Card>
                <DesktopSteps currentStep={currentStep} setCurrentStep={setCurrentStep}></DesktopSteps>
                <div className="flex flex-col justify-between lg:mt-12 lg:w-[450px]">
                    <div className="flex flex-col gap-[35px]">
                        {currentStep < 5 && <Header title={steps[currentStep - 1].title} description={steps[currentStep - 1].description}></Header>}
                        {currentStep == 1 && <InfoForm></InfoForm>}
                        {currentStep == 2 && <PlanForm></PlanForm>}
                    </div>
                    {currentStep < 5 && <DesktopNavigation currentStep={currentStep} setCurrentStep={setCurrentStep}></DesktopNavigation>}
                </div>
            </Card>
            {currentStep != 5 && <MobileNavigation currentStep={currentStep} setCurrentStep={setCurrentStep}></MobileNavigation>}
        </main>
    )
}