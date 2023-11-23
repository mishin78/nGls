'use client'
import { useState } from "react"

export default function InputTest200px({ correctWord }) {
    const [ value, setValue ] = useState('')

    return <input className={correctWord === value ? 'c' : 'd'} value={value} onChange={e => setValue(e.target.value)}/>
}