import Image from "next/image"

export default function ProgressBar({ value, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12 ,value13, value14, value15 ,value16, value17 }) {

    return (
        <div className="ProgressBarBox">
            <h4>Fortschritte</h4>
            <div className="progressBox">
                <div className={value === 't' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value1 === 'e' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value2 === 'e' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value3 === 't' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value4 === 'en' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value5 === 'en' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value6 === 'et' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value7 === 't' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value8 === 'en' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value9 === 'st' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value10 === 'st' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value11 === 'en' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value12 === 'e' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value13 === 'en' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value14 === 'e' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value15 === 'st' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value16 === 'st' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
                <div className={value17 === 't' ? "greenbox" : "box"}><Image alt='arrow sign' src='/done.svg' width={30} height={30}/></div>
            </div>
        </div>
    )
}