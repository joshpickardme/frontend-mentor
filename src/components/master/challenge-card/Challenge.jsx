// Imports
import Image from "next/image"

// Components
import Difficulty from "./Difficulty"
import Language from "./Language"

export default function Challenge({title, languages, difficulty, description, image}) {
    return (
        <div className="flex flex-col w-[383px] h-[523px] rounded-lg shadow-md">
            <Image className="min-w-full rounded-t-lg" width={200} height={200} src={'/blog-preview-card.webp'}></Image>
            <div className="flex flex-col p-5 gap-5">
                <h1 className="text-2xl cursor-pointer hover:underline">{title}</h1>
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