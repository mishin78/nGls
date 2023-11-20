import '../styles.sass'
import '../grid.sass'
import Link from 'next/link'
import Levels from '../components/levels'


export default function Grammar() {

    return (
        <main className='сategory grammar'>
            <Levels />
            <div className='gridBox'>
                <Link className='block1' href='/grammar'><div>-nothing-</div></Link>
                <Link className='block2' href='/grammar/A1/task0'><div>Task0</div></Link>
                <Link className='block3 easy' href='/grammar/A1/test1'><div>Verben mit Vokalwechsel</div></Link>
                <Link className='block4 easy' href='/grammar/A1/test3'><div>Test 3</div></Link>
                <div className='block5 easy'>-nothing-</div>
                <div className='block6 easy'>-nothing-</div>
                <div className='block7 easy'>-nothing-</div>
                <div className='block8 normal'>-nothing-</div>
                <div className='block9 easy'>-nothing-</div>
                <div className='block10 easy'>-nothing-</div>
                <div className='block11 easy'>-nothing-</div>
                <div className='block12 easy'>-nothing-</div>
                <div className='block13 easy'>-nothing-</div>
                <div className='block14 expert'>-nothing-</div>
                <div className='block15 easy'>-nothing-</div>
            </div>
    </main>
    )
}