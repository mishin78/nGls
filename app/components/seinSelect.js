'use client'
import Image from "next/image"
import { useState } from "react"

export default function SeinSelect({ correctValue, capitalLetter }) {
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
                <h4 onClick={() => chooseValue('Bist')}>Bist</h4>
                <h4 onClick={() => chooseValue('Seid')}>Seid</h4>
                <h4 onClick={() => chooseValue('Bin')}>Bin</h4>
                <h4 onClick={() => chooseValue('Sind')}>Sind</h4>
                <h4 onClick={() => chooseValue('Ist')}>Ist</h4>
              </div>
            : <div className={isOpen ? "openedModule" : "hiddenModule"}>
                <h4 onClick={() => chooseValue('bist')}>bist</h4>
                <h4 onClick={() => chooseValue('seid')}>seid</h4>
                <h4 onClick={() => chooseValue('bin')}>bin</h4>
                <h4 onClick={() => chooseValue('sind')}>sind</h4>
                <h4 onClick={() => chooseValue('ist')}>ist</h4>
            </div>}
        </div>
    )
}
   