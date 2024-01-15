// Import
import Image from "next/image"

export default function Plan({icon, title, price}) {
    return (
        <button className="flex text-left flex-row lg:flex-col gap-[14px] outline outline-2 outline-multi-step-border-color hover:outline-multi-step-purple lg:w-[138px] rounded-[8px] p-3 lg:p-4 lg:gap-[39px]">
            <Image src={icon} width={40} height={40}></Image>
            <div>
                <h3 className=" font-semibold text-multi-step-denim text-[16px]">{title}</h3>
                <p className=" text-multi-step-gray text-[14px]">{price}</p>
            </div>

        </button>
    )
}