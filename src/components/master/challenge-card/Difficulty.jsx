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
                setColourBg('bg-cyan-500')
                setColourOutline('outline-cyan-500')
                setColourText('text-cyan-500')
                setTitle('NEWBIE')
                break;
            case 2:
                setColourBg('bg-lime-500')
                setColourOutline('outline-lime-500')
                setColourText('text-lime-500')
                setTitle('JUNIOR')
                break;
            case 3:
                setColourBg('bg-yellow-500')
                setColourOutline('outline-yellow-500')
                setColourText('text-yellow-500')
                setTitle('INTERMEDIATE')
                break;
            case 4:
                setColourBg('bg-orange-500')
                setColourOutline('outline-orange-500')
                setColourText('text-orange-500')
                setTitle('ADVANCED')
                break;
            case 5:
                setColourBg('bg-red-500')
                setColourOutline('outline-red-500')
                setColourText('text-red-500')
                setTitle('GURU')
                break;
        }
    }, [])



    return (
        <div className={`flex flex-row items-center justify-between h-[23px] outline outline-2 ${colourOutline} rounded-lg`}>
            <div className={`w-6 ${colourBg} flex items-center justify-center outline outline-2 ${colourOutline} rounded-l-lg`}>
                <p className={`text-sm font-bold text-white`}>{number}</p>
            </div>
            <p className={`p-2 text-sm text-end font-bold ${colourText}`}>{title}</p>
        </div>
    )
}