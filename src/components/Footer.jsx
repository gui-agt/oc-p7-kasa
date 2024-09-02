import logo_footer from '../assets/logo_kasa_footer.svg'
import './footer.scss'
 
function Footer() {
    return (
        <footer className='footer'>
            <h1><img src={logo_footer} alt='logo Kasa'></img></h1>
            <p>@ 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer