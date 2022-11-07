import React from 'react'

function Cookies() {
    return (
        <div className='container mt-5 cookies'>
            <h3 className='text-center mb-5 titreC'>Consentement aux cookies</h3>
            <h5 className='mb-3 introC'>Cette rubrique vous permet d’en savoir plus sur l’origine et
                l’usage des informations de navigation traitées à l’occasion de votre consultation sur le site internet
                <a href="www.amera-boudia.com" className='lienC mb-3'> www.amera-boudia.com</a>.</h5>
            <p>Lors de votre consultation du site, des informations relatives à votre navigation sont susceptibles d’être enregistrées dans des fichiers appelés
                « Cookies » installés sur votre terminal peut importe (ordinateur, tablette, smartphone, etc.).</p>
            <p>Un cookie est un petit fichier contenant diverses informations textuelles. Il est déposé sur votre terminal (ordinateur, tablette, smartphone, etc.)
                via votre navigateur, par le site web que vous visitez.!!!!!!</p>
            <p>Les différents types de cookies :</p>
            <ul className='liste mb-5'>
                <li className='lienC'>Les cookies essentiels :</li>
                <p>Ces cookies sont nécessaires au bon fonctionnement de notre site et vous permettent d’utiliser les fonctionnalités de base.
                    Sans ces cookies, vous ne pourrez pas utiliser notre site de manière fonctionnelle.</p>

                <li  className='lienC'>Les cookies de confort :</li>
                <p>Ces cookies amènent des fonctionnalités supplémentaires qui sont susceptibles d’intéresser l’internaute,
                    sans pour autant être indispensables au fonctionnement de base du site.</p>

                <li  className='lienC'>Les cookies analytiques : </li>
                <p> Ces cookies nous permettent de connaître l’utilisation et les performances de notre site et d’en améliorer le fonctionnement. Ils portent par exemple sur les pages les plus consultées,
                    les requêtes faites dans notre moteur de recherche etc.</p>

                <li  className='lienC'>Les cookies publicitaires : </li>
                <p>Ces cookies collectent des informations sur vos habitudes de navigation dans le but de vous présenter des publicités adaptées à vos centres d’intérêt. Ces cookies enregistrent votre visite sur notre site, les pages que vous avez visitées et les liens que vous avez suivis ainsi que votre navigation en dehors de notre site. Ils sont également utilisés pour limiter le nombre de fois où vous voyez une publicité ainsi que pour mesurer l’efficacité des campagnes publicitaires. Ils sont généralement placés par des tiers avec notre permission. Le refus de ce type de cookie n’a pas d’impact sur l’utilisation de notre site et n’empêche pas
                    l’affichage de la publicité sur notre site ou sur Internet de manière générale.</p>

            </ul>
            <h3 className='lienC mb-3'>PARAMÉTRER VOTRE NAVIGATEUR</h3>
            <p>Le paramétrage est susceptible de modifier vos conditions d’accès à nos services nécessitant l’utilisation de cookies. Si votre navigateur est configuré de manière à refuser l’ensemble des cookies, vous ne pourrez pas par exemple
                effectuer d’achats ou profiter de fonctions essentielles de notre site.</p>
            <p>Le paramétrage est spécifique à chaque navigateur :</p>
            <ul className='liste'>
                <li className='mb-3'>Pour Internet Explorer™ : <a href="https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies">
                    support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies</a></li>
                <li className='mb-3'>Pour Firefox™ : <a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences">  
                support.mozilla.org/fr/kb/activer-desactiver-cookies-preferences</a></li>
                <li className='mb-3'>Pour Chrome™ : <a href="https://support.google.com/chrome/answer/95647">support.google.com/chrome/answer/95647</a></li>
                <li className='mb-3'>Pour Safari™ : <a href="https://support.apple.com/fr-fr/HT201265"> support.apple.com/fr-fr/HT201265</a></li>
                <li className='mb-5'>Pour Opera™ : <a href="https://help.opera.com/en/latest/web-preferences"> help.opera.com/en/latest/web-preferences</a></li>
            </ul>
            <h3 className='lienC mb-4'>UTILISER UNE PLATEFORME DE GESTION DE COOKIES</h3>
            <p>Vous pouvez décider de refuser la publicité comportementale en utilisant l’outil fourni sur le site suivant : <a href="https://www.youronlinechoices.com/fr/" target='_blank' rel='noreferrer'>www.youronlinechoices.com/fr/</a></p>
            <p>Les cookies déposés en cas d’utilisation des boutons de partage sont également inclus dans cette plateforme.</p>
            <h3  className='lienC mb-4'>PLUS D’INFORMATIONS</h3>
            <p className='mb-5'>Retrouvez plus d’informations sur l’utilisation des cookies sur le site de la CNIL : <a href="https://www.cnil.fr/vos-droits/vos-traces/les-cookies/">www.cnil.fr/vos-droits/vos-traces/les-cookies/</a></p>
        </div>
    )
}

export default Cookies
