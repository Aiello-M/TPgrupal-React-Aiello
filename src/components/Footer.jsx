import { Link } from 'react-router-dom'
import logo_facebook from '../assets/logo_facebook.png'
import logo_twitter from '../assets/logo_twitter.png'
import logo_instagram from '../assets/logo_instagram.png'




export const Footer = () => {
  return (
    <>
        <footer className="footer">
            <div className="container">
                <p>Página diseñada por @GrupoReact.com</p>
                <div className="sociales">
                <Link to="https://es-la.facebook.com/login/device-based/regular/login/" target="_blank" className="facebook"> 
                        <img src={logo_facebook} className="logo_facebook"></img>
                </Link>
                <Link to="https://es-la.facebook.com/login/device-based/regular/login/" target="_blank" className="facebook"> 
                        <img src={logo_twitter} className="logo_twitter"></img>
                </Link>
                <Link to="https://es-la.facebook.com/login/device-based/regular/login/" target="_blank" className="facebook"> 
                        <img src={logo_instagram} className="logo_instagram"></img>
                </Link>
                
                </div>
            </div>    
        </footer>    
    </>
  )
}
