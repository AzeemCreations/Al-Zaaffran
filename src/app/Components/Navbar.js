import React from 'react'
import logo from "../../../public/assets/images/alzaaffran-logo.png"
import veg from "../../../public/assets/images/veg.png"
import nonveg from "../../../public/assets/images/nonveg.png"
import "./Navbar.css"
import "../globals.css"

export default function Navbar() {
    return (
        <>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-center justify-content-md-between">

                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-phone d-flex align-items-center"><span>+91 9371970303</span></i>
                        <i className="bi bi-clock d-flex align-items-center ms-4"><span> Everyday: 11AM - 11PM</span></i>
                    </div>
                    <div class="languages d-none d-md-flex align-items-center">
                        <ul>
                            <li><img src={veg.src} alt='Veg' />Veg</li>
                            <li><img src={nonveg.src} alt='Non-Veg' />Non-Veg</li>
                        </ul>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top d-flex align-items-cente">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

                    {/* <h1 className="logo me-auto me-lg-0"><a href="index.html">Restaurantly</a></h1> */}
                    <a href="/" className="me-auto me-lg-0"><img src={logo.src} alt="" className='logo' /></a>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                            <li><a className="nav-link scrollto" href="#specials">Specials</a></li>
                            <li><a className="nav-link scrollto" href="#events">Events</a></li>
                            <li><a className="nav-link scrollto" href="#chefs">Chefs</a></li>
                            <li><a className="nav-link scrollto" href="#reviews">Reviews</a></li>
                            <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
                            {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li> */}
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">Order Now</a>

                </div>
            </header>
        </>
    )
}
