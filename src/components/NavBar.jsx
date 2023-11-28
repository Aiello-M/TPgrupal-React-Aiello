import {NavLink, Outlet } from "react-router-dom"
import logo from '../assets/logo.png'

export const NavBar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-md navbar-light fixed-top">
            <div className="container-fluid">
            <img src={logo} className="logo" width="180"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-underline d-flex align-items-center" >
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link" >     HOME      </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link" > OUR FOOD </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link" > CONTACTO </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
    </>
  )
}

