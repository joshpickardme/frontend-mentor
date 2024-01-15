"use client"



export default function DesktopNavigation({currentStep, setCurrentStep}) {

    function goBack() {
        if(currentStep == 1) return
        setCurrentStep(currentStep - 1)
    }

    function goForward() {
        if(currentStep == 5) return
        setCurrentStep(currentStep + 1)
    }

    return (
        <div className="hidden relative lg:flex bg-white w-full h-[72px]">
            <div className="flex flex-row items-center justify-between min-w-full h-full">
                <button onClick={goBack} className={`text-[14px] ${currentStep == 1 && 'text-transparent cursor-default'} text-multi-step-gray font-medium`}>Go Back</button>
                <button onClick={goForward} className={`${currentStep == 4 ? 'bg-multi-step-purple' : 'bg-multi-step-denim '} hover:bg-[#164A8A] text-white pt-3 pb-3 pl-4 pr-4 rounded-[4px]`}>{currentStep == 4 ? 'Confirm' : 'Next Step'}</button>
            </div>
        </div>
    )
}