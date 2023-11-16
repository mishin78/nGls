'use client'
import { useState, useEffect } from "react"

export default function RepeatedInputInText({ correctUsage, setVariants, index }) {
    const [ inputValue, setInputValue ] = useState('')

    useEffect(() => {
        if(inputValue === correctUsage) {
            setTimeout(() => {
                setVariants((prevVariants) => prevVariants.map((i, idx)=> (idx === index ? {...i, used: true } : i )))
            }, 2000)
        } else {
            setTimeout(() => {
                setVariants((prevVariants) => prevVariants.map((i, idx) => (idx === index ? {...i, used: false } : i )))
            }, 2000)
        }
    }, [inputValue])

    return <input className={correctUsage === inputValue ? 'green' : 'default'} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
}