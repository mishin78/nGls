'use client'
import Image from 'next/image'
import { useState } from 'react'
import { type1, type2 } from '@/app/objects'


export default function Elementary() {
    const [ isOpen, setIsOpen ] = useState({'0': false, '1': false})
    const [ ex, setEx ] = useState(type1)
 
    const f = (arr, setFunc, id, v) => {
        let array = arr.map(i => {
            if(i.id === id) {
                return {...i, value : v}
            } else i
        })
        setFunc(array)
    }

    return (
        <main>
            <h1>All types of Exercises</h1>
            <h2>Type 1</h2>
            <div className='test'>
                
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