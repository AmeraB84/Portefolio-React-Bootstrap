import React from 'react'
import Alert from 'react-bootstrap/Alert'

function ConfirContact() {
    return (
        <div className='container text-center Marge'>
            <Alert variant="success">
                <Alert.Heading>Confirmation d'envoi !</Alert.Heading>
                <p>
                    Votre message a bien était envoyée
                </p>

            </Alert>
            <div className='Marge' >
            <a href="/" className='GoHome'> Retour à l'accueil</a>
            </div>
        </div>
    )
}

export default ConfirContact
