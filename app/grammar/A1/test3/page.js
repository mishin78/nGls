'use client'
import './style.sass'
import Examples from '@/app/components/test3examples'
import InputTest3 from '@/app/components/inputTest3'

export default function Test3() {

    return (
        <div className="test3">
            <h1>Trennbare Verben</h1>
            <h2>Ergänzen  Sie  die Verben</h2>
            <Examples />
            <div className='box'>
                <div className='words'>
                    <h6>auf | stehen</h6> 
                    <h6>ein | kaufen</h6> 
                    <h6>an | rufen</h6> 
                    <h6>fern | sehen</h6> 
                    <h6>mit | kommen</h6> 
                </div>
                <div className='text'>
                    <p>Am Samstag <InputTest3 correctWord={'steht'}/> Emma  um 9 Uhr <InputTest3 correctWord={'auf'}/>.</p>
                    <p>Um 11 Uhr <InputTest3 correctWord={'kauft'}/> sie im Supermarkt <InputTest3 correctWord={'ein'}/>.</p>
                    <p>Am  Nachmittag <InputTest3 correctWord={'ruft'}/> sie  ihre Freundin <InputTest3 correctWord={'an'}/>.</p>
                    <p>Zusammen  <InputTest3 correctWord={'sehen'}/>  sie  <InputTest3 correctWord={'fern'}/>.</p>
                    <p> <InputTest3 correctWord={'kommst'}/> du <InputTest3 correctWord={'mit'}/>?</p>
                </div></div>
            <div className='box'>
                <div className='words'>
                    <h6>auf | räumen</h6> 
                    <h6>ern | sehen</h6> 
                    <h6>an | rufen</h6> 
                    <h6>mit | bringen</h6> 
                    <h6>auf | stehen</h6> 
                </div>
                <div className='text'>
                    <p>Die Kinder <InputTest3 correctWord={'räumen'}/> das Zimmer  zusammen <InputTest3 correctWord={'auf'}/>.</p>
                    <p>Die Kinder  <InputTest3 correctWord={'sehen'}/> gern <InputTest3 correctWord={'fern'}/>.</p>
                    <p>Sie  <InputTest3 correctWord={'ruft'}/> mich jeden Abend <InputTest3 correctWord={'an'}/>.</p>
                    <p>Er  <InputTest3 correctWord={'bringt'}/> einen Salat <InputTest3 correctWord={'mit'}/>.</p>
                    <p>Jeden Morgen  <InputTest3 correctWord={'steht'}/> Mark um 10 Uhr <InputTest3 correctWord={'auf'}/>.</p>
                </div>
            </div>
        </div>
    )
}