'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { type1, type2 } from '@/app/objects'
import { useDispatch, useSelector } from 'react-redux'
import { plusOne } from '@/redux/fetures/slices'


export default function Elementary() {
    const [ isOpen, setIsOpen ] = useState([false, false, false,{hidden: false, hidden1: false}, false, {hidden: false, hidden1: false}])
    const [ ex, setEx ] = useState(type1)

    const [ ex2, setEx2 ] = useState(type2)

    function chanheValue(id, c, index) {
        const state = ex.map((i, idx) => {
            if(idx === id) return {...i, value: c, chooesenIndex: index}
            else return i
        })
        setEx(state)
    }

    function changeType2Index(id, c, index) {
        const state = ex.map((i, idx) => {
            if(idx === id) return {...i, value1: c, chooesenIndex1: index}
            else return i
        })
        setEx(state)
    }

    function openModule(id) {
        let result  = isOpen.map((i, idx) => {
                if(idx === id) return !i
                else return i
            })
        setIsOpen(result)
    }

    function openHidden(id) {
        let result  = isOpen.map((i, idx) => {
                if(idx === id) return {...i, hidden: !i.hidden}
                else return i
            })
        setIsOpen(result)
    }

    function openHidden1(id) {
        let result  = isOpen.map((i, idx) => {
                if(idx === id) return {...i, hidden1: !i.hidden1}
                else return i
            })
        setIsOpen(result)
    }

    const dispatch = useDispatch()
    const count = useSelector((state) => state.countReducer.value.count)


    return (
        <main>
            <button onClick={() => dispatch(plusOne())}>redux test + 1</button>
            <h1>Counter {count}</h1>
            <h1>All types of Exercises</h1>
            <h2>Type 1</h2>
            <div className='test'>
                {ex.map(({type, id, pStart, value, value1, hidden, chooesenIndex, pMiddle, hidden1, chooesenIndex1, pEnd}) => {
                    if(type === 1) return (
                        <div className='box' key={id}>
                            <h6>{id + 1}</h6>
                            <p>{pStart}</p>
                            <div onClick={() => openModule(id)} className={(hidden[chooesenIndex].correct && value !== '') ? 'selectBoxCorrect' : 'selectBox'}>
                                <h5 className={hidden[chooesenIndex].correct ? 'correct' : 'wrong'}>{value}</h5>
                                <Image className={isOpen[id] ? 'up' : 'down'} src='/arrow.svg' width={20} height={20} alt='arrow'/>
                                {isOpen[id] && <div className='hidden'>
                                    {hidden.map(({correct, content}, index) => {
                                        return (
                                            <button key={content} onClick={() => chanheValue(id, content, index)}>{content}</button>
                                        )
                                    })}
                                </div>}
                            </div>
                            <p>{pEnd}</p>
                        </div>
                    )
                    if(type === 2) return (
                        <div className='box' key={id}>
                            <h6>{id + 1}</h6>
                            <p>{pStart}</p>
                            <div onClick={() => openHidden(id)} className={(hidden[chooesenIndex].correct && value !== '') ? 'selectBoxCorrect' : 'selectBox'}>
                                <h5 className={hidden[chooesenIndex].correct ? 'correct' : 'wrong'}>{value}</h5>
                                <Image className={isOpen[id].hidden ? 'up' : 'down'} src='/arrow.svg' width={20} height={20} alt='arrow'/>
                                {isOpen[id].hidden && <div className='hidden'>
                                    {hidden.map(({correct, content}, index) => {
                                        return (
                                            <button key={content} onClick={() => chanheValue(id, content, index)}>{content}</button>
                                        )
                                    })}
                                </div>}
                            </div>
                            <p>{pMiddle}</p>
                            <div onClick={() => openHidden1(id)} className={(hidden1[chooesenIndex1].correct && value1 !== '') ? 'selectBoxCorrect' : 'selectBox'}>
                                <h5 className={hidden1[chooesenIndex1].correct ? 'correct' : 'wrong'}>{value1}</h5>
                                <Image className={isOpen[id].hidden1 ? 'up' : 'down'} src='/arrow.svg' width={20} height={20} alt='arrow'/>
                                {isOpen[id].hidden1 && <div className='hidden'>
                                    {hidden1.map(({correct, content}, index) => {
                                        return (
                                            <button key={content} onClick={() => changeType2Index(id, content, index)}>{content}</button>
                                        )
                                    })}
                                </div>}
                            </div>
                            <p>{pEnd}</p>
                        </div>
                    )
                })}
            </div>

            
            <h2>Type 2. Choose the correct option for each gap.</h2>
            <div className='test2'>
                {ex2.map(i => {
                    return (
                    <div className='testbox' key={i.id}>
                        <div className='qBox'>
                            <h6>{i.id}</h6>
                            <p>{i.q}</p>
                        </div>
                        {i.v.map((i, idx) => {
                            return (
                                <div key={i.l} className='vBox'>
                                    <h6>{i.l}</h6>
                                    <button onClick={() => chanheEx2(idx)}>{i.v}</button>
                                </div>
                            )
                        })}
                    </div>
                    )
                })}
                </div>


                
                <h2>Type 3</h2>
                <vide src='https://www.youtube.com/watch?v=rfSWR3L21zc' width='400' height='400' />
                <div className='video'><iframe src='https://www.youtube.com/embed/FeIpGznRk0U' /></div>
        </main>
    )
}