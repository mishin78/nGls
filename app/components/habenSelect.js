'use client'
import Image from "next/image"
import { useState } from "react"

export default function HabenSelect({ correctValue, capitalLetter }) {
    const [ value, setValue ] = useState('...')
    const [ isOpen, setIsOpen ] = useState(false)

    const chooseValue = (string) => {
        setIsOpen(false)
        setValue(string)
    }


    return (
        <div className={value === correctValue ? 'seinHabenSelectCorrect' : "seinHabenSelect"} >
            <div onClick={() => setIsOpen(!isOpen)} className="input">
                <h5 className={value === correctValue ? 'correct' : (value === '...' ? 'default' : 'wrong')}>
                    {value}
                </h5>
                <Image className={isOpen ? 'open' : 'closed'} src='/arrow.svg' width={20} height={20} alt='arrow'/>
            </div>
            {capitalLetter 
            ? <div className={isOpen ? "openedModule" : "hiddenModule"}>
                <h4 onClick={() => chooseValue('Hat')}>Hat</h4>
                <h4 onClick={() => chooseValue('Hast')}>Hast</h4>
                <h4 onClick={() => chooseValue('Habt')}>Habt</h4>
                <h4 onClick={() => chooseValue('Habe')}>Habe</h4>
                <h4 onClick={() => chooseValue('Haben')}>Haben</h4>
              </div>
            : <div className={isOpen ? "openedModule" : "hiddenModule"}>
                <h4 onClick={() => chooseValue('hat')}>hat</h4>
                <h4 onClick={() => chooseValue('hast')}>hast</h4>
                <h4 onClick={() => chooseValue('habt')}>habt</h4>
                <h4 onClick={() => chooseValue('habe')}>habe</h4>
                <h4 onClick={() => chooseValue('haben')}>haben</h4>
            </div>}
        </div>
    )
}
   