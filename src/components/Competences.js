import React from 'react'
import { jsPDF } from "jspdf";
import Button from 'react-bootstrap/Button'
import cv from '../CV-IMG.png'

function Competences() {

    const Telecharger = () => {
        const doc = new jsPDF('p', 'mm', 'a4');
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        doc.addImage(cv, 'PNG', 0, 0, width, height)
        doc.save("CV-BOUDIA-Amera.pdf");
    }
    return (
        <div>
            <div className="text-center mt-5">
                <h2 className='titreC'>COMPÉTENCES</h2>
                <p className='texteC mt-4'>Elles sont en constantes améliorations car pour moi la joie de ce métier <br />fait que l’on en
                    apprend tous les jours, d’autant plus en étant <br />impliquée, curieuse et passionnée.</p>

            </div>
            <div className='row'>
                <div className="col-md-6  mt-5">
                    <h5 className="itemC">BACK-END</h5>
                    <h4 className="itemC1">NodeJS</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">MongoDB</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "70%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">SQL</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "40%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className="itemC">FRONT-END</h5>
                    <h4 className="itemC1">HTLM</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">CSS</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">JAVASCRIPT/JQUERY</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "85%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">BOOTSTRAP</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">REACTJS</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h5 className="itemC">DIVRES</h5>
                    <h4 className="itemC1">PYTHON</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "50%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">WINDOWS</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "80%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <h4 className="itemC1">LINUX</h4>
                    <div className="progress Bar">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar"
                            style={{ "width": "60%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-6 text-center">
                    <div> <img src={cv} alt="Mon CV" className="image mt-4" /></div>
                    <button className='bC mt-4' onClick={Telecharger}>Télécharger CV</button>
                </div>

            </div>
        </div>
    )
}

export default Competences
