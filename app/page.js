import Image from 'next/image'
import Link from 'next/link'
import './styles.sass'

export default function Home() {
  return (
    <main>
      <h1><span>Національна школа німецької мови.</span><br />
          Наполегливість і бажання - це все що вам потрібно.</h1>
      <div className='mainBox'>
        <Link href='/grammar'>
        <div className='section grammar'>
          <h5>Gra<span>mm</span>ar</h5>
        </div></Link>
        <Link href='/everyday'><div className='section everyday'>
          <h5>Use <span>of</span> English</h5>
        </div></Link>
        <Link href='/listening'><div className='section listening'>
          <h5>Listening</h5>
          <Image src='./headphone.svg' width={50} height={50} alt='picture of red headphones' />
        </div></Link>
        <Link href='/reading'><div className='section reading'>
          <h5>Reading</h5>
          <Image src='./book.svg' width={50} height={50} alt='picture of gold book' />
        </div></Link>
        <Link href='/writing'><div className='section writing'>
          <Image src='/pencil.svg' height={50} width={50} alt='pen' />
          <h5>Writing</h5>
          <div className='line'></div>
        </div></Link>
        <Link href='/vocabulary'><div className='section vocabulary'>
          <h5>Vocabulary</h5>
        </div></Link>
        <Link href='/exams'><div className='section exams'>
          <h5>Exams</h5>
        </div></Link>
      </div>
    </main>
  )
}
