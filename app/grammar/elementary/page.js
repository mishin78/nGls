'use client'
import { useState } from "react"
import { grammarElementaryFirstText } from "../exercises"
import Image from 'next/image'

export default function Elementary() {
    const [ text, setText ] = useState(grammarElementaryFirstText)

    function change(e, content, id) {
        e.stopPropagation()
        let arr = text.map((i, index) => {
            if(id === index) return {...i, value: content, open: false}
            else return i
        })
        setText(arr)
    }

    function optionsOpen(id) {
        let arr = text.map((i, index)=> {
            if(id === index) return {...i, open: !i.open}
            else return i
        })
        setText(arr)
    }

    return (
        <main className="grammarElementary">
                {text.map(({id, text, value, options, open}) => {
                    return (
                        <>
                            <span>{text}</span>
                            <div onClick={() => optionsOpen(id)} className="box">
                                <h5>{value}</h5>
                                <Image src='/arrow.svg' width={20} height={20} alt='arrow'/>
                                {open && <div className="options">
                                    {options.map(j => <button onClick={(e) => change(e,j.content, id)} key={j.content}>{j.content}</button>)}    
                                </div>}
                            </div>
                        </>
                    )
                })}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </main>
    )
}