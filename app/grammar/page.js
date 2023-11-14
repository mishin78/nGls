import '../styles.sass'
import Image from 'next/image'
import '../grid.sass'
import Link from 'next/link'


export default function Grammar() {

    return (
        <main className='сategory grammar'>
            <div className='levelsBox'>
                <Link href='/vocabulary'><h3>Elementary</h3></Link>
                <span></span>
                <Link href='/vocabulary'><h3>Pre-intermediate</h3></Link>
                <span></span>
                <Link href='/vocabulary'><h3>Intermediate</h3></Link>
                <span></span>
                <Link href='/vocabulary'><h3>Upper-intermediate</h3></Link>
                <span></span>
                <Link href='/vocabulary'><h3 className='lasth3'>Pre-advanced</h3></Link>
            </div>
            <div className='gridBox'>
                <Link className='block1' href='/grammar/elementary'><div className='block1 easy win'>Text</div></Link>
                <Link className='block2' href='/grammar/elementary/task0'><div className='block2 easy grey'>Task0</div></Link>
                <div className='block3 easy half-done'>test exersice</div>
                <div className='block4 easy'>test exersice</div>
                <div className='block5 easy'>test exersice</div>
                <div className='block6 easy'>test exersice</div>
                <div className='block7 easy'>test exersice</div>
                <div className='block8 normal'>test exersice</div>
                <div className='block9 easy'>test exersice</div>
                <div className='block10 easy'>test exersice</div>
                <div className='block11 easy'>test exersice</div>
                <div className='block12 easy'>test exersice</div>
                <div className='block13 easy'>test exersice</div>
                <div className='block14 expert'>test exersice</div>
                <div className='block15 easy'>test exersice</div>
            </div>
    </main>
    )
}