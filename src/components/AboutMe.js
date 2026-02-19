import React from 'react'
import photocv from '../photocv.png'

const AboutMe = () => {
    return (
        <div>
            <h3 className="titreAB text-center">A propos de moi </h3>
            <div className="row">
                <img src={photocv} alt="MaPhoto" className="imgAB col-md-4 h-auto"></img>
                <p className="text-AB col-md-7">Hello !! je suis amera , ingénieur devops spécialisée dans le développement informatique des applications et le deploiement en cloud.<br />
                    Mon parcours est assez atypique , après l'obtention de mon diplôme d’ingénieur en Algérie , je me suis installée en France et pour des raisons familiales et
                    financières je n’ai pas pu travailler dans le domaine de l’informatique.<br/>
                    Mon parcours professionnel est très variée , j’ai exercée dans plusieurs domaines;
                    des expériences qui se sont conclue par une opportunité de faire un formation et de me rediriger dans le secteur du numérique , quel bonheur de se sentir enfin à sa place. Je continue donc dans cet axe avec envie, motivation et des idées plein la tête.
                    Ayant un grand intérêt pour l’administration des infrastructures et au développement informatiques , je suis passionnée par les technologies autour de la conteneurisation tel que Docker, k8s, Gitlab-ci,ArgoCD; je souhaite faire usage de mes connaissances et de mon expertise acquise durant mes 2
                    ans d’expérience autant qu’ingénieur DevOps et 1 ans autant que developpeur web afin de vous apporter un appui dans la mise en place d’une chaine automatisée de la création jusqu’à la mise en
                    production de vos projets . Je suis réfléchie et organisée, autonome, j’apprends vite et je serais ravie
                    de mettre mes qualités et mes compétences au service de votre entreprise.
                    
                </p>
            </div>
        </div>
    )
}

export default AboutMe
