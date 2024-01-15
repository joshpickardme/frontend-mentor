import DesktopSteps from "./DesktopSteps"


export default function Card({children}) {
    return (
        <div className="flex z-10 flex-col ml-4 mr-4 lg:ml-0 lg:mr-0 lg:flex-row gap-[100px] mb-6 bg-white shadow-[0px_25px_40px_-20px_rgba(0, 0, 0, 0.10);] rounded-[15px] w-[343px]  lg:w-[940px] lg:h-[600px] pl-6 pr-6 pt-8 pb-8 lg:p-4">
            {children}
        </div>
    )
}