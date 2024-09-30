import { NavLink } from 'react-router-dom'
 
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
    )
}

export default Navbar