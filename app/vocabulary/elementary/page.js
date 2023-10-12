'use client'
import Image from 'next/image'
import { useState } from 'react'
import { type1, type2 } from '@/app/objects'


export default function Elementary() {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ ex0, setEx0 ] = useState({value: '', correct: ''})
    function changeV(value, correct) {
            setEx0({value: value, correct: correct})
            setIsOpen(false)
    }

    return (
        <main>
            <h1>All types of Exercises</h1>
            <h2>Type 1</h2>
            <div className='test'>
                {type1.map(i => {
                    return (
                    <div className='box' key={i.id}>
                        <p>{i.pStart}</p>
                        <div className='selectBox'>
                            <div onClick={() => setIsOpen(!isOpen)} className={ex0.correct ? 'select-correct' : 'select'}>
                                <h5 className={ex0.correct ? 'correct' : 'wrong'}>{ex0.value}</h5>
                                <Image className={isOpen && 'up'} src={i.select.img} width={20} height={20} />
                            </div>
                            {isOpen && <div className='hidden'>
                                {i.hidden.map(b => <button onClick={() => changeV(b.content, b.correct)}>{b.content}</button>)}
                            </div>}
                        </div>
                        <p>{i.pEnd}</p>
                    </div>
                    )
                })}
            </div>
            <h2>Type 2. Choose the correct option for each gap.</h2>
            <div className='test2'>
                {type2.map(i => {
                    return (
                    <div className='testbox' key={i.id}>
                        <div className='qBox'>
                            <h6>{i.id}</h6>
                            <p>{i.q}</p>
                        </div>
                        {i.v.map(i => {
                            return (
                                <div className='vBox'>
                                    <h6>{i.l}</h6>
                                    <button>{i.v}</button>
                                </div>
                            )
                        })}
                    </div>
                    )
                })}
                </div>
                <vide src='https://www.youtube.com/watch?v=rfSWR3L21zc' width='400' height='400' />
                <div className='video'><iframe src='https://www.youtube.com/embed/FeIpGznRk0U' /></div>
        </main>
    )
}