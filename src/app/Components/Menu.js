import React, { useState, useEffect } from 'react';
import "./Menu.css";
import starter1 from "../../../public/assets/images/Menu/Starters/rozali.jpg";
import starter2 from "../../../public/assets/images/Menu/Starters/chickencrispy.jpg";
import starter3 from "../../../public/assets/images/Menu/Starters/chickenkebab.jpg";
import main1 from "../../../public/assets/images/Menu/Main/dilruba.jpg";
import main2 from "../../../public/assets/images/Menu/Main/bemisal.jpg";
import main3 from "../../../public/assets/images/Menu/Main/lajawab.jpg";
import rice1 from "../../../public/assets/images/Menu/Biryani/chickenbiryani.jpg";
import rice2 from "../../../public/assets/images/Menu/Biryani/chickenmandi.jpg";
import rice3 from "../../../public/assets/images/Menu/Biryani/paneerbiryani.jpg";
export default function Menu() {

    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <div>
                        <h2>Menu</h2>
                        <p>Our Trending Menu</p>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-starters">Starters</li>
                            <li data-filter=".filter-main">Main Course</li>
                            <li data-filter=".filter-rice">Rice</li>
                        </ul>
                    </div>
                </div>

                <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

                    <div className="col-lg-4 menu-item filter-starters">
                        <img src={starter1.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C6cQWVkySY5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Chicken Rozali Kebab</a><span>👌 Best Seller</span>
                        </div>
                    </div>

                    <div className="col-lg-4 menu-item filter-main">
                        <img src={main3.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C6cRSOPS02z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Murg Lajawab</a><span>😋 Tasty</span>
                        </div>
                    </div>

                    <div className="col-lg-4 menu-item filter-starters">
                        <img src={starter2.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C8s-LlcIsQx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Chicken Crispy</a><span>😘 Delicious</span>
                        </div>
                    </div>

                    <div className="col-lg-4 menu-item filter-rice">
                        <img src={rice1.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C9GwK7np2qH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Chicken Dum Biryani</a><span>👨🏼‍🍳 Chef's Special</span>
                        </div>
                    </div>

                    <div className="col-lg-4 menu-item filter-rice">
                        <img src={rice2.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C-kdxSQgFQ0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Chicken Mandi</a><span>👌 Best Seller</span>
                        </div>
                    </div>



                    <div className="col-lg-4 menu-item filter-main">
                        <img src={main1.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C-fU4aHSAgn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Veg Dilruba</a><span>🔥Trending</span>
                        </div>
                    </div>

                    <div className="col-lg-4 menu-item filter-rice">
                        <img src={rice3.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C_DaHI8SCdM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Veg Pulav</a><span>😘 Delicious</span>
                        </div>
                    </div>
                    <div className="col-lg-4 menu-item filter-starters">
                        <img src={starter3.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C681avMMbCb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Chicken Angara Kebab</a><span>🔥Trending</span>
                        </div>
                    </div>

                    <div className="col-lg-4 menu-item filter-main">
                        <img src={main2.src} className="menu-img" alt="" />
                        <div className="menu-content">
                            <a href='https://www.instagram.com/reel/C6cPXA1rZiJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' target='_blank'>Murg Bemisal</a><span>😋 Tasty</span>
                        </div>
                    </div>

                </div>
                <div className='menu-sect'>
                    <a className="download-btn" href="/assets/menu/Menu2024.pdf" download="Al-Zaaffran Menu Card">
                        Get Full Menu
                    </a>
                </div>
            </div>
        </section>
    );
}
