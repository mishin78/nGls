'use client'
import React, { useState, useEffect } from "react"
import { flushSync } from "react-dom"
import { Fragment } from "react"
import InputInText from "@/app/components/inputInText"
import RepeatedInputInText from "@/app/components/repeatedInputInText"


export default function TextExercese1() {
    const [variants, setVariants] = useState(writingTest)

    return (
        <main className="test1">
            <h1>Vokalwechsel oder nicht? Ergänzen Sie die Verben in der richtigen Form</h1>
            <div className="writingTest">
                <div className="variants">
                    {variants.map((i, idx) => {
                        return (
                            <Fragment key={idx}>
                                <p className={i.used ? 'used' : 'unused'}>{i.word} </p>
                            </Fragment>
                        )
                    })}
              </div>
              <div className="text">
                  <p>Olli <InputInText word={'nehmen'} correctUsage={'nimmt'} setVariants={setVariants} /> immer  den  Bus zur Arbeit.</p>  
                  <p> Mittags <InputInText word={'lesen'} correctUsage={'liest'} setVariants={setVariants} /> er ein Buch</p>
                  <p>und <InputInText word={'sehen'} correctUsage={'sieht'} setVariants={setVariants} /> einen Film im Fernsehen.</p>
                  <p>Am Nachmittag <RepeatedInputInText correctUsage={'geht'} setVariants={setVariants} index={1}/> er aus dem Haus.</p>  
                  <p>Er <InputInText word={'fahren'} correctUsage={'fährt'} setVariants={setVariants} /> mit dem Fahrrad in die Stadt.</p> 
                  <p>Am Abend <RepeatedInputInText correctUsage={'geht'} setVariants={setVariants} index={6} /> er früh ins Bett.</p>
                  <p>Olli <InputInText word={'schlafen'} correctUsage={'schläft'} setVariants={setVariants} /> immer gut.</p>
              </div>
            </div>
        </main>
    )
}

//TO DO: move to separate file
const writingTest = [
    { word: 'schlafen', used: false },
    { word: 'gehen', used: false },
    { word: 'lesen', used: false },
    { word: 'sehen', used: false },
    { word: 'nehmen', used: false },
    { word: 'fahren', used: false },
    { word: 'gehen', used: false }
]