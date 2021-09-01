import React from 'react'
import photocv from '../photocv.png'

const AboutMe = () => {
    return (
        <div>
            <h3 className="titreAB text-center">A propos de moi </h3>
            <div className="row">
                <img src={photocv} alt="MaPhoto" className="imgAB col-md-5"></img>
                <p className="text-AB col-md-7">Hello ! je suis amera , ingénieur informaticienne junior spécialisée dans le développement informatique .<br />
                    Mon parcours est assez atypique , après l'obtention de mon diplôme d’ingénieur en Algérie , je me suis installée en France et pour des raisons familiales et
                    financières je n’ai pas pu travailler dans le domaine de l’informatique .Mon parcours professionnel est très variée , j’ai exercée dans plusieurs domaines notamment dans la santé autant que aide soignante pendant 4 ans ;
                    une expérience qui s’est conclue par une opportunité de faire un formation et de me rediriger dans le secteur du numérique , quel bonheur de se sentir enfin à sa place .je continue donc dans cet axe avec envie, motivation et des idées plein la tête.
                    D'un naturel réfléchi et organisé, je suis capable de m’adapter à un poste de travail et à une équipe assez rapidement.<br />
                    Autonome, j’apprends vite et je serais ravie de mettre ces qualités et mes compétences  au service de votre entreprise.<br/>
                    
                </p>
            </div>
        </div>
    )
}

export default AboutMe
