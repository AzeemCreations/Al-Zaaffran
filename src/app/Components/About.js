"use client"
import React, { useState } from 'react'
import "./About.css"
import outside from "../../../public/assets/images/outside1.png"
import aboutbg from "../../../public/assets/images/Sliders/slider-01.jpg"

export default function About() {
    return (
        <section id="about" className="about" style={{ backgroundImage: `url("${aboutbg.src}")` }}>
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                        <div className="about-img">
                            <img src={outside.src} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Al Zaaffran Family Restaurant</h3>
                        <p className="fst-italic">
                            At Al Zaaffran, we believe that dining is more than just a meal—it's an experience. Our chefs use only the finest ingredients, carefully sourced and meticulously prepared, to create dishes that are both flavorful and nutritious. Whether you're here for a casual meal with family or a special celebration, we strive to make every visit memorable.
                        </p>
                        <p>
                            Our warm and inviting atmosphere, combined with exceptional service, ensures that you feel at home from the moment you walk through our doors. We are proud to be a family-friendly establishment, where everyone, from the youngest to the oldest, can enjoy a delicious meal together.
                        </p>
                        <ul>
                            <li><i className="bi bi-check-circle"></i> Fresh Ingredients</li>
                            <li><i className="bi bi-check-circle"></i> Family-Friendly Environment</li>
                            <li><i className="bi bi-check-circle"></i> Authentic Recipes</li>
                            <li><i className="bi bi-check-circle"></i> Hygiene Standards</li>
                            <li><i className="bi bi-check-circle"></i> Halal Certified</li>
                        </ul>
                        <p>
                            Al Zaaffran Family Restaurant is a cornerstone in the community, offering a unique blend of traditional and modern Middle Eastern cuisine. Established with a passion for authentic flavors and a commitment to quality, we bring the rich heritage of Middle Eastern culinary traditions to your table.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}
