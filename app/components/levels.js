import Link from 'next/link'


export default function Levels() {

    return (
        <div className='levelsBox'>
            <Link href='/vocabulary'><h3>A1</h3></Link>
            <span></span>
            <Link href='/vocabulary'><h3>A2</h3></Link>
            <span></span>
            <Link href='/vocabulary'><h3>B1</h3></Link>
            <span></span>
            <Link href='/vocabulary'><h3 className='lasth3'>B2</h3></Link>
        </div>
    )
}