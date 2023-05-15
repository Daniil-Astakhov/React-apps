import './appHeader.scss';
import marvel from '../../resources/marvel.svg';
import { Link, NavLink } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to='/'>
          <img className="app__title-img" src={marvel} alt="" /> Information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink end to="/" className="nav-link" activeclass="active-link">Characters</NavLink>
          </li>
          <li>
            <span>/</span>
          </li>
          <li>
            <NavLink to="/comics" className="nav-link" activeclass="active-link">Comics</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
