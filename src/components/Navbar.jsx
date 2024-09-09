import { NavLink } from 'react-router-dom'
 
function Navbar() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Accueil</NavLink></li>
                <li><NavLink to="/about" activeClassName="active">A propos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar