'use client'
import { useState, useEffect } from "react"
import { grammarElementaryFirstText } from "../../data/exercises"
import SelectInText from "@/app/components/selectInText"
import { Fragment } from "react"
import Select from 'react-select'
import SelectInEx from "@/app/components/selectInEx"

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

    const options = [
        { value: 'chocolate', label: 'chocolate' },
        { value: 'strawberry', label: 'strawberry' },
        { value: 'vanilla', label: 'vanilla' }
      ]

    return (
        <main className="grammarElementary">
{/*               {text.map(({id, text, value, options, open}) => {
                    return (
                        <Fragment key={id}>
                            <span>{text}</span>
                            <SelectInText value={value} open={open} options={options} change={change} optionsOpen={optionsOpen} id={id} />
                        </Fragment>
                    )
                })}  */}
                <p>I didn't see anybody behind me, but I knew that I 
                    <Select className="sel" options={options} /> It was my instinct, I could feel it. I saw that a bus
                    <SelectInEx optoion0='chocolate' optoion1='strawberry' optoion2='vanilla'/>at the bus stop at the end of the street. I ran and ____ it. I didn't ask the bus driver where 4 
                    because it didn't matter, I just wanted to ____ as fast as possible.
                </p>
        </main>
    )
}