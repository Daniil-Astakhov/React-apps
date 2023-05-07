import img from './error.jpg'
import './errorMessage.scss'

const ErrorMessage = () => {
    return (
        <div className='error' >
           <img style={{display: 'block', height: '260px'}} src={img} alt="error" /> 
           <p className='error_p'>
           You have lost this battle with the server. <br /> Looks like the database is broken...
           </p>
        </div>
        
        
    )
}

export default ErrorMessage;