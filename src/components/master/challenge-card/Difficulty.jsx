"use client"

// Imports
import { useEffect, useState } from "react"

export default function Difficulty({number}) {

    const [colourBg, setColourBg] = useState('')
    const [colourOutline, setColourOutline] = useState('')
    const [colourText, setColourText] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        switch(number) {
            case 1:
                setColourBg('bg-fem-cyan')
                setColourOutline('outline-fem-cyan')
                setColourText('text-fem-cyan')
                setTitle('NEWBIE')
                break;
            case 2:
                setColourBg('bg-fem-lime')
                setColourOutline('outline-fem-lime')
                setColourText('text-fem-lime')
                setTitle('JUNIOR')
                break;
            case 3:
                setColourBg('bg-fem-yellow')
                setColourOutline('outline-fem-yellow')
                setColourText('text-fem-yellow')
                setTitle('INTERMEDIATE')
                break;
            case 4:
                setColourBg('bg-fem-orange')
                setColourOutline('outline-fem-orange')
                setColourText('text-fem-orange')
                setTitle('ADVANCED')
                break;
            case 5:
                setColourBg('bg-fem-red')
                setColourOutline('outline-fem-red')
                setColourText('text-fem-red')
                setTitle('GURU')
                break;
        }
    }, [])



    return (
        <div className={`flex flex-row items-center justify-between h-[23px] outline outline-2 ${colourOutline} rounded-lg`}>
            <div className={`w-6 ${colourBg} flex items-center justify-center outline outline-2 ${colourOutline} rounded-l-lg`}>
                <p className={`text-sm font-poppins font-bold text-white`}>{number}</p>
            </div>
            <p className={`p-2 font-poppins text-sm text-end font-bold ${colourText}`}>{title}</p>
        </div>
    )
}