import React, {useEffect} from 'react';
import './review.css';
import {BsArrowRightShort} from 'react-icons/bs'
import img from '../../Assets/1.jpg'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.jpg'
import img4 from '../../Assets/4.jpg'
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

 const Posts = [
    {
        id: 1,
        postImage: img,
        title: 'Beautiful ... ',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
    },
    {
        id: 2,
        postImage: img2,
        title: 'Beautiful ... ',        
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
    },
    {
        id: 3,
        postImage: img3,
        title: 'Beautiful ... ',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
    },
    {
        id: 4,
        postImage: img4,
        title: 'Beautiful ... ',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
    },
    {
        id: 5,
        postImage: img5,
        title: 'Beautiful ... ',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
    },
    {
        id: 6,
        postImage: img6,
        title: 'Beautiful ... ',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
    },
 ]

const Review = () => {

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className='blog container section'>
            <div className="secContainer">
                <div className="secIntro">
                    <h2 data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
                        Our Best Blog?
                    </h2>
                    <p data-aos="fade-up" data-aos-duration="2500">
                        An insight to the incredible experience in the world.
                    </p>
                </div>

                <div className="mainContainer grid">
                    {
                        Posts.map(({id, postImage, title, desc}) => {
                            return(
                                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                                    <div className="imgDiv">
                                        <img src={postImage} alt={title} />
                                    </div>

                                    <div className="postDetails">
                                        <h3 data-aos="fade-up" data-aos-duration="3000">
                                            {title}
                                        </h3>
                                        <p data-aos="fade-up" data-aos-duration="4000" >
                                            {desc}
                                        </p>
                                    </div>

                                    <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                                        Read More
                                        <BsArrowRightShort className="icon"/>
                                    </a>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}

export default Review