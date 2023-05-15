import './Spinner.scss'
const Spinner = () => {
    
    return (

        <div className="spiner" stile={{background: "none", margin: "0 auto", display: "block"}}>
            <svg viewBox="0 0 100 100" width="100" height="100"  >
                <circle cx="20" cy="20" r="20" strokeWidth="5" stroke="#fff" fill="transparent"/>
                <path d="M50 20
                        A 30 30 0 1 1 50 80 
                        A 30 30 0 1 1 50 20
                        Z" fill="#000" stroke="#fff" strokeWidth="5">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1s" repeatCount="indefinite"/>
                </path>
                <path d="M50 40
                        A 10 10 0 1 0 50 60
                        A 10 10 0 1 0 50 40
                        Z" fill="#fff" stroke="#fff" strokeWidth="5">
                    <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="-360 50 50" dur="2s" repeatCount="indefinite"/>
                </path>
                <circle cx="50" cy="50" r="10" strokeWidth="5" stroke="#fff" fill="#f44336">
                    <animate attributeName="r" from="10" to="30" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" from="1" to="0" dur="1s" repeatCount="indefinite"/>
                </circle>
            </svg>
        </div>
    )
}

export default Spinner;