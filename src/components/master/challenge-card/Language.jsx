"use client"

import { useEffect, useState } from "react"

export default function Language({language}) {

    const [colourText, setColourText] = useState('')

    useEffect(() => {
        switch(language) {
            case 'HTML':
                setColourText('text-cyan-600')
                break;
            case 'CSS':
                setColourText('text-blue-600')
                break;
            case 'JS':
                setColourText('text-pink-400')
                break;
            case 'API':
                setColourText('text-lime-500')
                break;
        }
    }, [])



    return (
        <p className={`font-bold text-lg ${colourText}`}>{language}</p>
    )
}