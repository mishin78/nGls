'use client'
import './styles.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function SideBar() {
    const [ showGrammar, setShowGrammar ] = useState(false)
    const [ showVocabulary, setShowVocabulary ] = useState(false)
    const [ showListening, setShowListening ] = useState(false)
    const [ showReading, setShowReading ] = useState(false)
    const [ showEveryday, setShowEveryday ] = useState(false)
    const [ showWriting, setShowWriting ] = useState(false)
    const [ showExams, setShowExams ] = useState(false)

    return (
        <aside>
            <div className='logoBox'>
                <Image alt='flag of Germany' src='/german.png' width={30} height={30}/>
                <h6>Nationale Deutschsprachige Schule</h6>
            </div>
            <ul>
                <li>
                    <Link href='/grammar'>
                        <div onClick={() => setShowGrammar(!showGrammar)}>
                            <h6>Grammar</h6>
                            {showGrammar ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showGrammar && 
                    <ul>
                        <Link href='/grammar/elementary'><li>Elementary</li></Link>
                        <Link href='/grammar/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/grammar/intermediate'><li>Intermediate</li></Link>
                        <Link href='/grammar/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/grammar/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
                <li>
                    <Link href='vocabulary'>
                        <div onClick={() => setShowVocabulary(!showVocabulary)}>
                            <h6>Vocabulary</h6>
                            {showVocabulary ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showVocabulary && 
                    <ul>
                        <Link href='/vocabulary/elementary'><li>Elementary</li></Link>
                        <Link href='/vocabulary/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/vocabulary/intermediate'><li>Intermediate</li></Link>
                        <Link href='/vocabulary/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/vocabulary/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
                <li>
                    <Link href='listening'>
                        <div onClick={() => setShowListening(!showListening)}>
                            <h6>Listening</h6>
                            {showListening ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showListening && 
                    <ul>
                        <Link href='/listening/elementary'><li>Elementary</li></Link>
                        <Link href='/listening/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/listening/intermediate'><li>Intermediate</li></Link>
                        <Link href='/listening/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/listening/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
                <li>
                    <Link href='reading'>
                        <div onClick={() => setShowReading(!showReading)}>
                            <h6>Reading</h6>
                            {showReading ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showReading && 
                    <ul>
                        <Link href='/reading/elementary'><li>Elementary</li></Link>
                        <Link href='/reading/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/reading/intermediate'><li>Intermediate</li></Link>
                        <Link href='/reading/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/reading/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
                <li>
                    <Link href='everyday'>
                        <div onClick={() => setShowEveryday(!showEveryday)}>
                            <h6>Use of English</h6>
                            {showEveryday ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showEveryday && 
                    <ul>
                        <Link href='/everyday/elementary'><li>Elementary</li></Link>
                        <Link href='/everyday/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/everyday/intermediate'><li>Intermediate</li></Link>
                        <Link href='/everyday/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/everyday/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
                <li>
                    <Link href='/writing'>
                        <div onClick={() => setShowWriting(!showWriting)}>
                            <h6>Writing</h6>
                            {showWriting ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showWriting && 
                    <ul>
                        <Link href='/writing/elementary'><li>Elementary</li></Link>
                        <Link href='/writing/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/writing/intermediate'><li>Intermediate</li></Link>
                        <Link href='/writing/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/writing/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
                <li>
                    <Link href='/exams'>
                        <div onClick={() => setShowExams(!showExams)}>
                            <h6>Exams</h6>
                            {showExams ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                        </div>
                    </Link>
                    {showExams && 
                    <ul>
                        <Link href='/exams/elementary'><li>Elementary</li></Link>
                        <Link href='/exams/pre-intermediate'><li>Pre-intermediate</li></Link>
                        <Link href='/exams/intermediate'><li>Intermediate</li></Link>
                        <Link href='/exams/upper-intermediate'><li>Upper-intermediate</li></Link>
                        <Link href='/exams/pre-advanced'><li>Pre-advanced</li></Link>
                    </ul>}
                </li>
            </ul>
        </aside>
    )
}