"use client"
import Image from "next/image"

export default function notification({read, name, image, text, message, post, link, ago, picture}) {
    return (
        <div className={`${read ? 'bg-white' : 'bg-notifications-light-grey-blue'} rounded-[8px] w-full p-5 flex flex-row items-center justify-between `}>
            <div className="flex flex-row gap-2 sm:gap-5">
                <Image className="max-h-[45px] max-w-[45px]" height={45} width={45} src={image}></Image>
                <div className="flex flex-col">
                    <p className="m-0 p-0 h-max">
                        <span className="text-notifications-very-dark-grey-blue hover:text-notifications-blue transition-all cursor-pointer w-max text-[14px] sm:text-[16px] font-extrabold font-jakarta ">{name} </span>
                        <span className="text-notifications-dark-grey-blue text-[14px] w-max font-jakarta sm:text-[16px]">{text} </span>
                        {post && <a className="font-bold cursor-pointer text-[14px] w-max text-notifications-dark-grey-blue hover:text-notifications-blue transition-all sm:text-[16px]  font-jakarta">{post}</a>}
                        {link && <a className="font-bold cursor-pointer text-[14px] w-max text-notifications-blue sm:text-[16px]  font-jakarta">{link} </a>}
                        {!read && <span className="min-h-[8px] min-w-[8px] rounded-full inline-flex bg-notifications-red"></span>}
                    </p>
                    <p className="text-notifications-grey-blue font-medium text-[14px] sm:text-[16px] font-jakarta">{ago}</p>
                    {message &&
                    <div className="mt-2 rounded-[5px] p-4 outline outline-1 outline-notifications-very-light-grey-blue">
                        <p className="font-jakarta text-notifications-dark-grey-blue text-[14px] sm:text[16px]">{message}</p>
                    </div>
                    }
                </div>
                
            </div>
            {picture && <Image className="max-h-[45px] max-w-[45px] rounded-[7px]" src={picture} height={45} width={45}></Image>}

        </div>
    )
}