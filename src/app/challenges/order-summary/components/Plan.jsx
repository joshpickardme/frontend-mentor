// Imports
import Image from "next/image"

export default function Plan() {
    return (
        <div className="flex flex-row justify-between items-center bg-order-very-pale-blue min-w-full rounded-[11px] h-[98px] p-4 sm:p-6">
            <div className="flex flex-row gap-5 items-center">
                <Image className="w-12 h-12" src={'/order-summary/icon-music.svg'} height={48} width={48}></Image>
                <div className="flex-col items-center">
                    <h1 className="b text-order-dark-blue font-bold text-order text-sm sm:text-base">Annual Plan</h1>
                    <p className="t text-order-desaturated-blue font-medium text-sm sm:text-base">$59.99/year</p>
                </div>
            </div>
            <button className=" text-order-bright-blue font-bold text-[13px] sm:text-[14px] underline hover:no-underline duration-200 hover:text-order-purple ">Change</button>
        </div>
    )
}