'use client'
import { useState } from "react"
import Examples from "@/app/components/examples"
import ProgressBar from "@/app/components/progress"
import './style.sass'


export default function Task0() {
    const [ value, setValue ] = useState('')
    const [ value1, setValue1 ] = useState('')
    const [ value2, setValue2 ] = useState('')
    const [ value3, setValue3 ] = useState('')
    const [ value4, setValue4 ] = useState('')
    const [ value5, setValue5 ] = useState('')
    const [ value6, setValue6 ] = useState('')
    const [ value7, setValue7 ] = useState('')
    const [ value8, setValue8 ] = useState('')
    const [ value9, setValue9 ] = useState('')
    const [ value10, setValue10 ] = useState('')
    const [ value11, setValue11 ] = useState('')
    const [ value12, setValue12 ] = useState('')
    const [ value13, setValue13 ] = useState('')
    const [ value14, setValue14 ] = useState('')
    const [ value15, setValue15 ] = useState('')
    const [ value16, setValue16 ] = useState('')
    const [ value17, setValue17 ] = useState('')
    
    

    return (
        <div className="grammar elementary task0">
            <div className="sideBarBox">
                <Examples />
                <ProgressBar value={value} value1={value1} value2={value2} value3={value3} value4={value4} value5={value5}
                             value6={value6} value7={value7} value8={value8} value9={value9} value10={value10} value11={value11}
                             value12={value12} value13={value13} value14={value14} value15={value15} value16={value16} value17={value17}/>
            </div>
            <div className="text">
                <h1>Konjugation  im  Präsens</h1>
                <h2>Ergänzen Sie die  Endungen.</h2>
                <h2>Übung 1</h2>
                <p>Hallo Karim,<br/> wie geh
                    <input className={value === 't' ? 'right' : 'wrong'} value={value} onChange={e => setValue(e.target.value)}/> es dir? Ich wohn<input className={value1 === 'e' ? 'right' : 'wrong'} value={value1} onChange={e => setValue1(e.target.value)}/> in Frankfurt und lern<input className={value2 === 'e' ? 'right' : 'wrong'} value={value2} onChange={e => setValue2(e.target.value)}/> Deutsch. 
                    Wir sind 16 Teilnehmer im Kurs, viele sprechen schon ganz gut Deutsch. 
                    Unser Lehrer ist sehr nett, er heiß
                    <input className={value3 === 't' ? 'right' : 'wrong'} value={value3} onChange={e => setValue3(e.target.value)}/> Martin Schmidt.
                    Oft versteh<input className={value4 === 'en' ? 'right' : 'wrong'} value={value4} onChange={e => setValue4(e.target.value)}/> wir ihn nicht so gut. Er spricht immer sehr schnell. Dann frag
                    <input className={value5 === 'en' ? 'right' : 'wrong'} value={value5} onChange={e => setValue5(e.target.value)}/> wir und er antwort
                    <input className={value6 === 'et' ? 'right' : 'wrong'} value={value6} onChange={e => setValue6(e.target.value)}/> langsam. 
                    Der Kurs geh
                    <input className={value7 === 't' ? 'right' : 'wrong'} value={value7} onChange={e => setValue7(e.target.value)}/> von 9 bis 12 Uhr, um 10.30 Uhr mach
                    <input className={value8 === 'en' ? 'right' : 'wrong'} value={value8} onChange={e => setValue8(e.target.value)}/> wir immer eine Pause. Und was mach
                    <input className={value9 === 'st' ? 'right' : 'wrong'} value={value9} onChange={e => setValue9(e.target.value)}/> du? Komm
                    <input className={value10 === 'st' ? 'right' : 'wrong'} value={value10} onChange={e => setValue10(e.target.value)}/> du am 
                    Sonntag nach Frankfurt?<br/>
                    Liebe Grüße, Ella</p>

                    <ProgressBar value={value} value1={value1} value2={value2} value3={value3} value4={value4} value5={value5}
                             value6={value6} value7={value7} value8={value8} value9={value9} value10={value10} value11={value11}
                             value12={value12} value13={value13} value14={value14} value15={value15} value16={value16} value17={value17}/>
                             

                <div className="part2">
                    <h2>Übung 2</h2>
                    <div>
                        <p>— Woher  komm<input className={value11 === 'en' ? 'right' : 'wrong'} value={value11} onChange={e => setValue11(e.target.value)}/> Sie ?</p>
                        <p>— Ich komm<input className={value12 === 'e' ? 'right' : 'wrong'} value={value12} onChange={e => setValue12(e.target.value)}/> aus Polen. </p>
                    </div>
                    <div>
                        <p>— Und wo wohn<input className={value13 === 'en' ? 'right' : 'wrong'} value={value13} onChange={e => setValue13(e.target.value)}/> Sie jetzt ? </p>
                        <p>— Ich wohn<input className={value14 === 'e' ? 'right' : 'wrong'} value={value14} onChange={e => setValue14(e.target.value)}/> jetzt in Berlin.</p>
                    </div>
                    <div>
                        <p>— Hallo Hans! Woher  komm<input className={value15 === 'st' ? 'right' : 'wrong'} value={value15} onChange={e => setValue15(e.target.value)}/>  du ?</p>
                        <p>— Und wo  wohn<input className={value16 === 'st' ? 'right' : 'wrong'} value={value16} onChange={e => setValue16(e.target.value)}/>  du jetzt ?</p>
                    </div>
                    <div>
                        <p>— Wir sind Olha und Tatiana.</p>
                        <p>— Woher  komm<input className={value17 === 't' ? 'right' : 'wrong'} value={value17} onChange={e => setValue17(e.target.value)}/> ihr ?</p>
                        <p>— Wir  kommen aus die USA.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}