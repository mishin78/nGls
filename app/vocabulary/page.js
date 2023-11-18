import '../styles.sass'
import '../grid.sass'
import Link from 'next/link'
import Levels from '../components/levels'

export default function Vocabulary() {

    return (
        <main className='сategory vocabulary'>
            <Levels />
            <div className='gridBox'>
                <Link className='block1' href='/vocabulary/A1'><div className='block1 easy'>Exercise 0</div></Link>
                <div className='block2 easy'>Exercise 1</div>
                <div className='block3 easy'>Exercise 1</div>
                <div className='block4 easy'>Exercise 1</div>
                <div className='block5 easy'>Exercise 1</div>
                <div className='block6 easy'>Exercise 1</div>
                <div className='block7 easy'>Exercise 1</div>
                <div className='block8 normal'>Exercise 1</div>
                <div className='block9 easy'>Exercise 1</div>
                <div className='block10 easy'>Exercise 1</div>
                <div className='block11 easy'>Exercise 1</div>
                <div className='block12 easy'>Exercise 1</div>
                <div className='block13 easy'>Exercise 1</div>
                <div className='block14 expert'>Exercise 1</div>
                <div className='block15 easy'>Exercise 1</div>
            </div>
        </main>
    )
}