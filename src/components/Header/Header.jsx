import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className='green darken-4'>
        <div className='nav-wrapper'>
          <Link to='/' className='brand-logo'>
            React Shop
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
