"use client"

// Imports
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

// Components
import BackV2 from "@/components/master/utils/BackV2"

export default function newsletter() {

    const [email, setEmail] = useState('')
    const [failState, setFailState] = useState(false)
    const [successState, setSuccessState] = useState(false)

    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
      }

    function handleSubscribe() {
        console.log('handling subscribe')
        if(isValidEmail(email)) {
            setFailState(false)
            setSuccessState(true)
        } else {
            setFailState(true)
        }
        
    }

    function handleDismiss() {
        setEmail('')
        setSuccessState(false)
    }

    return (
        <main className="flex bg-news-pale-navy min-w-full min-h-screen justify-center items-center">
            <BackV2 fem={'https://www.frontendmentor.io/solutions/react-tailwind-notifications-page-TdvsUsZMDk'} git={"https://github.com/joshpickardme/frontend-mentor/tree/main/src/app/challenges/newsletter-signup"}></BackV2>
            {!successState &&
            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.4}} className="flex flex-col gap-6 lg:gap-20 lg:flex-row lg:items-center lg:justify-between lg:ml-6 lg:mr-6 h-screen bg-white w-screen lg:w-[928px] lg:p-6 lg:pl-16 lg:h-[641px] lg:shadow-lg lg:rounded-3xl">
                <Image className="w-screen max-w-full max-h-[375px] object-cover lg:hidden" src={'/newsletter/illustration-sign-up-mobile.svg'} height={100} width={100}></Image>
                <div className="flex flex-col gap-3 lg:gap-6 pl-6 pr-6 lg:pl-0 lg:pr-0 lg:w-[420px]">
                    <h1 className=" text-news-dark-navy text-[40px] lg:text-[56px] lg:whitespace-nowrap font-bold">Stay updated!</h1>
                    <p className="text-news-dark-navy text-[16px]">Join 60,000+ product managers receiving monthly updates on:</p>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row gap-4">
                            <Image src={'/newsletter/icon-list.svg'} height={21} width={21}></Image>
                            <p className="text-news-dark-navy text-[16px] lg:whitespace-nowrap">Product discovery and building what matters</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Image src={'/newsletter/icon-list.svg'} height={21} width={21}></Image>
                            <p className="text-news-dark-navy text-[16px]">Measuring to ensure updates are a success</p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Image src={'/newsletter/icon-list.svg'} height={21} width={21}></Image>
                            <p className="text-news-dark-navy text-[16px]">And much more!</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4 gap-2">
                        <div className="flex flex-row justify-between">
                            <p className="font-bold text-sm text-news-dark-navy">Email address</p>
                            {failState && <p className="font-bold text-sm text-news-vermellion">Valid email required</p>}
                        </div>
                        
                        <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="email@company.com" className={`outline outline-1 max-w-96 ${failState ? 'text-news-vermellion outline-news-vermellion' : 'text-news-dark-navy outline-news-grey'}  p-3 rounded-lg`} />
                        <button onClick={handleSubscribe} className="font-bold text-white bg-news-dark-navy active:bg-gradient-to-t max-w-96 from-[#FF6A3A] to-[#FF527B] p-4 rounded-lg mt-5 hover:shadow-lg duration-200 ">Subscribe to monthly newsletter</button>
                    </div>
                </div>
                <Image src={'/newsletter/illustration-sign-up-desktop.svg'}  width={100} height={100} className="hidden lg:flex w-full object-cover min-h-full max-h[593px] max-w-[400px] rounded-lg"></Image>
            </motion.div>}
            {successState &&
            <motion.div initial={{scale: 0}} animate={{scale: 1}} transition={{duration: 0.4}} className="flex flex-col justify-between pb-11 pt-[149px] md:pb-12 md:pt-12 md:justify-evenly gap-6 pl-4 pr-4 md:ml-6 md:mr-6 h-screen bg-white w-screen md:w-[504px] md:p-12 md:h-[520px] md:shadow-lg md:rounded-3xl">
                <div className="flex flex-col gap-6 md:gap-8">
                    <Image className="" src={'/newsletter/icon-success.svg'} height={64} width={64}></Image>
                    <h1 className=" text-news-dark-navy text-[40px] md:text-[56px] leading-10 md:leading-[56px] font-bold">Thanks for subscribing!</h1>
                    <p className="text-news-dark-navy text-[16px]">A confirmation email has been sent to <span className="font-bold text-news-dark-navy">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <button onClick={handleDismiss} className="font-bold text-white bg-news-dark-navy active:bg-gradient-to-t from-[#FF6A3A] to-[#FF527B] p-4 rounded-lg hover:shadow-lg duration-200 ">Dismiss message</button>
            </motion.div>
            }
        </main>
    )
}