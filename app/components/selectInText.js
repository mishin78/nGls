import Image from 'next/image'

export default function SelectInText({value, open, options, change, optionsOpen, id}) {

    return (
        <div onClick={() => optionsOpen(id)} className="box">
            <h5>{value}</h5>
            <Image src='/arrow.svg' width={20} height={20} alt='arrow'/>
            {open && <div className="options">
                {options.map(j => <button onClick={(e) => change(e,j.content, id)} key={j.content}>{j.content}</button>)}    
            </div>}
        </div>
    )
}