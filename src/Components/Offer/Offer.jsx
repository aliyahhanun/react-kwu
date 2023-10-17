import React, {useEffect} from 'react';
import './offer.css';

import {MdKingBed} from 'react-icons/md'
import {MdBathtub} from 'react-icons/md'
import {FaWifi} from 'react-icons/fa'
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'
import {BsArrowRightShort} from 'react-icons/bs'

import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import img7 from '../../Assets/7.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Offers = [
    {
        id:1,
        imgSrc: img5,
        destTitle: 'Bromo',
        location: 'Malang',
        price: '$1000',
    },
    {
        id:2,
        imgSrc: img6,
        destTitle: 'Bromo',
        location: 'Malang',
        price: '$1000',
    },
    {
        id:3,
        imgSrc: img7,
        destTitle: 'Bromo',
        location: 'Malang',
        price: '$1000',
    },
    {
        id:4,
        imgSrc: img5,
        destTitle: 'Bromo',
        location: 'Malang',
        price: '$1000',
    },
    {
        id:5,
        imgSrc: img6,
        destTitle: 'Bromo',
        location: 'Malang',
        price: '$1000',
    },
    {
        id:6,
        imgSrc: img7,
        destTitle: 'Bromo',
        location: 'Malang',
        price: '$1000',
    }
]

const Offer = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='offer container section'>
            <div className="secContainer">
                <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
                    <h2 className="secTitle">
                        Special Offers
                    </h2>
                    <p>
                        From historical cities to natural spectaculars.
                    </p>
                </div>

                <div className="mainContent grid">

                    {
                        Offers.map(({id, imgSrc, destTitle, location, price}) => {
                            return(
                                <div data-aos="fade-up" data-aos-duration="3300" className="singleOffer">
                                    <div className="destImage">
                                        <img src={imgSrc} alt={destTitle} />
                                        <span className="discount">
                                            30% Off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>
                                                {price}
                                            </h4>
                                            <span className="status">
                                                For Rent
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small>1 Bath</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon" />
                                                <small>Wifi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className="icon" />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className="icon"/>
                                            <small>{location}</small>
                                        </div>

                                        <button className='btn flex'>
                                            View Details
                                            <BsArrowRightShort className="icon"/>
                                        </button>
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

export default Offer