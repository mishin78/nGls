import Image from 'next/image'


export default function Home() {
  return (
    <main>
      <h1><span>Національна школа німецької мови.</span><br />
          Наполегливість і бажання - це все що вам потрібно.</h1>
      <div className='mainBox'>
        <div className='sectionG'>
          <h5>Grammar</h5>
          <div className='line'></div>
        </div>
        <div className='section'>
          <h5>Vocabulary</h5>
          <div className='line'></div>
        </div>
        <div className='section'>
          <h5>Listening</h5>
          <div className='line'></div>
        </div>
        <div className='section'>
          <h5>Reading</h5>
          <div className='line'></div>
        </div>
        <div className='section'>
          <h5>Use of English</h5>
          <div className='line'></div>
        </div>
        <div className='sectionW'>
          <h5>Writing</h5>
          <div className='line'></div>
        </div>
        <div className='section'>
          <h5>Exams</h5>
          <div className='line'></div>
        </div>
      </div>
    </main>
  )
}
