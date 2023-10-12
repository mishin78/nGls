import Image from 'next/image'
import Link from 'next/link'
import './styles.sass'

export default function Home() {
  return (
    <main>
      <Image className='cloud0' src='/clouds.png' width={300} height={300}/>
      <Image className='cloud1' src='/cloud1.png' width={400} height={180}/>
      <h1><span>Національна школа німецької мови.</span><br />
          Наполегливість і бажання - це все що вам потрібно.</h1>
      <div className='mainBox'>
        <Link href='/grammar'>
        <div className='section grammar'>
          <h5>Gra<span>mm</span>ar</h5>
          <Image src='/grammar-v1.svg' height={70} width={70} alt='book' />
        </div></Link>
        <Link href='/everyday'><div className='section everyday'>
          <h5>Use <span>of</span> English</h5>
          <Image src='/everyday-v1.1.svg' height={70} width={70} alt='book' />
        </div></Link>
        <Link href='/listening'><div className='section listening'>
          <h5>Listening</h5>
          <Image src='./listen-v1.svg' width={70} height={70} alt='picture of red headphones' />
        </div></Link>
        <Link href='/writing'><div className='section writing'>
          <h5>Writing</h5>
          <Image src='/write-v1.2.svg' height={70} width={70} alt='pen' />
        </div></Link>
        <Link href='/reading'><div className='section reading'>
          <h5>Reading</h5>
          <Image src='/read-v1.svg' height={70} width={70} alt='book' />
        </div></Link>
        <Link href='/vocabulary'><div className='section vocabulary'>
          <Image src='/vocabulary-v1.1.svg' height={70} width={70} alt='book' />
          <h5>Vocabulary</h5>
        </div></Link>
        <Link href='/exams'><div className='section exams'>
          <h5>Exams</h5>
          <Image src='/exams-v1.svg' height={70} width={70} alt='book' />
        </div></Link>
      </div>
    </main>
  )
}
