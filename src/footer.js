import React from 'react'
import './footer.css'


export default function Footer() {
    return (
        <div className='footer'>
            <small className='brand d-md-none'>Atomic  </small>
            <div className='row justify-content-center'>
                <div><i class="footer-icons fa fa-facebook" aria-hidden="true"></i></div>
                <div><i class="footer-icons fa fa-pinterest" aria-hidden="true"></i></div>
                <div><i class="footer-icons fa fa-instagram" aria-hidden="true"></i></div>
                <div><i class="footer-icons fa fa-twitter" aria-hidden="true"></i></div>
            </div>
            <div className='nav d-flex justify-content-center'>
                <p>Home</p>
                <p>About</p>
                <p>Company</p>
                <p>Dashboard</p>
                <p>Contact</p>
            </div>
            <div className='d-flex p-2 justify-content-center reserved'>
                <small>Copyrights 2022</small>
            </div>
        </div>
    )
}



