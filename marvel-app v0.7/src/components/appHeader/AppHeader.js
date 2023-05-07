import './appHeader.scss';
import marvel from '../../resources/marvel.svg'

const AppHeader = () => {
    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="">
                <img style={{position: "relative"}} src={marvel} alt="" /> Information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                    <li><a href="">Characters</a></li>
                    /
                    <li><a href="">Comics</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;