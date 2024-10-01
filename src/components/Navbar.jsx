import { NavLink } from 'react-router-dom';

// Navbar component: renders a navigation menu with links to the home and about pages, highlighting the active link.

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
