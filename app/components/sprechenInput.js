'use client'
import Image from "next/image"
import { useState } from "react"

export default function SprechenInput({ correctValue, capitalLetter }) {
    const [ value, setValue ] = useState('...')
    const [ isOpen, setIsOpen ] = useState(false)

    const chooseValue = (string) => {
        setIsOpen(false)
        setValue(string)
    }


    return (
        <div className={value === correctValue ? 'sprechenInputBoxBlue' : "sprechenInputBox"} >
            <div onClick={() => setIsOpen(!isOpen)} className="input">
                <h5 className={value === correctValue ? 'correct' : (value === '...' ? 'default' : 'wrong')}>
                    {value}
                </h5>
                <Image className={isOpen ? 'open' : 'closed'} src='/arrow.svg' width={20} height={20} alt='arrow'/>
            </div>
            {capitalLetter 
            ? <div className={isOpen ? "openedModule" : "hiddenModule"}>
                <h4 onClick={() => chooseValue('Sprechen')}>Sprechen</h4>
                <h4 onClick={() => chooseValue('Spricht')}>Spricht</h4>
                <h4 onClick={() => chooseValue('Spreche')}>Spreche</h4>
                <h4 onClick={() => chooseValue('Sprecht')}>Sprecht</h4>
                <h4 onClick={() => chooseValue('Sprichst')}>Sprichst</h4>
              </div>
            : <div className={isOpen ? "openedModule" : "hiddenModule"}>
                <h4 onClick={() => chooseValue('sprechen')}>sprechen</h4>
                <h4 onClick={() => chooseValue('spricht')}>spricht</h4>
                <h4 onClick={() => chooseValue('spreche')}>spreche</h4>
                <h4 onClick={() => chooseValue('sprecht')}>sprecht</h4>
                <h4 onClick={() => chooseValue('sprichst')}>sprichst</h4>
            </div>}
        </div>
    )
}