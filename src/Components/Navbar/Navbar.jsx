import React, {useState} from 'react';
import './navbar.css';
import {GiSurferVan} from 'react-icons/gi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {HiOutlineBars3} from 'react-icons/hi2'

const Navbar = () => {
    // show navbar
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavbar')
    }
    // remove navbar
    const removeNav = () => {
        setActive('navBar')
    }
    //bg navbar
    const [transparent, setTransparent] = useState('header')
    const addBg = () => {
        if(window.scrollY >= 10){
            setTransparent('header activeHeader')
        }
        else{
            setTransparent('header')
        }
    }
    window.addEventListener('scroll', addBg)

    return (
        <section className='navBarSection'>
            <div className={transparent}>
                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className='flex'><GiSurferVan className="icon"/>TinggalJalan.</h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Package</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Gallery</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Review</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login</a>
                            </button>
                            <button className="btn">
                                <a href="#">Sign Up</a>
                            </button>
                        </div>

                    </ul>

                    <div onClick={removeNav} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <HiOutlineBars3 className="icon"/>
                </div>
            </div>
        </section>
    )
}

export default Navbar