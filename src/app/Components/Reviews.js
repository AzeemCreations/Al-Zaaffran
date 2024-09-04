"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Import the modules you need
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export default function Reviews() {

    return (
        <div>
            <section id="reviews" className="testimonials section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Reviews</h2>
                        <p>What customers are saying about us</p>
                    </div>

                    <div className="swiper" data-aos="fade-up">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={30}
                            loop={true} // Enable looping
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 7000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { // Mobile and small screens
                                    slidesPerView: 1,
                                },
                                1024: { // Desktop and larger screens
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <p style={{ minHeight: "350px" }}>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        The Chicken Lebanese Grill and Butter Garlic Chicken Tandoori were exceptional. The Veg Crispy and Paneer Pasanda were delicious. The Chicken Takatak paired perfectly with Butter Roti, and the Chicken Biryani was outstanding.
                                        <br />
                                        Very nice ambiance, highly recommended for families, friends, and couples.
                                        <br />
                                        Last but not least, The staff was very attentive, providing excellent service.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjVgTeSKjy8VZqxSOWqJdFQlUt_DPldTsTSNv33hRbE_wCXXLaZi=w75-h75-p-rp-mo-ba2-br100" className="testimonial-img" alt="" />
                                    <h3>Abhijeet Kamble</h3>
                                    <h4 style={{ color: "gold" }}><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i></h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <p style={{ minHeight: "350px" }}>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        If anyone searching for non-veg restaurant then Al-Zafraan is the best 👌with reasonable prices.
                                        <br />
                                        <br />
                                        😋Starters and dishes was just fab and also there staff was so friendly✌.
                                        <br />
                                        Must visit👍.<i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjXIMRik4IK7s_iDdFAuk0E-2x5t5xCBDaIsgPs19aD-B9Ltae5G=w75-h75-p-rp-mo-br100" className="testimonial-img" alt="" />
                                    <h3>Afreen K</h3>
                                    <h4 style={{ color: "gold" }}><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i></h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <p style={{ minHeight: "350px" }}>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        A real treat for nonveg lover's. Must try chicken Mandi they serves full chicken on your plate in Tandoori style. Must try biryani, chicken crispy, afgan chicken and all dessert.
                                        <br />
                                        <br />
                                        Food: 5/5
                                        <br />
                                        Service: 4/5
                                        <br />
                                        Atmosphere: 5/5
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjWr-QwoHgGoJXNGvmUuMoC457-CkIQNTfl-YdXD-VNXjkN9PPI=w75-h75-p-rp-mo-ba5-br100" className="testimonial-img" alt="" />
                                    <h3>Anirudha Gondhalekar</h3>
                                    <h4 style={{ color: "gold" }}><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star' style={{ color: "grey" }}></i></h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <p style={{ minHeight: "350px" }}>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Very Authentic and mild biryani, just loved it not so spicy full of taste, must try biryani in sangli.
                                        <br />
                                        <br />
                                        Food: 5/5<br />
                                        Service: 5/5<br />
                                        Atmosphere: 5/5
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="https://lh3.googleusercontent.com/a-/ALV-UjVmB6gQWjMMcrwWSoFzge6Vp6Aam86tSt9UkuSORWzgb67kBlOgvw=w75-h75-p-rp-mo-ba3-br100" className="testimonial-img" alt="" />
                                    <h3>Mazhar Pathan</h3>
                                    <h4 style={{ color: "gold" }}><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i></h4>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-item">
                                    <p style={{ minHeight: "350px" }}>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Excellent food and excellent service.nice and cozy ambience.Had great experience dine in with family.Must visit place in sangli
                                        <br />
                                        <br />
                                        Food: 5/5
                                        <br />
                                        Service: 5/5
                                        <br />
                                        Atmosphere: 5/5
                                        <br />
                                        Recommended dishes: Rozali Kebab
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="https://www.freeiconspng.com/uploads/am-a-19-year-old-multimedia-artist-student-from-manila--21.png" className="testimonial-img" alt="" />
                                    <h3>Yakub Maner</h3>
                                    <h4 style={{ color: "gold" }}><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i><i className='bx bxs-star'></i></h4>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </section >
        </div >
    )
}
