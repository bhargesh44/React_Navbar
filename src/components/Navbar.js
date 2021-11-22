import React, { useState } from 'react'

import "./navbar.css"
import {FaFacebookSquare,  FaInstagramSquare , FaYoutubeSquare } from "react-icons/fa"

import { GiHamburgerMenu } from "react-icons/gi"

import { NavLink } from "react-router-dom";


function Navbar() {
    const [showMediaIcon , setShowMediaIcon] = useState(false);
    return (
        <>
            <nav className="main_nav">
                
                <div className="logo">
                    <h2>
                        <span>B</span>hargesh 
                        <span>G</span>ediya
                    </h2>
                </div>

                <div className= {showMediaIcon ? "menu_link mobile_menu_link" : "menu_link" }>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>


                <div className="social_media">
                    <ul className="social_media_desktop">
                        <li>
                            <a href="https://www.youtube.com/">
                                <FaYoutubeSquare className="youtube" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/">
                                <FaFacebookSquare className="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/">
                                <FaInstagramSquare className="instagram" />
                            </a>
                        </li>
                    </ul>

                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcon(!showMediaIcon)} >
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav> 

            {/* <section className="hero_section">
                <p> welcome to </p>
                <h1> Bhargesh Gediya</h1>
            </section> */}
        </>
    )
}

export default Navbar
