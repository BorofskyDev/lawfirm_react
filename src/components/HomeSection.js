import React from 'react';
import { Button } from './Button';
import { NavLink } from 'react-router-dom';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn
} from 'react-icons/fa';
import { ImYoutube2 } from 'react-icons/im'
import '../Static/CSS/HeroSection.css';
import '../Static/CSS/HomeSocial.css';

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc,
    headline, description, img, alt, imgStart,
    headerText, socialText, pitchText,

}) {
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
                <div className='container'>
                    <div className="row home__hero-row" style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="home__hero-img-wrapper" >
                                <img src={img} alt={alt} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='social-menu'>
                <h1 className='social-header'>{headerText}</h1>
                <h3 className='smaller-header'>{socialText}</h3>
                <p className='social-text'>{pitchText}</p>

                <ul>
                    <li><NavLink to='#' >{<FaFacebookF />}</NavLink></li>
                    <li><NavLink to='#' >{<FaTwitter />}</NavLink></li>
                    <li><NavLink to='#' >{<FaInstagram />}</NavLink></li>
                    <li><NavLink to='#' >{<ImYoutube2 />}</NavLink></li>
                    <li><NavLink to='#' >{<FaLinkedinIn />}</NavLink></li>

                </ul>
            </div>
        </>
    );
}

export default HeroSection


