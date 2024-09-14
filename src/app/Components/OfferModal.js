import React, { useState, useEffect } from 'react';
import styles from './OfferModule.css';
import offer from '../../../public/assets/images/Offers/2nd Anniversary.jpg'

const OfferModal = () => {
    const [isBannerVisible, setBannerVisible] = useState(true);

    // Check if the user has closed the banner previously (from localStorage)
    useEffect(() => {
        const bannerClosed = localStorage.getItem('bannerClosed');
        if (bannerClosed) {
            setBannerVisible(true);
        }
    }, []);

    const closeBanner = () => {
        setBannerVisible(true);
        // localStorage.setItem('bannerClosed', 'true'); // Store the banner closed state
    };

    if (!isBannerVisible) return null; // If the banner is closed, don't render anything

    return (
        <div className={styles.banner}>
            <div className={styles.bannerContent}>
                <img
                    src={offer.src} // Path to your offer image
                    alt="2nd Anniversary Offer"
                    className={styles.bannerImage}
                />
                {/* <button className={styles.closeButton} onClick={closeBanner}>
                    ×
                </button> */}
            </div>
        </div>
    );
};

export default OfferModal;
