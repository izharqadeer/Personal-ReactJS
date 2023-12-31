import React from 'react'
import profileImg from '../../assets/profile-img1.png';
import shapeOne from '../../assets/shape-1.png';
import shapeTwo from '../../assets/shape-2.png';

import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import CV from '../../assets/Izhar Qadeer.pdf';
import './home.css';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home__wrapper">
                <div className="home__container container">
                    <p className="home__subtitle text-cs">Hello, <span>My Name Is</span></p>

                    <h1 className="home__title text-cs">
                        <span>IZHÁR</span> QADEER
                    </h1>

                    <p className="home__job">
                        <span className="text-cs">I Am</span> <b>Web Developer</b>
                    </p>

                    <div className="home__img-wrapper">
                        <div className="home__banner">
                            <img src={profileImg} alt="" className="home__profile" />
                        </div>

                        <p className="home__data home__data-one">
                            <span className="text-lg">
                                4 <b>+</b>
                            </span>

                            <span className="text-sm text-cs">
                                Years of coding <span>Experience</span>
                            </span>
                        </p>

                        <p className="home__data home__data-two">
                            <span className="text-lg">
                                20 <b>+</b>
                            </span>

                            <span className="text-sm text-cs">
                                Completed <span>Projects</span>
                            </span>
                        </p>

                        <img src={shapeOne} alt="" className="shape shape__1" />
                        <img src={shapeTwo} alt="" className="shape shape__2" />
                        <img src={shapeTwo} alt="" className="shape shape__3" />
                    </div>

                    <p className="home__text">
                        From Jamia, New Delhi. I have rich experience in Web development using ReactJS. I love to talk with you about our unique
                    </p>

                    <div className="home__socials">
                        <a href="https://www.linkedin.com/in/izhar-qadeer-840b3919a/" target="_blank" rel="noreferrer" className="home__social-link">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/mohdayan_03/" target="_blank" rel="noreferrer" className="home__social-link">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/izharqadeer" target="_blank" rel="noreferrer" className="home__social-link">
                            <FaGithub />
                        </a>
                    </div>

                    <div className="home__btns">
                        <a download='' href={CV} className="btn text-cs">
                            Download CV
                        </a>
                        <a href="#skills" className="hero__link text-cs">
                            My Skills
                        </a>
                    </div>
                </div>

                <div className="deco deco__left">
                    <img src={shapeOne} alt="" className="shape" />
                </div>
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Web Developer</span>
            </div>
        </section>
    )
}

export default Home
