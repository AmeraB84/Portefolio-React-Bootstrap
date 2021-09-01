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
                                width: 4,
                                color: '#f9ab00',
                            }
                        }
                    }

                }} />
            <div className="header-wraper">
                <div className="min-info">
                    <h1>Développement sites web et mobiles pour vos projets</h1>
                    <Typed
                        className='typed-text'
                        strings={["Site vitrine", "site e-commerce", "développement frontend et/ou backend"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    <a href="/contactm" className="btn-min-offer">Contactez moi !</a>
                </div>
            </div>
        </>
    )
}

export default Header
