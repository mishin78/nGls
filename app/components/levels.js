'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function Levels() {

    const searchParams = useSearchParams()
    const section = searchParams.get('section')
    const level = searchParams.get('level')
    console.log(level)

    return (
        <div className='levelsBox'>
            <Link href={{ pathname: `/${section}/A1`, query: { section: `${section}`, level: 'A1'}}}>
                <h3 className={level === 'A1' && 'currentLevel'}>A1</h3>
            </Link>
            <span></span>
            <Link href={{ pathname: `/${section}/A2`, query: { section: `${section}`, level: 'A2'}}}>
                <h3 className={level === 'A2' && 'currentLevel'}>A2</h3>
            </Link>
            <span></span>
            <Link href={{ pathname: `/${section}/B1`, query: { section: `${section}`, level: 'B1'}}}>
                <h3 className={level === 'B1' && 'currentLevel'}>B1</h3>
            </Link>
            <span></span>
            <Link href={{ pathname: `/${section}/B2`, query: { section: `${section}`, level: 'B2'}}}>
                <h3 className='lasth3'>B2</h3>
            </Link>
        </div>
    )
}