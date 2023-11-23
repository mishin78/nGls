'use client'
import './style.sass'
import { useState } from 'react'
import { test, wFargen1, wFargen2, wFargen3, wFargen4, wFargen5, wFargen6, wFargen7, jFargen1, jFargen2, jFargen3, jFargen4, jFargen5, jFargen6 } from '@/app/data/test4-data'
import InputInText from '@/app/components/inputInText'
import { Fragment } from 'react'
import InputTest3 from '@/app/components/inputTest3'
import InputTest200px from '@/app/components/inputTest200px'


export default function Perfekt({ searchParams }) {
    const [ variants, setVariants ] = useState(test)
    const [ fargen1, setFargen1 ] = useState(wFargen1)
    const [ fargen2, setFargen2 ] = useState(wFargen2)
    const [ fargen3, setFargen3 ] = useState(wFargen3)
    const [ fargen4, setFargen4 ] = useState(wFargen4)
    const [ fargen5, setFargen5 ] = useState(wFargen5)
    const [ fargen6, setFargen6 ] = useState(wFargen6)
    const [ fargen7, setFargen7 ] = useState(wFargen7)
    const [ jargen1, setJargen1 ] = useState(jFargen1)
    const [ jargen2, setJargen2 ] = useState(jFargen2)
    const [ jargen3, setJargen3 ] = useState(jFargen3)
    const [ jargen4, setJargen4 ] = useState(jFargen4)
    const [ jargen5, setJargen5 ] = useState(jFargen5)
    const [ jargen6, setJargen6 ] = useState(jFargen6)


    return (
        <div className='perfektBox'>
            <h1>Perfekt</h1>
            <div className="test0">
                <h6>1. Ergänzen Sie die Sätze. </h6>
                <div className='variantsBox'>
                    {variants.map((i, idx) => {
                        return (
                            <Fragment key={idx}>
                                <p className={i.used ? 'used' : 'unused'}>{i.word} </p>
                            </Fragment>
                        )
                    })}
                </div>
                <p>Am Samstag hat  Felix  um 9 Uhr <InputInText word={'frühstücken'} correctUsage={'gefrühstückt'} setVariants={setVariants}/>. 
                   Dann hat er eine Tasse Kaffee und <InputInText word={'kochen'} correctUsage={'gekocht'} setVariants={setVariants}/>
                   und seine Wohnung <InputInText word={'putzen'} correctUsage={'geputzt'} setVariants={setVariants}/>. 
                   Am Mittag  hat er im Supermarkt Lebensmittel <InputInText word={'kaufen'} correctUsage={'gekauft'} setVariants={setVariants}/>.</p>
                <p>Danach hat er Deutsch <InputInText word={'lernen'} correctUsage={'gelernt'} setVariants={setVariants}/>. 
                   Er hat sein Fahrrad <InputInText word={'fahren'} correctUsage={'gefahren'} setVariants={setVariants}/> 
                   und hat dann einen Ausflug <InputInText word={'machen'} correctUsage={'gemacht'} setVariants={setVariants}/>. 
                   Am Abend  hat er noch Fußball <InputInText word={'spielen'} correctUsage={'gespielt'} setVariants={setVariants}/>. 
                   Am Sonntag hat er sehr  lande <InputInText word={'schlafen'} correctUsage={'geschlafen'} setVariants={setVariants}/>.</p>
            </div>

            <div className='test1'>
                <h6>2. Ergänzen Sie die richtige Form von haben.</h6>
                <p>— Julia und Michaela, sagt mal, was <InputTest3 correctWord={'habt'}/> ihr am Wochenende  gemacht?</p>
                <p>— Wir <InputTest3 correctWord={'haben'}/> lange geschlafen. Und du, Kevin, <InputTest3 correctWord={'hast'}/> du auch  lange geschlafen ?</p>
                <p>— Ja, bis 10 Uhr. Dann <InputTest3 correctWord={'habe'}/> ich mit meiner Freundin telefoniert. Sie <InputTest3 correctWord={'hat'}/> den ganzen  Tag  gearbeitet.</p>
            </div>

            <div className='test2'>
                <h6>3. Ergänzen Sie die richtige Form von sein.</h6>
                <p>— Kevin und Eva, sagt mal, wann <InputTest3 correctWord={'seid'}/> ihr heute in die Schule gekommen ?</p>
                <p>— Wir <InputTest3 correctWord={'sind'}/> schon um halb neun gekommen.</p>
                <p style={{marginLeft: '2rem'}}>Wir <InputTest3 correctWord={'sind'}/> mit dem Auto gefahren. Und du, Erik, <InputTest3 correctWord={'bist'}/> du dieses Mal mit dem Bus gefahren ?</p>
                <p>— Ja, ich <InputTest3 correctWord={'bin'}/> heute mit dem Bus gekommen. Mein Auto ist kaputt.</p>
            </div>

            <div className='test3'>
                <h6>4. Ergänzen Sie das Partizip und  haben oder sein in der richtigen Form.</h6>
                <div>
                    <div className='words'>
                        <p>machen — <InputTest3 correctWord={'gemacht'}/></p>
                        <p>sehen — <InputTest3 correctWord={'hat gesehen'}/></p>
                        <p>gehen — <InputTest3 correctWord={'gegangen'}/></p>
                        <p>fahren — <InputTest3 correctWord={'hat gefahren'}/></p>
                        <p>schlafen — <InputTest3 correctWord={'hat geschlafen'}/></p>
                        <p>kommen — <InputTest3 correctWord={'gekommen'}/></p>
                        <p>frühstücken —  <InputTest3 correctWord={'gefrühstückt'}/></p>
                        <p>spazieren gehen — <InputTest3 correctWord={'spazieren gegangen'}/></p>
                        <p>machen — <InputTest3 correctWord={'gemacht'}/></p>
                        <p>fotografieren — <InputTest3 correctWord={'fotografiert'}/></p>
                    </div>
                    <div className='text'>
                        <p>Lieber Alex,</p>
                        <p>viele Urlaubsgrüße aus München! Ich <InputTest3 correctWord={'habe'}/> hier schon sehr viel <InputTest3 correctWord={'gemacht'}/>. 
                           Ich  <InputTest3 correctWord={'habe'}/> viele Museen <InputTest3 correctWord={'gesehen'}/> und ich <InputTest3 correctWord={'bin'}/> durch die Stadt <InputTest3 correctWord={'gegangen'}/>. 
                           Ich <InputTest3 correctWord={'bin'}/> auch mit dem Fahrrad durch die  Stadt <InputTest3 correctWord={'gefahren'}/>, es gibt hier viele Radwege. 
                           Heute Morgen <InputTest3 correctWord={'habe'}/> ich lange <InputTest200px correctWord={'geschlafen'}/>. 
                           Dann <InputTest3 correctWord={'sind'}/> noch Freunde aus Frankfurt <InputTest3 correctWord={'gekommen'}/> und 
                           wir <InputTest3 correctWord={'haben'}/> zusammen <InputTest200px correctWord={'gefrühstückt'}/>. Danach  <InputTest3 correctWord={'sind'}/> wir im 
                           Englischen Garten <InputTest200px correctWord={'spazieren gegangen'}/>. Und du, was <InputTest3 correctWord={'hast'}/> du 
                           die letzte Woche <InputTest3 correctWord={'gemacht'}/> ? Wir <InputTest3 correctWord={'haben'}/> viel <InputTest200px correctWord={'fotografiert'}/>, 
                           die Bilder schicke ich dir später. </p>
                        <p>Liebe Grüße</p>
                    </div>
                </div>
            </div>

            <div className='test4'>
                <h6>5. Schreiben Sie die Sätze und W-Fragen in die Tabelle.</h6>
                {/*
                    1 am Wochenende einen Kuchen | Ich | gebacken | habe l.
                    2 Was | habt | gemacht | ihr am Wochenende | ?

                    3 Wir | haben | gekauft | auf dem Markt Obst und Gemüse |

                    4 Wo | du gestern | gewesen | bist | ?

                    5 nach Frankfurt | bin | gefahren | Ich | .

                    6 vorgestern zusammen | Wir | gekocht | haben |.

                    7 Ich | habe | gegessen | den Kuchen heute allein I.
                */}
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen2.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen2}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen2}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen2}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen2}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                <div className='box'>
                    <div className='container'>
                        {fargen1.map((i, idx) => {
                            return (
                                <Fragment key={idx}>
                                    <p className={i.used ? 'used' : 'unused'}>{i.word} <span>|</span></p>
                                </Fragment>
                            )
                        })}
                    </div>
                    <InputInText word={'am Wochenende einen Kuchen'} correctUsage={'am Wochenende einen Kuchen'} setVariants={setFargen1}/>
                    <InputInText word={'Ich'} correctUsage={'Ich'} setVariants={setFargen1}/>
                    <InputInText word={'gebacken'} correctUsage={'gebacken'} setVariants={setFargen1}/>
                    <InputInText word={'habe'} correctUsage={'habe'} setVariants={setFargen1}/>
                </div>
                

            </div>

            <div className='test5'>
                <h6>6. Schreiben Sie Ja-/Nein-Fragen in die Tabelle.</h6>
                {/*
                    1 du | gegangen | heute früh ins Bett | Bist | ?

                    2 ihr | gestern mit dem Auto zur Schule | Seid | gefahren | ?

                    3 ihr | Habt | gesehen | am Wochenende das Fußballspiel | ?

                    4 du | Hast | gestern im Fernsehen einen Film | gesehen | ?

                    5 Ist | Roberto | gekommen | heute mit der U-Bahn | ?

                    6 Ella | viele Fotos im Urlaub | Hat | gemacht | ?
                */}
            </div>
        </div>
    )
}