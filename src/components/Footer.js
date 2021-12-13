import React from 'react';
import '../Static/CSS/Footer.css';
import { NavLink } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <NavLink to='/sign-up'>History</NavLink>
                        <NavLink to='/'>Testimonials</NavLink>
                        <NavLink to='/'>Careers</NavLink>
                        <NavLink to='/'>Licenses</NavLink>
                        <NavLink to='/'>Terms of Service</NavLink>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <NavLink to='/'>Instagram</NavLink>
                        <NavLink to='/'>Facebook</NavLink>
                        <NavLink to='/'>Youtube</NavLink>
                        <NavLink to='/'>Twitter</NavLink>
                        <NavLink to='/'>Linkedin</NavLink>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <NavLink to='/' className='social-logo'>
                            <GoLaw className='navbar-icon' />
                            NZA Lawfirm
                        </NavLink>
                    </div>
                    <small className='website-rights'>vSolovyov © 2021</small>
                    <div className='social-icons'>
                        <NavLink
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </NavLink>
                        <NavLink
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </NavLink>
                        <NavLink
                            className='social-icon-link'
                            to={
                                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </NavLink>
                        <NavLink
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </NavLink>
                        <NavLink
                            className='social-icon-link'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;