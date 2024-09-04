import React from 'react'
import alzaafran from "../../../public/assets/images/alzaaffran-logo.png"
import zomato from "../../../public/assets/images/Zomato.png"
import swiggy from "../../../public/assets/images/Swiggy.jpg"

export default function BookTable() {
    return (
        <div>
            <section id="book-a-table" className="book-a-table">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Order Now</h2>
                        <p>Free Home Delivery</p>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <a className='order' href='https://www.zomato.com/sangli/al-zaaffran-family-restaurant-sangli-locality/order' target='_blank' style={{ fontSize: "20px" }}>
                                <img src={zomato.src} alt='' />
                                Order From Zomato</a>
                        </div>
                        <div className='col-md-4'>
                            <a className='order' href='https://www.swiggy.com/city/sangli/al-zaaffran-restaurant-shiv-midtown-vishrambag-rest618201' target='_blank' style={{ fontSize: "20px" }}>
                                <img src={swiggy.src} alt='' />
                                Order From Swiggy</a>
                        </div>
                        <div className='col-md-4'>
                            <a className='order' href='tel:+919371970303' style={{ fontSize: "20px" }}>
                                <img src={alzaafran.src} alt='' />
                                Call Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
