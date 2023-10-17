import React, {useEffect} from 'react';
import './home.css';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='home'>
            {/* <div className="overlay"></div> */}
            <div className="secContainer">
                <div className="homeText">
                    <h1 data-aos="fade-up" className="title">
                        Jelajahi Wisata <br/> di Kota Malang Bersama Kami
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                    Jelajahi Destinasi Terbaik Bersama Kami dalam Petualangan Kelompok Tak Terlupakan. Temukan Open Trip Anda Hari Ini!
                    </p>

                    <button data-aos="fade-up" data-aos-duration="3000" className='btn'>
                        <a href="#">Explore Now</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Home