import './header.sass'
import mailLogo from '../../img/mailLogo.svg'
import { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {

    render() {
        return(
            <div>    
                <Link to="/" className='mainLink'>
                    <img className='mainLogo' src={mailLogo} alt="1"/>
                    Coffee house
                </Link>
                <Link to="/our-coffee" className='ourLink'>Our coffee</Link>
                <Link to="/foryour" className='forLink'>For your pleasure</Link>
            </div>
        )
    }
}

export default Header;