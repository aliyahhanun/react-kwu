import React, {useEffect} from 'react';
import './package.css';
import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'
import img from '../../Assets/2.jpg'
import img2 from '../../Assets/3.jpg'
import img3 from '../../Assets/4.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id:1,
        imgSrc: img,
        destTitle: 'Bromo',
        location: 'Malang',
    },
    {
        id:2,
        imgSrc: img2,
        destTitle: 'Bromo',
        location: 'Malang',
    },
    {
        id:3,
        imgSrc: img3,
        destTitle: 'Bromo',
        location: 'Malang',
    },
    {
        id:4,
        imgSrc: img,
        destTitle: 'Bromo',
        location: 'Malang',
    },
    {
        id:5,
        imgSrc: img2,
        destTitle: 'Bromo',
        location: 'Malang',
    },
    {
        id:6,
        imgSrc: img3,
        destTitle: 'Bromo',
        location: 'Malang',
    }
]

const Package = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="package section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
                        <h2 className="secTitle">
                            Pilih Paket Anda
                        </h2>
                        <p>
                            Kami menawarkan beberapa paket perjalanan untuk anda. Silahkan lihat dibawah ini untuk detailnya. 
                        </p>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
                        <BsArrowLeftShort className="icon leftIcon"/>
                        <BsArrowRightShort className="icon"/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({id, imgSrc, destTitle, location}) => {
                            return(
                                <div data-aos="fade-up" className="destination">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image title" />
                                        <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>
                                                {location}
                                            </p>

                                            <BsArrowRightShort className='icon'/>
                                        </div>
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>
                                        <div className="destText flex">
                                            <h6>{location}</h6>
                                            <span className='flex'>
                                                <span className="dot">
                                                    <BsDot className="icon"/>
                                                </span>
                                                Dot
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Package