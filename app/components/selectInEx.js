'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function SelectInEx({ optoion0, optoion1, optoion2 }) {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ value, setValue ] = useState('')

    function chooseOption(option) {
        setIsOpen(false)
        setValue(option)
    }

    return (
        <div className='selectBox'>
            <div onClick={() => setIsOpen(!isOpen)} className='value'>
                <h5>{value}</h5>
                <Image src='/arrow.svg' width={20} height={20} alt='arrow'/>
            </div>
            {isOpen && 
                <div className='hidden'>
                    <button onClick={() => chooseOption(optoion0)}>{optoion0}</button>
                    <button onClick={() => chooseOption(optoion1)}>{optoion1}</button>
                    <button onClick={() => chooseOption(optoion2)}>{optoion2}</button>
                </div>
            }
        </div>
    )
}