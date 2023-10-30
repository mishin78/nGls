'use client'
import React, { useState, useEffect } from "react"
import { flushSync } from "react-dom"
import { Fragment } from "react"



export default function TextExercese1() {
    const [inputValues, setInputValues ] = useState(['', '', '', '', '', ''])
    const [variants, setVariants] = useState(writingTest)


    function changeRightInput(e, num) {
        flushSync(() => {
            setInputValues(inputValues.map((i, idx) => {
                if(num === idx) return e.target.value
                else return i
            }))
        })
        setVariants(variants.map(i => {
            if(inputValues.includes(i.word)) return {...i, used: true}
            else return {...i, used: false}
        }))
    }


    //useEffect(() => {
    //    setVariants(variants.map(i => {
    //        if(inputValues.includes(i.word)) return {...i, used: true}
    //        else return {...i, used: false}
    //    }))
    //})

    return (
        <main>
              <div className="writingTest">
                    <div className="variants">
                        {variants.map(i => {
                            return (
                                <Fragment key={i.word}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} </p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className="text">
                        <p>Dear Sir/Madam,</p>
                        <p>I am writing in 
                        <span>1</span><input className={inputValues[0] === 'also' ? 'green' : 'default'} value={inputValues[0]} onChange={(e) => changeRightInput(e, 0)}/> 
                        o the home exchange service that you offer on your website. We are a family of four who have been considering the possibility of 
                        exchanging our main home for some time and we would be 
                        <span>2</span><input className={inputValues[1] === 'faithfully' ? 'green' : 'default'} value={inputValues[1]} onChange={(e) => changeRightInput(e, 1)}/>
                        if you could answer a few questions. 
                        <span>3</span><input className={inputValues[2] === 'forward' ? 'green' : 'default'} value={inputValues[2]} onChange={(e) => changeRightInput(e, 2)}/>
                         , I would like to 
                         <span>4</span><input className={inputValues[3] === 'reference' ? 'green' : 'default'} value={inputValues[3]} onChange={(e) => changeRightInput(e, 3)}/>
                        if some kind of insurance is included in the fee that you charge for your services. We have our own home insurer, but we are not sure if we 
                        should talk to them before doing an exchange. I would 
                        <span>5</span><input className={inputValues[4] === 'know' ? 'green' : 'default'} value={inputValues[4]} onChange={(e) => changeRightInput(e, 4)}/> some information on this point. I would 
                        <span>6</span><input className={inputValues[5] === 'first of all' ? 'green' : 'default'} value={inputValues[5]} onChange={(e) => changeRightInput(e, 5)}/> 
                        like to know if pets can be included in the exchange. We have a cat and we do not have anybody to look after him while we are away. Could you 
                        tell me if exchanging pets or leaving a pet in the care of the people who are coming to your home is a common practice?
                        </p>
                    </div>
                </div>
        </main>
    )
}

//TO DO: move to separate file
const writingTest = [
    { word: 'appreciate', used: false },
    { word: 'also', used: false },
    { word: 'faithfully', used: false },
    { word: 'finally', used: false },
    { word: 'first of all', used: false },
    { word: 'forward', used: false },
    { word: 'further', used: false },
    { word: 'grateful', used: false },
    { word: 'know', used: false },
    { word: 'mind', used: false },
    { word: 'reference', used: false }
]