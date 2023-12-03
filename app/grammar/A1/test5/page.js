'use client'
import Image from "next/image"
import './style.sass'
import InputTest3 from "@/app/components/inputTest3"
import SeinSelect from "@/app/components/seinSelect"
import HabenSelect from "@/app/components/habenSelect"

export default function HabenSein() {
    
    return (
        <div className="habenseinBox">
            <h1>Haben und sein</h1>
            <Image alt='haben sein table' width={324.6} height={422.6} src={'/hebensein.jpeg'}/>
            <div className="test">
                <h2>1. Ergänzen Sie sein in der richtigen Form.</h2>
                <div>
                    <p>👩🏼‍🦱 Hallo , ich <SeinSelect correctValue={'bin'} capitalLetter={false}/> Laura. 
                          Und wer <SeinSelect correctValue={'bist'} capitalLetter={false}/> du ?</p>
                    <p>🧑🏽 Mein Name <SeinSelect correctValue={'ist'} capitalLetter={false}/> Nadja.</p>
                </div>
                <div>
                    <p>🧔🏻‍♂️ Guten Tag, mein Name <SeinSelect correctValue={'ist'} capitalLetter={false}/> Herbert Schmidt. 
                    Und wer <SeinSelect correctValue={'sind'} capitalLetter={false}/> Sie ?</p>
                    <p>👴🏼 Ich <SeinSelect correctValue={'bin'} capitalLetter={false}/> Martin Schneider.</p>
                </div>
                <div>
                    <p>🧑🏽‍🦰 Hallo <SeinSelect correctValue={'seid'} capitalLetter={false}/> ihr Maria und Jorge?</p>
                    <p>🧔🏽‍♂️👩🏻‍🦱 Nein, wir <SeinSelect correctValue={'sind'} capitalLetter={false}/> Yoko und Mia. Und du ?</p>
                </div>
            </div>
            <div className="test">
                <h2>2. Ergänzen Sie die richtige Form von haben.</h2>
                <div>
                    <p>🧑‍🦱 <HabenSelect correctValue={'Hast'} capitalLetter={true}/> du Kinder?</p>
                    <p>👩‍👦 Ja, ich <HabenSelect correctValue={'habe'} capitalLetter={false}/> einen Jungen.</p>
                </div>
                <div>
                    <p>👩🏼‍🦱 <HabenSelect correctValue={'Hat'} capitalLetter={true}/> er Kinder?</p>
                    <p>👨🏼‍🦰 Nein, er <HabenSelect correctValue={'hat'} capitalLetter={false}/> noch keine Kinder.</p>
                </div>
                <div>
                    <p>👩🏽‍🦰 Maja und Tom, <HabenSelect correctValue={'habt'} capitalLetter={false}/> ihr einen Hund ?  🐕</p>
                    <p>👩🏼‍🦳👨🏼‍🦳 Nein,  aber  wir <HabenSelect correctValue={'haben'} capitalLetter={false}/> eine Katze. 🐈</p>
                </div>
            </div>
            <div className="test">
                <h2>3. Ergänzen Sie die richtige Form von haben oder sein.</h2>
                <div>
                    <p>👩🏼‍🦰 <InputTest3 correctWord={'Bist'} /> du schon lange in Deutschland?</p>
                    <p>🧔🏽‍♂️ Ja, ich <InputTest3 correctWord={'bin'} /> schon zwei Jahre hier.</p>
                </div>
                <div>
                    <p>👩🏼‍🦱 <InputTest3 correctWord={'Hast'} /> du eine Katze?</p>
                    <p>🧑🏻 Ja, ich <InputTest3 correctWord={'habe'} /> eine kleine Katze.</p>
                </div>
                <div>
                    <p>🧔🏼‍♂️ Maria und Sascha, <InputTest3 correctWord={'seid'} /> ihr schon lange in Deutschland?</p>
                    <p>👩🏼‍🦰👱🏼‍♂️ Nein, wir <InputTest3 correctWord={'sind'} /> erst einen Monat hier.</p>
                </div>
            </div>
            <div className="text">
                <h2>4. Ergänzen Sie die richtige Form von haben oder sein.</h2>
                <p>Herr und Frau Müller <InputTest3 correctWord={'sind'} /> seit zwei Jahren in Deutschland. 
                   Sie <InputTest3 correctWord={'sind'} /> verheiratet und <InputTest3 correctWord={'haben'} /> zwei Kinder. 
                   Frau Müller <InputTest3 correctWord={'ist'} /> Hausfrau. 
                   Ihr Sohn Max <InputTest3 correctWord={'ist'} /> sechs Jahre und ihre Tochter Tanja <InputTest3 correctWord={'ist'} /> sieben Jahre alt. 
                   Heute <InputTest3 correctWord={'sind'} /> Herr und Frau Müller  beide im Deutschkurs. Die Kinder <InputTest3 correctWord={'sind'} /> 
                   in der Schule und <InputTest3 correctWord={'haben'} /> Unterricht.</p>
            </div>
        </div>
    )
}