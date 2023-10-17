import React, {useEffect} from 'react';
import './footer.css';
import {GiSurferVan} from 'react-icons/gi'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTiktok} from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <div className='footer'>
            <div className="secContainer container grid">
                <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
                    <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
                        <a href="#" className="logo flex">
                            <h1 className='flex'>
                                <GiSurferVan className="icon"/>
                                TinggalJalan.
                            </h1>
                        </a>
                    </div>

                    <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
                        <AiFillInstagram className="icon"/>
                        <FaTiktok className="icon"/>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
                    <span className="linkTitle">
                        Information
                    </span>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Package</a>
                    </li>
                    <li>
                        <a href="#">Gallery</a>
                    </li>
                    <li>
                        <a href="#">Review</a>
                    </li>
                </div>

                <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
                    <span className="linkTitle">
                        Helpful Links
                    </span>
                    <li>
                        <a href="#">Destination</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Travel & Condition</a>
                    </li>
                    <li>
                        <a href="#">Privacy</a>
                    </li>
                </div>

                <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
                    <span className="linkTitle">
                        Contact Us
                    </span>
                    <span className='phone'>+62 811 1231 311</span>
                    <span className='email'>hi@tinggaljalan.com</span>
                </div>
            </div>
        </div>
    )
}

export default Footer