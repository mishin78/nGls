'use client'
import './style.sass'
import DerDiDas from '@/app/components/derdiedas'
import InputTest3 from '@/app/components/inputTest3'

export default function Test2() {

    return (
        <div className='test2Box'>
            <h1>Ergänzen Sie die Artikel im Akkusativ.</h1>
            <div className='box firstBox'>
                <div className='one'>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Käse</p>
                    </div>
                    <div>
                         <DerDiDas correctValue={'die'}/><p>Mich</p>
                    </div>
                    <div>
                         <DerDiDas correctValue={'der'}/><p>Kasten</p>
                    </div>
                    <div>
                         <DerDiDas correctValue={'die'}/><p>Dose</p>
                    </div>
                    <div>
                         <DerDiDas correctValue={'das'}/><p>Pfund</p>
                    </div>
                    <div>
                         <DerDiDas correctValue={'die'}/><p>Packung</p>  
                    </div>
                </div>
                <div className='two'>
                    <p>— Wir gehen einkaufen. Was brauchen wir?</p>
                    <p>  Wir haben kein<InputTest3 correctWord={"en"}/> Käse und kein<InputTest3 correctWord={"e"}/> Milch.</p>
                    <p>  Dann brauchen wir auch noch ein<InputTest3 correctWord={"en"}/> Kasten Wasser,</p>
                    <p>  ein<InputTest3 correctWord={"e"}/> Dose Erbsen und ein Pfund Tomaten.</p>
                    <p>— Und wir kaufen ein<InputTest3 correctWord={"e"}/> Packung Tee.</p>
                </div>
            </div>

            <div className='box secondBox'>
                <div className='one'>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Mantel</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'die'}/><p>Jacke</p>
                    </div>  
                </div>
                <div className='two'>
                    <p>— Guten Tag. Kann ich d<InputTest3 correctWord={"en"}/> Mantel hier umtauschen? Er ist zu groß. Ich brauche d<InputTest3 correctWord={"en"}/> Mantel in Größe  40.</p>
                    <p>— Nein, tut mir leid, in Größe 40 haben wir d<InputTest3 correctWord={"en"}/> Mantel nicht mehr.</p>
                    <p>Aber wir haben hier ein<InputTest3 correctWord={"e"}/> Jacke in Größe 40. Ich finde d<InputTest3 correctWord={"ie"}/> Jacke sehr schön, und Sie ?</p>
                </div>
            </div>

            <div className='box thirdBox'>
                <div className='one'>
                    <div>
                        <DerDiDas correctValue={'die'}/><p>Wohnung</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'die'}/><p>Lampe</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'das'}/><p>Sofa</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'das'}/><p>Bett</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Sessel</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Teppich</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Schrank</p>
                    </div>
                </div>
                <div className='two'>
                    <p>Wir haben ein<InputTest3 correctWord={"e"}/> neue Wohnung und brauchen noch Möbel.</p>
                    <p>Wir brauchen ein<InputTest3 correctWord={"e"}/> Lampe für das Schlafzimmer, ein Sofa und ein Bett haben wir schon,</p>
                    <p>Wir kaufen auch ein<InputTest3 correctWord={"en"}/> Sessel und ein<InputTest3 correctWord={"en"}/> Teppich für das Wohnzimmer, 
                        ein<InputTest3 correctWord={"en"}/> Schrank für unsere Kleidung und ….</p>
                </div>
            </div>

            <div className='box fourthBox'>
                <div className='one'>
                    <div>
                        <DerDiDas correctValue={'die'}/><p>Suppe</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Fisch 🐟</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'das'}/><p>Eis 🍦</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Kuchen 🎂</p>
                    </div>
                    <div>
                        <DerDiDas correctValue={'der'}/><p>Kaffee ☕️</p>
                    </div>
                </div>
                <div className='two'>
                    <p>— Was kochen wir heute zum Abendessen ?</p>
                    <p>— Zum Abendessen kochen wir  ein<InputTest3 correctWord={"e"}/>  Gemüsesuppe 🥣, danach backen  wir ein<InputTest3 correctWord={"en"}/> Fisch. 🐠</p>
                    <p>Als Nachtisch essen wir noch ein Eis, ein<InputTest3 correctWord={"en"}/> Kuchen 🍰 und trinken ein leckeren Kaffee. ☕️</p>
                </div>
            </div>

        </div>
    )
}