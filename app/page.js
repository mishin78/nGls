import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <h1><span>Національна школа німецької мови.</span><br />
          Наполегливість і бажання - це все що вам потрібно.</h1>
      <div className='mainBox'>
        <Link href='/grammar'>
        <div className='section grammar'>
          <h5>Grammar</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/vocabulary'><div className='section vocabulary'>
          <h5>Vocabulary</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/listening'><div className='section listening'>
          <h5>Listening</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/reading'><div className='section reading'>
          <h5>Reading</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/everyday'><div className='section everyday'>
          <h5>Use of English</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/writing'><div className='section writing'>
          <h5>Writing</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/exams'><div className='section exams'>
          <h5>Exams</h5>
          <div className='line'></div>
        </div></Link>
      </div>
    </main>
  )
}
