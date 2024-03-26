import Image from "next/image"
import SocialButton from "./components/SocialButton"

const data = [
    {
        name: "GitHub",
        url: "https://www.github.com",
    },
    {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com"
    },
    {
        name: "Twitter",
        url: "https://www.x.com"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com"
    }
]

import Back from "@/components/master/utils/Back"

export default function SocialLinks() {
    return (
        <>
        <Back white={true}></Back>
        <main className="flex bg-sociallinks-black  min-w-full min-h-screen justify-center items-center">
            <div className="flex flex-col gap-6 items-center bg-sociallinks-dark-grey w-[384px] h-[611px] rounded-[12px] shadow-lg p-10">
                <Image className="w-[88px] h-[88px] rounded-full" src={"/social-links/avatar-jessica.jpeg"} width={88} height={88}></Image>
                <div className="flex flex-col gap-2 items-center">
                    <h1 className="text-white text-[24px] font-semibold">Jessica Randall</h1>
                    <h2 className=" text-sociallinks-neon-green font-bold text-[14px]">London, United Kingdom</h2>
                </div>
                <p className="text-sociallinks-white">"Front-end developer and avid reader."</p>
                <div className="flex gap-3 flex-col">
                    {data.map((d) => <SocialButton name={d.name} url={d.url}/>)}
                </div>
            </div>
        </main>
        </>
    )
}