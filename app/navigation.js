'use client'
import './styles.sass'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function Navigation() {

    const searchParams = useSearchParams()

    const search = searchParams.get('section')

    console.log(search)


    return (
        <nav>
            <Link href='/'>
                <div className='logoBox'>
                    <Image className='logo' alt='flag of Germany' src='/german-shepherd.png' width={40} height={40}/>
                    <h6>Nationale Deutschsprachige Schule</h6>
                </div>
            </Link>
            <div className='sectionsBox'>

            <Link  
                href={{
                    pathname: '/grammar',
                    query: { section: 'grammar'},
            }}>
                <div className='section'>
                    {search === 'grammar' ? <h6 style={{color: '#0070F3'}}>Grammar</h6> : <h6>Grammar</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/vocabulary',
                    query: { section: 'vocabulary'},
                  }}
            >
                <div className='section'>
                    {search === 'vocabulary' ? <h6 style={{color: '#0070F3'}}>Vocabulary</h6> : <h6>Vocabulary</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/listening',
                    query: { section: 'listening'},
                }}
            >
                <div className='section'>
                    {search === 'listening' ? <h6 style={{color: '#0070F3'}}>Listening</h6> : <h6>Listening</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/reading',
                    query: { section: 'reading'},
                  }}
            >
                <div className='section'>
                    {search === 'reading' ? <h6 style={{color: '#0070F3'}}>Reading</h6> : <h6>Reading</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/everyday',
                    query: { section: 'everyday'},
                  }}
            >
                <div className='section'>
                    {search === 'everyday' ? <h6 style={{color: '#0070F3'}}>Use of English</h6> : <h6>Use of English</h6>}
                </div>
            </Link>
            <Link
                href={{
                    pathname: '/writing',
                    query: { section: 'writing'},
                  }}
            >
                <div className='section'>
                    {search === 'writing' ? <h6 style={{color: '#0070F3'}}>Writing</h6> : <h6>Writing</h6>}
                </div>
            </Link>
            <Link 
                href={{
                    pathname: '/exams',
                    query: { section: 'exams'},
                  }}
            >
                <div className='section'>
                    {search === 'exams' ? <h6 style={{color: '#0070F3'}}>Exams</h6> : <h6>Exams</h6>}
                </div>
            </Link>
            </div>
        </nav>
    )
}