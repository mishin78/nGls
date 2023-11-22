'use client'
import './style.sass'
import { useState } from 'react'
import { test } from '@/app/data/test4-data'
import InputInText from '@/app/components/inputInText'
import { Fragment } from 'react'
import InputTest3 from '@/app/components/inputTest3'


export default function Perfekt() {
    const [variants, setVariants] = useState(test)


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
        </div>
    )
}