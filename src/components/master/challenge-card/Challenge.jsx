// Imports
import Image from "next/image"
import Link from "next/link"

// Components
import Difficulty from "./Difficulty"
import Language from "./Language"

export default function Challenge({title, link, languages, difficulty, description, image}) {
    return (
        <div className="flex flex-col w-screen max-w-[383px] h-[523px] rounded-lg outline outline-1 outline-gray-200 shadow-md">
            <div className="overflow-hidden">
                <Link href={link}><Image className="min-w-full object-contain hover:scale-105 duration-200 rounded-t-lg cursor-pointer" width={200} height={200} src={image}></Image></Link>
            </div>
            
            <div className="flex flex-col p-5 gap-5">
                <h1 className="text-2xl cursor-pointer hover:underline"><Link href={link}>{title}</Link></h1>
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row gap-2">
                        {languages.map((language) => <Language language={language} />)}
                    </div>
                    <div className="flex">
                        <Difficulty number={difficulty}></Difficulty>
                    </div>
                </div>
                <p className="text-slate-400">{description}</p>
            </div>
        </div>
    )
}