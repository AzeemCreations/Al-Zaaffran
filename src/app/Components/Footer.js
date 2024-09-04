import React from 'react';

export default function Footer() {
    return (
        <div>
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="footer-info">
                                    <h3>Al Zaaffran Family Restaurant</h3>
                                    <p style={{ fontSize: "1.4vw" }}>
                                        <strong>
                                            Shiv Midtown, 100 Feet Rd,<br />
                                            Opp. Military Canteen, Sangli,
                                        </strong><br /><br />
                                        <strong>Phone: +91 93719 70303</strong><br />
                                    </p>
                                    <div className="social-links mt-3">
                                        <a href="https://www.facebook.com/AlZaaffranRestaurantSangli/" className="facebook"><i className="bx bxl-facebook"></i></a>
                                        <a href="https://www.instagram.com/alzaaffran_restaurant/" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#about">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#menu">Menu</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#events">Events</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#reviews">Reviews</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Al Zaaffran</span></strong>. All Rights Reserved
                    </div>
                    <div className="credits">
                        Designed by <a href="#">RG Software Solutions</a>
                    </div>
                </div>
            </footer>

            {/* Responsive styling */}
            <style jsx>{`
                @media (max-width: 768px) {
                    .footer-top .row > div {
                        text-align: center;
                        margin-bottom: 20px;
                    }
                    .footer-info h3 {
                        font-size: 24px;
                    }
                    .footer-info p strong {
                        font-size: 14px;
                    }
                }
                @media (max-width: 576px) {
                    .footer-info h3 {
                        font-size: 20px;
                    }
                    .footer-info p {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
}
