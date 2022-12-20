import './Footer.css'

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <nav className="nav-footer">
                        <h2 className="footer-title">Universidog</h2>

                        <ul className="nav-link-footer">
                            <li className="nav-items">
                                <a href="#" className="nav-links">Inicio</a>
                            </li>
                            <li className="nav-items">
                                <a href="#" className="nav-links">Nosotros</a>
                            </li>
                            <li className="nav-items">
                                <a href="#" className="nav-links">Escuela</a>
                            </li>
                            <li className="nav-items">
                                <a href="#" className="nav-links">Contacto</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-copy container">
                    <div className="footer-social">
                        <a href="#" className="footer__icons"><img src="/images/facebook.svg" className="footer-img" /></a>
                        <a href="#" className="footer__icons"><img src="/images/twitter.svg" className="footer-img" /></a>
                        <a href="https://www.instagram.com/universidog_/?hl=es" className="footer__icons" ><img src="/images/instagram.svg" className="footer-img" /></a>
                    </div>
                </div>
                <h3 className="footer-copyright">Derechos reservados &copy; Universidog</h3>
            </div>

        </>
    )
}
