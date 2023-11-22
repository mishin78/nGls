'use client'
import Image from "next/image"
import { useState } from "react"

export default function DerDiDas({ correctValue }) {
    const [ value, setValue ] = useState('')
    const [ isOpen, setIsOpen ] = useState(false)

    const chooseValue = (string) => {
        setIsOpen(false)
        setValue(string)
    }


    return (
        <div className={value === correctValue ? 'derDiDas' : "derDiDasDefault"} >
            <div onClick={() => setIsOpen(!isOpen)} className="input">
                <h5 className={value === correctValue ? 'correct' : 'wrong'}>
                    {value}
                </h5>
                <Image className={isOpen ? 'open' : 'closed'} src='/arrow.svg' width={20} height={20} alt='arrow'/>
            </div>
             <div className={isOpen ? "openedModule" : "hiddenModule"}>
                <h4 onClick={() => chooseValue('der')}>der</h4>
                <h4 onClick={() => chooseValue('die')}>die</h4>
                <h4 onClick={() => chooseValue('das')}>das</h4>
            </div>
        </div>
    )
}