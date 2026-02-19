import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
function Footer() {
    return (
        <div className='row footer text-center'>
            <div className='col-6 mt-3'>
                <a href="/mentionslegales" target='_blank'>Mentions légales</a><br />
                <a href="/politiquedeconfidentialite" target='_blank'>CGU</a>
            </div>
            <div className='col-5'>
                <a href="https://www.linkedin.com/in/amera-boudia-15551b19a/" target="_blank" rel='noreferrer'><AiFillLinkedin className='mt-4' size="30px" color="blue" /></a>
            </div>
        </div>
    )
}

export default Footer
