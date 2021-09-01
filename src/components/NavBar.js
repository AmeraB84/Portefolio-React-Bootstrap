import React from 'react'
import AB from '../AB.png'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

                <a className="navbar-brand" href='/'><img src={AB} alt="logo..." className="logo"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href='/'>Accueil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href='/aboutme'>A propos de moi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/competences'>Mes compétances</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/'>Mes experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/contactme'>Contactez moi</a>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    )
}

export default NavBar
