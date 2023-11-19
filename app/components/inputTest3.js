'use client'
import { useState } from "react"

export default function InputTest3({ correctWord }) {
    const [ value, setValue ] = useState('')

    return (
        <input className={correctWord === value && 'correct'} value={value} onChange={e => setValue(e.target.value)}/>
    )
}