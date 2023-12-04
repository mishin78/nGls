'use client'
import './styles.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'


export default function Navigation() {

    const [ openMenu, setOpenMenu ] = useState(false)
    const searchParams = useSearchParams()
    const search = searchParams.get('section')

    return (
        <nav>
            <Link href='/'>
                <div className='logoBox'>
                    <Image className='logo' alt='flag of Germany' src='/german-shepherd.png' width={40} height={40}/>
                    <h6>Nationale Deutschsprachige Schule</h6>
                </div>
            </Link>
            <div className={openMenu ? 'burgerSections' : 'sectionsBox'}>
            <Link  
                href={{
                    pathname: '/grammar/A1',
                    query: { section: 'grammar', level: 'A1'},
            }}>
                <div className='section'>
                    {search === 'grammar' ? <h6 style={{color: '#0070F3'}}>Grammatik</h6> : <h6>Grammatik</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/vocabulary',
                    query: { section: 'vocabulary'},
                  }}
            >
                <div className='section'>
                    {search === 'vocabulary' ? <h6 style={{color: '#0070F3'}}>Wortschatz</h6> : <h6>Wortschatz</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/listening',
                    query: { section: 'listening'},
                }}
            >
                <div className='section'>
                    {search === 'listening' ? <h6 style={{color: '#0070F3'}}>Zuhören</h6> : <h6>Zuhören</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/reading',
                    query: { section: 'reading'},
                  }}
            >
                <div className='section'>
                    {search === 'reading' ? <h6 style={{color: '#0070F3'}}>Lesen</h6> : <h6>Lesen</h6>}
                </div>
            </Link>
            <Link
                href={{
                    pathname: '/writing',
                    query: { section: 'writing'},
                  }}
            >
                <div className='section'>
                    {search === 'writing' ? <h6 style={{color: '#0070F3'}}>Schreiben</h6> : <h6>Schreiben</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/exams',
                    query: { section: 'exams'},
                  }}
            >
                <div className='section'>
                    {search === 'exams' ? <h6 style={{color: '#0070F3'}}>Prüfungen</h6> : <h6>Prüfungen</h6>}
                </div>
            </Link>
            </div>
            <div onClick={() => setOpenMenu(!openMenu)} className='burgerMenu'>
                <div className='first'></div>
                <div></div>
                <div className='last'></div>
            </div>
        </nav>
    )
}