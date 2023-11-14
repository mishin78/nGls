

export default function Examples() {

    return (
        <div className="examples">
            <div>
                <input className="right" value={'t'} readOnly={true}/>
                <h5>richtig</h5>
            </div>
            <div>
                <input className="wrong" value={'a'} readOnly={true}/>
                <h5>falsch</h5>
            </div>
        </div>
    )
}