'use client'
import Image from "next/image"
import './style.sass'
import InputTest3 from "@/app/components/inputTest3"

export default function HabenSein() {
    
    return (
        <div className="habenseinBox">
            <h1>Haben und sein</h1>
            <Image alt='haben sein table' width={324.6} height={422.6} src={'/hebensein.jpeg'}/>
            <div className="test">
                <h2>1. Ergänzen Sie sein in der richtigen Form.</h2>
                <div>
                    <p>👩🏼‍🦱 Hallo , ich <InputTest3 correctWord={'bin'}/>() Laura. Und wer <InputTest3 correctWord={'bin'} />(bist) du ?</p>
                    <p>🧑🏽 Mein Name <InputTest3 correctWord={'bin'} />(ist) Nadja.</p>
                </div>
                <div>
                    <p>🧔🏻‍♂️ Guten Tag, mein Name <InputTest3 correctWord={'bin'} />(ist) Herbert Schmidt. Und wer <InputTest3 correctWord={'bin'} />(sind)  Sie ?</p>
                    <p>👴🏼 Ich <InputTest3 correctWord={'bin'} />(bin) Martin Schneider.</p>
                </div>
                <div>
                    <p>🧑🏽‍🦰 Hallo <InputTest3 correctWord={'bin'} />(seid)  ihr Maria und Jorge?</p>
                    <p>🧔🏽‍♂️👩🏻‍🦱 Nein, wir <InputTest3 correctWord={'bin'} />(sind) Yoko und Mia. Und du ?</p>
                </div>
            </div>
            <div className="test">
                <h2>2. Ergänzen Sie die richtige Form von haben.</h2>
                <div>
                    <p>🧑‍🦱<InputTest3 correctWord={'bin'} /> ( Hast ) du Kinder?</p>
                    <p>👩‍👦 Ja, ich <InputTest3 correctWord={'bin'} /> (habe) einen Jungen.</p>
                </div>
                <div>
                    <p>👩🏼‍🦱 <InputTest3 correctWord={'bin'} /> ( Hat ) er Kinder?</p>
                    <p>👨🏼‍🦰 Nein, er <InputTest3 correctWord={'bin'} />  ( hat ) noch keine Kinder.</p>
                </div>
                <div>
                    <p>👩🏽‍🦰 Maja und Tom, <InputTest3 correctWord={'bin'} />  ( habt ) ihr einen Hund ?  🐕</p>
                    <p>👩🏼‍🦳👨🏼‍🦳 Nein,  aber  wir <InputTest3 correctWord={'bin'} /> ( haben )  eine Katze. 🐈</p>
                </div>
            </div>
            <div className="test">
                <h2>3. Ergänzen Sie die richtige Form von haben oder sein. (Input)</h2>
                <div>
                    <p>👩🏼‍🦰 <InputTest3 correctWord={'bin'} /> ( Bist ) du schon lange in Deutschland?</p>
                    <p>🧔🏽‍♂️ Ja, ich <InputTest3 correctWord={'bin'} /> ( bin )  schon zwei Jahre hier.</p>
                </div>
                <div>
                    <p>👩🏼‍🦱<InputTest3 correctWord={'bin'} /> (Hast) du eine Katze?</p>
                    <p>🧑🏻 Ja, ich <InputTest3 correctWord={'bin'} /> (habe) eine kleine Katze.</p>
                </div>
                <div>
                    <p>🧔🏼‍♂️ Maria und Sascha, <InputTest3 correctWord={'bin'} /> ( seid )  ihr schon lange in Deutschland?</p>
                    <p>👩🏼‍🦰👱🏼‍♂️ Nein, wir <InputTest3 correctWord={'bin'} /> ( sind ) erst einen Monat hier.</p>
                </div>
            </div>
            <div className="text">
                <h2>4. Ergänzen Sie die richtige Form von haben oder sein. (Input)</h2>
                <p>Herr und Frau Müller <InputTest3 correctWord={'bin'} /> (sind) seit zwei Jahren in Deutschland. 
                   Sie <InputTest3 correctWord={'bin'} />(sind) verheiratet und <InputTest3 correctWord={'bin'} /> (haben) zwei Kinder. 
                   Frau Müller <InputTest3 correctWord={'bin'} />(ist)  Hausfrau. 
                   Ihr Sohn Max <InputTest3 correctWord={'bin'} />(ist)  sechs Jahre und ihre Tochter Tanja <InputTest3 correctWord={'bin'} />(ist) sieben Jahre alt. 
                   Heute <InputTest3 correctWord={'bin'} />(sind)Herr und Frau Müller  beide im Deutschkurs. Die Kinder <InputTest3 correctWord={'bin'} />(sind) 
                   in der Schule und <InputTest3 correctWord={'bin'} />(haben) Unterricht.</p>
            </div>
        </div>
    )
}