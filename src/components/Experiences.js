import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import thpS from '../thp-site.png'
import thpM from '../thp-mobile.png'
import clairaM from '../claira react.png'
import clairaS from '../ClairaS.png'
import portefolio from '../portefolio.png'

function Experiences() {
    return (
        <div>
            <Carousel variant="dark" className="container mt-3 carousell mb-3">
                <Carousel.Item className="Slide">
                    <div className="row ImgC text-center mt-3">
                    <img
                        className="d-block  col-6"
                        style={{"boxShadow":"0 0 2em gold"}}
                        src={thpS}
                        alt="First slide"
                    />
                    <img
                        className="d-block col-2"
                        src={thpM}
                        alt="Second slide"
                        style={{"boxShadow":"0 0 2em gold"}}
                    />
                    </div>
                    <Carousel.Caption>
                        <h5 className='titreR'> Trusted health partners </h5>
                        <p className='paragrapheR'>Réalisation de la partie front-end d'une progressive web application résponsive en Reactjs</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="Slide">
                    <div className="row ImgC  text-center mt-5 mb-3">
                    <img
                        className="d-block  col-5"
                        src={clairaS}
                        alt="First slide"
                        style={{"boxShadow":"0 0 2em gold"}}
                    />
                    <img
                        className="d-block col-2 clairam "
                        style={{"boxShadow":"0 0 2em gold"}}
                        src={clairaM}
                        alt="Second slide"
                    />
                    </div>
                    <Carousel.Caption className="mt-5">
                        <h5 className='titreR'>Projet de formation : Site e-commerce résponsive CLAIRA</h5>
                        <p className='paragrapheR'>Réalisation de la partie back-end en Nodejs et MongoDb et la partie front-end en Angular</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="Slide">
                    <div className="row ImgC  text-center mt-5 mb-3">
                    <img
                        className="d-block col-8"
                        style={{"boxShadow":"0 0 2em gold"}}
                        src={portefolio}
                        alt="Second slide"
                    />
                    </div>
                    <Carousel.Caption className="mt-5">
                        <h5 className='titreR'>Mon portefolio  </h5>
                        <p className='paragrapheR'>Réalisation d'un site vitrine résponsive en Reactjs et Bootstrap</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>

        </div>
    )
}

export default Experiences
