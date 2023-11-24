'use client'
import DerDiDas from "@/app/components/derdiedas"
import EinSelect from "@/app/components/einSelect"
import './style.sass'


export default function Nomen() {

    return (
        <div className="nomen">
            <h1>Nomen</h1>
            <h6>1. Ergänzen Sie: der , die , das</h6>
            <div className="test1">
                <div><DerDiDas correctValue={'der'}/><p>Mann</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Frau</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Junge</p></div>
                <div><DerDiDas correctValue={'das'}/><p>Mädchen</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Nachbar</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Nachbarin</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Freund</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Freundin</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Onkel</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Tante</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Lehrer</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Lehrerin</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Verkäufer</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Verkäuferin</p></div>
                <div><DerDiDas correctValue={'der'}/><p>Arzt 👨‍⚕️</p></div>
                <div><DerDiDas correctValue={'die'}/><p>Ärztin</p></div>
            </div>
            <h6>2. ein oder eine ? Ergänzen Sie.</h6>
            <div className="test2">
                <p>der / das — ein</p>
                <p>die — eine</p>
                <div><p>das Buch 📖 —</p> <EinSelect correctValue={'ein'}/> <p>Buch</p></div>
                <div><p>die Blume 🌷 —</p> <EinSelect correctValue={'eine'}/> <p>Blume</p></div>
                <div><p>der Kuchen 🎂 —</p> <EinSelect correctValue={'ein'}/> <p>Kuchen</p></div>
                <div><p>die Banane 🍌 —</p> <EinSelect correctValue={'eine'}/> <p>Banane</p></div>
                <div><p>der Apfel 🍎 —</p> <EinSelect correctValue={'ein'}/> <p>Apfel</p></div>
                <div><p>die Birne 🍐 —</p> <EinSelect correctValue={'eine'}/> <p>Birne</p></div>
                <div><p>der Zug 🚂 —</p> <EinSelect correctValue={'ein'}/> <p>Zug</p></div>
                <div><p>der Bus 🚎 —</p> <EinSelect correctValue={'ein'}/> <p>Bus</p></div>
                <div><p>die S-Bahn🚈 —</p> <EinSelect correctValue={'eine'}/> <p>S-Bahn</p></div>
                <div><p>das Geschenk 🎁 —</p> <EinSelect correctValue={'ein'}/> <p>Geschenk</p></div>
                <div><p>das Auto 🚙 —</p> <EinSelect correctValue={'ein'}/> <p>Auto</p></div>
                <div><p>die Party 🥳 —</p> <EinSelect correctValue={'eine'}/> <p>Party</p></div>
                <div><p>das Haus 🏠 —</p><EinSelect correctValue={'ein'}/> <p>Haus</p></div>
                <div><p>die Schule 🏫 —</p> <EinSelect correctValue={'eine'}/> <p>Schule</p></div>
                <div><p>die Hand 🤚 —</p><EinSelect correctValue={'eine'}/>  <p>Hand</p></div>
                <div><p>der Rucksack 🎒 —</p> <EinSelect correctValue={'ein'}/> <p>Rucksack</p></div>
                <div><p>der Koffer 🧳 —</p> <EinSelect correctValue={'ein'}/> <p>Koffer</p></div>
                <div><p>das Handy 📱 —</p> <EinSelect correctValue={'ein'}/> <p>Handy</p></div>
                <div><p>die Freundin —</p> <EinSelect correctValue={'eine'}/> <p>Freundin</p></div>
                <div><p>der Bleistift ✏️—</p> <EinSelect correctValue={'ein'}/> <p>Bleistift</p></div>
                <div><p>das Fahrrad 🚲 —</p> <EinSelect correctValue={'ein'}/> <p>Fahrrad</p></div>
                <div><p>die Bluse👚 —</p> <EinSelect correctValue={'eine'}/> <p>Bluse</p></div>
                <div><p>das T-shirt —</p> <EinSelect correctValue={'ein'}/> <p>T-shirt</p></div>
                <div><p>der Mantel 🧥 —</p> <EinSelect correctValue={'ein'}/> <p>Mantel</p></div>
            </div>
        </div>
    )
}
 








