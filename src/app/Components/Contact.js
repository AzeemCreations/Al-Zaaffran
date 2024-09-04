import React from 'react'

export default function Contact() {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Contact Us</p>
                    </div>
                </div>

                <div className='' data-aos="fade-up">
                    <div className="container">
                        <div className="row mt-5">

                            {/* Contact Information Section */}
                            <div className="col-lg-6 col-md-12 mb-4" data-aos="fade-up">
                                <div className="info">

                                    <div className="address mb-4">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p className='dets'>Shiv Midtown, 100 Feet Rd, Opp. Military Canteen, Sangli, Maharashtra 416416</p>
                                    </div>

                                    <div className="open-hours mb-4">
                                        <i className="bi bi-clock"></i>
                                        <h4>Open Hours:</h4>
                                        <p className='dets'>
                                            Everyday: 11:00 AM - 11:00 PM
                                        </p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p className='dets'><a href="tel:+919371970303">+91 93719 70303</a></p>
                                    </div>

                                </div>
                            </div>

                            {/* Map Section */}
                            <div className="col-lg-6 col-md-12" data-aos="fade-up">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401.3816648717594!2d74.58796720214067!3d16.845819104427573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11907cbd9ecf1%3A0x266eef404e63df4e!2sAL%20ZAAFFRAN%20RESTAURANT!5e0!3m2!1sen!2sin!4v1725352917661!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
