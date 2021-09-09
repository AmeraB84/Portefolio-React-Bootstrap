import React from 'react'
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router-dom'
import { AiTwotonePhone } from 'react-icons/ai'
import { GrMail } from "react-icons/gr";



function Contact() {
    const history = useHistory();
    const Envoyer = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jwfzny6',
            'template_9hvmnf3',
            e.target,
            "user_F3PIDKMllej8RGWPWJvqx"
        ).then(res => {
            console.log(res);
            history.push('/confirmContact');
        }).catch(err => console.log(err))

    }
    return (
        <div className="row container">
            <h5 className="MessageC text-center mt-5">Veuillez remplir le formulaire suivant , je tacherai de vous répondre le plus rapidement possible!</h5>
            <form className="container Contact col-md-7" onSubmit={Envoyer}>
                <div className="mb-5">
                    <label for="exampleFormControlInput1" className="form-label mb-3">Nom (Obligatoire):</label>
                    <input type="text" className="form-control mb-4" id="exampleFormControlInput1" placeholder="" name="name" />
                    <label for="exampleFormControlInput1" className="form-label mb-3">Adresse mail (Obligatoire):</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" name="email" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message (Obligatoire): </label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name="message"></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label labelM"
                        for="exampleCheck1"
                        style={{ 'color': 'black' }}
                    >En soumettant ce formulaire, j'accepte que mes données personnelles soient utilisées pour me recontacter. Aucun autre traitement ne sera effectué avec mes informations. Pour connaître et exercer vos droits,
                        veuillez consultez <a href='/politiquedeconfidentialite' target='_blank'> la Politique de confidentialité</a>
                        .</label>
                </div>
                <div className="text-center mb-3">
                    <button type="submit" className="Button">Envoyer</button>
                </div>
            </form>
            <div className='col-md-4 row flex-column contactC'>
                <div className='row mb-5'> <GrMail className='couleur mb-2' size='20px' /><p className='mail'>amera.boudia84@gmail.com</p></div>
                <div className='row'> <AiTwotonePhone className='couleur mb-2' size='20px' /> <p className='phone'>06.58.70.71.83</p></div>
            </div>
        </div>
    )
}

export default Contact
