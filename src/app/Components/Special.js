import React from 'react'
import special1 from "../../../public/assets/images/Special/DumBiryani.webp"
import special2 from "../../../public/assets/images/Special/MuttonMandi.webp"
import special3 from "../../../public/assets/images/Special/ShahiTukda.webp"
import special4 from "../../../public/assets/images/Special/Mojito.webp"
import special5 from "../../../public/assets/images/Special/Tandoori.jpeg"

export default function Special() {
    return (
        <div>
            <section id="specials" class="specials">
                <div class="container" data-aos="fade-up">

                    <div class="section-title">
                        <h2>Specials</h2>
                        <p>Check Our Restaurant's Specials</p>
                    </div>

                    <div class="row" data-aos="fade-up" data-aos-delay="100">
                        <div class="col-lg-3">
                            <ul class="nav nav-tabs flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">Chicken Dum Biryani</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Mutton Mandi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Shahi Tukda</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Mojito</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Tandoori Grill and Kebabs</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-9 mt-4 mt-lg-0">
                            <div class="tab-content">
                                <div class="tab-pane active show" id="tab-1">
                                    <div class="row">
                                        <div class="col-lg-8 details order-2 order-lg-1">
                                            <h3>Chicken Dum Biryani</h3>
                                            <p class="fst-italic">Savor the rich and aromatic Chef's Special Chicken Dum Biryani at Al Zaaffran Family Restaurant. Prepared with tender, marinated chicken and fragrant basmati rice, slow-cooked to perfection with a blend of traditional spices for an unforgettable dining experience.</p>
                                        </div>
                                        <div class="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={special1.src} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-2">
                                    <div class="row">
                                        <div class="col-lg-8 details order-2 order-lg-1">
                                            <h3>Mutton Mandi</h3>
                                            <p class="fst-italic">Indulge in the Chef's Special Mutton Mandi at Al Zaaffran Family Restaurant, where succulent, slow-cooked mutton is served over fragrant spiced rice. This traditional Middle Eastern dish is a perfect blend of rich flavors and aromatic spices for a satisfying meal.</p>
                                        </div>
                                        <div class="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={special2.src} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-3">
                                    <div class="row">
                                        <div class="col-lg-8 details order-2 order-lg-1">
                                            <h3>Shahi Tukda</h3>
                                            <p class="fst-italic">Al Zaaffran's Special Shahi Tukda is a soft, fluffy bread piece covered in a rich saffron and almond milksauce. The bread is garnished with slivers of almonds and a few raisins. The sauce is teeming with golden saffron threads. The dessert is served on a white plate.</p>
                                        </div>
                                        <div class="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={special3.src} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-4">
                                    <div class="row">
                                        <div class="col-lg-8 details order-2 order-lg-1">
                                            <h3>Mojito</h3>
                                            <p class="fst-italic">Refresh yourself with the zesty Mojito at Al Zaaffran Family Restaurant. This classic drink blends fresh mint, tangy lime, and a splash of soda, creating a perfect balance of sweet and citrusy flavors. Ideal for a cool, rejuvenating sip!</p>

                                        </div>
                                        <div class="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={special4.src} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="tab-5">
                                    <div class="row">
                                        <div class="col-lg-8 details order-2 order-lg-1">
                                            <h3>Tandoori Grills and Kebabs</h3>
                                            <p class="fst-italic">Al Zaaffran Family Restaurant offers an inviting dining experience with a focus on rich, aromatic tandoori grills and succulent kebabs. Enjoy a delectable array of traditional Indian flavors in a warm, family-friendly atmosphere.</p>
                                        </div>
                                        <div class="col-lg-4 text-center order-1 order-lg-2">
                                            <img src={special5.src} alt="" class="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
