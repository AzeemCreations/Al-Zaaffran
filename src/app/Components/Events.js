"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import the modules you need
import 'swiper/swiper-bundle.css'; // Import Swiper styles

import bday from "../../../public/assets/images/birthday.jpg";
import recp from "../../../public/assets/images/reception.jpg";

export default function Events() {
    return (
        <div>
            <section id="events" className="events">
                <div className="container">
                    <div className="section-title">
                        <h2>Events</h2>
                        <p>Organize Your Events in our Restaurant</p>
                    </div>
                    <div data-aos="fade-up">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true} // Enable looping
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 7000, disableOnInteraction: false }}
                        >
                            <SwiperSlide>
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src={bday.src} className="img-fluid" alt="Birthday Event" />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Birthday Parties</h3>
                                        <div className="price">
                                            <p><span>Celebrate Your Birthday at Al Zaaffran Restaurant!</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Make your special day unforgettable with a delightful birthday celebration at Al Zaaffran Restaurant. Whether you’re planning an intimate gathering or a lively party, we offer the perfect setting to enjoy delicious cuisine in a warm, inviting atmosphere. Our team is dedicated to making your birthday as special as you are, with customized menus, beautiful decorations, and attentive service.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check-circle"></i> Customizable Menu</li>
                                            <li><i className="bi bi-check-circle"></i> Dedicated Event Planning</li>
                                            <li><i className="bi bi-check-circle"></i> Complimentary Services</li>
                                        </ul>
                                        <p>
                                            Indulge in our flavorful dishes crafted with the finest ingredients, and let us take care of the details while you relax and enjoy your day with family and friends.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="row event-item">
                                    <div className="col-lg-6">
                                        <img src={recp.src} className="img-fluid" alt="Reception Event" />
                                    </div>
                                    <div className="col-lg-6 pt-4 pt-lg-0 content">
                                        <h3>Private Parties</h3>
                                        <div className="price">
                                            <p><span>Host Your Private Party or Reception at Al Zaaffran Restaurant</span></p>
                                        </div>
                                        <p className="fst-italic">
                                            Celebrate your special occasion in style at Al Zaaffran Restaurant, where elegance meets exceptional service. Whether you’re planning an intimate private party or a grand reception, our venue offers the perfect setting for a memorable event. Enjoy a personalized menu featuring our finest dishes, beautifully presented in an atmosphere that’s both sophisticated and inviting.
                                        </p>
                                        <ul>
                                            <li><i className="bi bi-check-circle"></i> Sophisticated Ambiance</li>
                                            <li><i className="bi bi-check-circle"></i> Customizable Menu</li>
                                            <li><i className="bi bi-check-circle"></i> Dedicated Event Planning</li>
                                        </ul>
                                        <p>
                                            Our dedicated team will work with you to ensure every detail is just right, from the decor to the entertainment, so you can relax and enjoy your day with friends and family.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>

                            {/* Add more SwiperSlide components here as needed */}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
}
