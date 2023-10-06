'use client'
import './styles.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'


export default function Navigation() {
    const [ showGrammar, setShowGrammar ] = useState(false)
    const [ showVocabulary, setShowVocabulary ] = useState(false)
    const [ showListening, setShowListening ] = useState(false)
    const [ showReading, setShowReading ] = useState(false)
    const [ showEveryday, setShowEveryday ] = useState(false)
    const [ showWriting, setShowWriting ] = useState(false)
    const [ showExams, setShowExams ] = useState(false)

    const grammar = () => {
        setShowGrammar(true); setShowVocabulary(false); setShowListening(false); setShowReading(false); setShowEveryday(false); setShowWriting(false); setShowExams(false);
    }
    const vocabulary = () => {
        setShowGrammar(false); setShowVocabulary(true); setShowListening(false); setShowReading(false); setShowEveryday(false); setShowWriting(false); setShowExams(false);
    }
    const reading = () => {
        setShowGrammar(false); setShowVocabulary(false); setShowListening(false); setShowReading(true); setShowEveryday(false); setShowWriting(false); setShowExams(false);
    }
    const listening = () => {
        setShowGrammar(false); setShowVocabulary(false); setShowListening(true); setShowReading(false); setShowEveryday(false); setShowWriting(false); setShowExams(false);
    }
    const everyday = () => {
        setShowGrammar(false); setShowVocabulary(false); setShowListening(false); setShowReading(false); setShowEveryday(true); setShowWriting(false); setShowExams(false);
    }
    const writing = () => {
        setShowGrammar(false); setShowVocabulary(false); setShowListening(false); setShowReading(false); setShowEveryday(false); setShowWriting(true); setShowExams(false);
    }
    const exams = () => {
        setShowGrammar(false); setShowVocabulary(false); setShowListening(false); setShowReading(false); setShowEveryday(false); setShowWriting(false); setShowExams(true);
    }

    return (
        <nav>
            <Link href='/'>
                <div className='logoBox'>
                    <Image className='logo' alt='flag of Germany' src='/german.png' width={25} height={25}/>
                    <h6>Nationale Deutschsprachige Schule</h6>
                </div>
            </Link>
            <div className='sectionsBox'>

            <Link href='/grammar'>
                <div className='section' onClick={() => grammar()}>
                    {showGrammar ? <h6 style={{color: '#0070F3'}}>Grammar</h6> : <h6>Grammar</h6>}
                    {showGrammar ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            <Link href='/vocabulary'>
                <div className='section' onClick={() => vocabulary()}>
                    {showVocabulary ? <h6 style={{color: '#0070F3'}}>Vocabulary</h6> : <h6>Vocabulary</h6>}
                    {showVocabulary ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            <Link href='/listening'>
                <div className='section' onClick={() => listening()}>
                    {showListening ? <h6 style={{color: '#0070F3'}}>Listening</h6> : <h6>Listening</h6>}
                    {showListening ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            <Link href='/reading'>
                <div className='section' onClick={() => reading()}>
                    {showReading ? <h6 style={{color: '#0070F3'}}>Reading</h6> : <h6>Reading</h6>}
                    {showReading ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            <Link href='/everyday'>
                <div className='section' onClick={() => everyday()}>
                    {showEveryday ? <h6 style={{color: '#0070F3'}}>Use of English</h6> : <h6>Use of English</h6>}
                    {showEveryday ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            <Link href='/writing'>
                <div className='section' onClick={() => writing()}>
                    {showWriting ? <h6 style={{color: '#0070F3'}}>Writing</h6> : <h6>Writing</h6>}
                    {showWriting ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            <Link href='/exams'>
                <div className='section' onClick={() => exams()}>
                    {showExams ? <h6 style={{color: '#0070F3'}}>Exams</h6> : <h6>Exams</h6>}
                    {showExams ? <Image alt='arrow down' width={20} height={20} src='/arrowDown.svg' /> : <Image alt='arrow right' width={20} height={20} src='/arrowRight.svg' />}
                </div>
            </Link>
            </div>
        </nav>
    )
}