import "../styles/Layout.css"
import {Link} from 'react-router-dom'
import {ReactComponent as Phone} from '../assets/phone.svg'
import {ReactComponent as Mail} from '../assets/mail.svg'
import {ReactComponent as Location} from '../assets/location.svg'
import {useLocation} from 'react-router-dom'
import {useEffect} from 'react'

const Layout = ({children}) => {
    const location = useLocation();

    useEffect(()=> {
        console.log(location.pathname)

    }, [location])
    console.log(location.pathname)
  return (
    <div className="layout">
        <div className="nav-container">
            <div className="main-header">
                <header className="logo">
                    <h1 className="header">Tommy Ehitusgrupp</h1>
                </header>
            </div>
            <div className="nav-bar">
                <p><Link to="/tommy-ehitusgrupp" className={`navbar-anchor ${location.pathname === "/tommy-ehitusgrupp" ? "navbar-active" : ""}`}>AVALEHT</Link></p>
                <p><Link to="/hinnakiri" className={`navbar-anchor ${location.pathname === "/hinnakiri" ? "navbar-active" : ""}`}>HINNAKIRI</Link></p>
                <p><Link to="/tehtud-tood" className={`navbar-anchor ${location.pathname === "/tehtud-tood" ? "navbar-active" : ""}`}>TEHTUD TÖÖD</Link></p>
                <p><Link to="/kontakt" className={`navbar-anchor ${location.pathname === "/kontakt" ? "navbar-active" : ""}`}>KONTAKT</Link></p>
            </div>
        </div>
        {children}
        <footer className="layout-footer">
            <div className="border-boxshadow">
                <div className="border">
                    <div className="footer">
                        <div className="second-footer">
                            <div className="nav-copyright">
                                <p className="footer-paragraph"><em>Oled murega siis võta meiegea ühendust, oleme väga abivalmid ja koos leiame alati lahenduse!</em></p>
                                <div className="footer-info">
                                    <div className="div-flex"><Mail width="1rem" /><Link className="footer-a" href="mailto:tommyehitusgrupp@gmail.com">tommyehitusgrupp@gmail.com</Link></div>
                                    <div className="div-flex"> <Phone width="1rem" /><Link className="footer-a" href="tel:37256555255">372 5655 5255</Link><span className="footer-a">E-R 8-16</span></div>
                                    {/* <div className="div-flex"><Location width="1rem" /><span className="footer-a">Sütiste tee 19-12, 13911 Tallinn</span></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="copyright-info">
                            <p className="rakanishu">&copy; <i>Tommy Ehitusgrupp</i> OÜ 2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout