export default function Step({number, step, currentStep, setCurrentStep}) {

    function changeStep() {
        if(number == currentStep) return
        setCurrentStep(number)
    }

    return (
        <button onClick={changeStep} className={`flex z-10 ${currentStep == number ?  'cursor-default': 'cursor-pointer'} flex-row gap-4   h-[40px] w-max`}>
            <div className={`flex w-[40px] h-[40px] items-center justify-center  ${currentStep == number || currentStep == number + 1 && number == 4 ? 'bg-multi-step-sky-blue' : 'outline outline-1 outline-white'} rounded-full duration-100`}>
                <h1 className={`${currentStep == number || currentStep == number + 1 && number == 4 ? 'text-multi-step-denim' : 'text-white'} text-[16px] font-bold duration-100`}>{number}</h1>
            </div>
            <div className="h hidden flex-col max-h-full items-start justify-between lg:flex">
                <p className="t text-multi-step-light-blue text-[13px] font-bold">STEP {number}</p>
                <h1 className="text-white font-bold text-[16px]">{step}</h1>
            </div>
        </button>
    )
}