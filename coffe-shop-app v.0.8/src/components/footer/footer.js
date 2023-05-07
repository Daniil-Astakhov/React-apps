import './footer.sass';
import { Link } from 'react-router-dom'
import mailLogo from '../../img/mainLogoBlack.svg';
import subMainLogoBlack from '../../img/subMainLogoBlack.svg';

const Footer = () => {

    return (
        
        <div className='footer'>    
            <div>    
                <Link to="/" className='headerLink'>
                    <img className='mainLogo' src={mailLogo} alt="1"/>
                    Coffee house
                </Link>
                <Link to="/our-coffee" className='headerLink'>Our coffee</Link>
                <Link to="/foryour" className='headerLink'>For your pleasure</Link>
            </div>
            <img className='footer_submail_logo'
                src={subMainLogoBlack}
                alt="1"/>
        </div>
    )
}

export default Footer;