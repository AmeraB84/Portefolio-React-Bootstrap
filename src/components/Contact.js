import React from 'react'
import emailjs from 'emailjs-com'
import { useHistory } from 'react-router-dom';

function Contact() {
    const history = useHistory();
    const Envoyer = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jwfzny6',
        'template_9hvmnf3',
        e.target,
        "user_F3PIDKMllej8RGWPWJvqx"
        ).then(res=>{
            console.log(res);
            history.push('/confirmContact');
        }).catch(err=>console.log(err))

    }
    return (
        <form className="container Contact" onSubmit={Envoyer}>
            <h5 className="MessageC text-center">Veuillez remplir le formulaire suivant , je tacherai de vous répondre le plus rapidement possible!</h5>
            <div className="mb-5">
                <label for="exampleFormControlInput1" className="form-label mb-3">Votre Nom</label>
                <input type="text" className="form-control mb-4" id="exampleFormControlInput1" placeholder="" name="name" />
                <label for="exampleFormControlInput1" className="form-label mb-3">Votre adresse mail</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="" name="email" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Votre message </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" name="message"></textarea>
            </div>
            <div className="text-center">
                <button type="submit" className="Button">Envoyer</button>
            </div>
        </form>
    )
}

export default Contact
