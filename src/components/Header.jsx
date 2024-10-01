import Navbar from './Navbar';
import logo from '../assets/logo_kasa.svg';
import './header.scss';

// Header component: displays the Kasa logo and the navigation bar.

function Header() {
    return (
        <header className="header">
            <h1>
                <img src={logo} alt="logo Kasa"></img>
            </h1>
            <Navbar />
        </header>
    );
}

export default Header;
