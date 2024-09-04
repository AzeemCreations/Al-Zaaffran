"use client"
import React, { useEffect, useState } from 'react'
import slider1 from "../../../public/assets/images/Sliders/slider-01.jpg"
import slider2 from "../../../public/assets/images/Sliders/slider-02.jpg"
import slider3 from "../../../public/assets/images/Sliders/slider-03.jpg"
import slider4 from "../../../public/assets/images/Sliders/slider-04.jpg"
import slider5 from "../../../public/assets/images/Sliders/slider-05.jpg"
import slider6 from "../../../public/assets/images/Sliders/slider-06.jpg"
import "./Banner.css"

export default function Banner() {
    const images = [
        slider1, slider2, slider3, slider4, slider5, slider6
    ];
    const [bgImage, setBgImage] = useState(images[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBgImage((prevImage) => {
                // Get the current index
                const currentIndex = images.indexOf(prevImage);
                // Calculate the next index (wrap around if necessary)
                const nextIndex = (currentIndex + 1) % images.length;
                // Return the next image URL
                return images[nextIndex];
            });
        }, 10000); // Change image every 10 seconds

        // Clear the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);
    return (
        <section id="hero" style={{
            backgroundImage: `url("${bgImage.src}")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            transition: "0.5s"
        }} className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-out" data-aos-delay="10">
                <div className="row">
                    <div className="col-lg-8">
                        <h1><span>Al Zaaffran Family Restaurant</span></h1>
                        <h2>The Essence of Luxury</h2>

                        <div className="btns">
                            <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                            <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Chef's Special</a>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative" data-aos="zoom-in" data-aos-delay="200">
                        <a href="/assets/videos/AlZaaffran_Video.mp4" className="glightbox play-btn"></a>
                    </div>

                </div>
            </div>
        </section>
    )
}
