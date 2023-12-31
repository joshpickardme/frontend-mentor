// Imports
import Link from "next/link";

// Icons
import { FaArrowCircleLeft } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Back() {
    return (
        <div className="absolute left-8 top-8 text-center">
            <div className="flex flex-row gap-7 items-center w-fit rounded-full ml-auto mr-auto justify-center">
                <Link href={'/'}><FaArrowCircleLeft className="scale-[2] text-black cursor-pointer opacity-20 hover:opacity-100 duration-200" /></Link>
                <a target="_blank" href="https://www.frontendmentor.io/profile/joshpickardme"><SiFrontendmentor className="scale-[2] text-black cursor-pointer opacity-20 hover:opacity-100 duration-200" /></a>
                <a target="_blank" href="https://github.com/joshpickardme"><FaGithub className="scale-[2] text-black cursor-pointer opacity-20 hover:opacity-100 duration-200" /></a>
            </div>
            
        </div>
        
    )
}