'use client'
import React, { useState, useEffect } from "react"
import { flushSync } from "react-dom"
import { Fragment } from "react"
import InputInText from "@/app/components/inputInText"
import RepeatedInputInText from "@/app/components/repeatedInputInText"


export default function TextExercese1() {
    const [inputValues, setInputValues ] = useState(['', '', '', '', '', '', ''])
    const [variants, setVariants] = useState(writingTest)


    function changeRightInput(e, num) {
        flushSync(() => {
            setInputValues(inputValues.map((i, idx) => {
                if(num === idx) return e.target.value
                else return i
            }))
        })

    }

    useEffect(() => {  
        const updateVariants = (word, condition) => {
            setTimeout(() => {
              setVariants((prevVariants) => prevVariants.map(i => (i.word === word ? { ...i, used: condition } : i)))
            }, 2000)
          }

        const updateRepeatedVariants = (condition, index) => {
          setTimeout(() => {
              setVariants((prevVariants) => prevVariants.map((i, idx)=> (index === idx ? {...i, used: condition} : i)))
          }, 2000)
        }
      
          if (inputValues[0] === 'nimmt') {
            updateVariants('nehmen', true)
          } else {
            updateVariants('nehmen', false)
          }
      
          if (inputValues[1] === 'liest') {
            updateVariants('lesen', true)
          } else {
            updateVariants('lesen', false)
          }

          if (inputValues[2] === 'sieht') {
            updateVariants('sehen', true)
          } else {
            updateVariants('sehen', false)
          }

          if (inputValues[3] === 'geht') {
            updateRepeatedVariants(true, 1)
          } else {
            updateRepeatedVariants(false, 1)
          }

          if (inputValues[4] === 'fährt') {
            updateVariants('fahren', true)
          } else {
            updateVariants('fahren', false)
          }

          if (inputValues[5] === 'geht') {
            updateRepeatedVariants(true, 6)
          } else {
            updateRepeatedVariants(false, 6)
          }

          if (inputValues[6] === 'schläft') {
            updateVariants('schlafen', true)
          } else {
            updateVariants('schlafen', false)
          }

    }, [inputValues[0],inputValues[1],inputValues[2],inputValues[3],inputValues[4],inputValues[5], inputValues[6]])


    return (
        <main>
            <h1 style={{marginInline: '6rem'}}>Vokalwechsel oder nicht? Ergänzen Sie die Verben in der richtigen Form</h1>
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
                        <p> Mittags <InputInText word={'lesen'} correctUsage={'liest'} setVariants={setVariants} /> er ein Buch und <InputInText word={'sehen'} correctUsage={'sieht'} setVariants={setVariants} /> einen Film im Fernsehen.</p>
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