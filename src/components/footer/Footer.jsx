import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container grid">
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/in/izhar-qadeer-840b3919a/" target="_blank" rel="noreferrer" className="footer__social-link">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.instagram.com/mohdayan_03/" target="_blank" rel="noreferrer" className="footer__social-link">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/izharqadeer" target="_blank" rel="noreferrer" className="footer__social-link">
                        <FaGithub />
                    </a>
                </div>

                <p className="footer__copyright text-cs">
                    &copy; 2023 <span>IQ</span>. All Rights Reserved
                </p>

                <p className="footer__copyright text-cs">
                    Developed by <span>Izhar Qadeer</span>
                </p>
            </div>
        </footer>
    )
}

export default Footer
