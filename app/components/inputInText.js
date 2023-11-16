'use client'
import { useState, useEffect } from "react"

export default function InputInText({ word, correctUsage, setVariants }) {
    const [ inputValue, setInputValue ] = useState('')

    useEffect(() => {
        if(inputValue === correctUsage) {
            setTimeout(() => {
                setVariants((prevVariants) => prevVariants.map(i => (i.word === word ? {...i, used: true } : i )))
            }, 2000)
        } else {
            setTimeout(() => {
                setVariants((prevVariants) => prevVariants.map(i => (i.word === word ? {...i, used: false } : i )))
            }, 2000)
        }
    }, [inputValue])

    return (
        <input className={correctUsage === inputValue ? 'green' : 'default'} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    )
}