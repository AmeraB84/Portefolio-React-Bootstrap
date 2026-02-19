import React from 'react'
import Typed from "react-typed"
import Particles from "react-particles-js";
const Header = () => {
    return (
        <>
            <Particles
                className='particles-canvas'
                params={{
                    particles: {
                        number: {
                            value: 3,
                            density: {
                                enable: true,
                                value_area: 100
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 6,
                                color: '#f9ab00',
                            }
                        }
                    }

                }} />
            <div className="header-wraper">
                <div className="min-info">
                    <h2>Automatisatiser la gestion de vos applications avec efficacite, du développement jusqu'au déploiement en continu on promise ou en cloud</h2>
                    <Typed
                        className='typed-text'
                        strings={["Site vitrine", "site e-commerce", "Automatiser le deploiement des applications conteneurisés"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    <a href="/contactme" className="btn-min-offer">Contactez moi !</a>
                </div>
            </div>
        </>
    )
}

export default Header
