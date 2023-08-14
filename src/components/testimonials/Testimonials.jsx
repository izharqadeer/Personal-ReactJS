import React from 'react';
import { testimonials } from '../../Data';
import shapeTwo from '../../assets/shape-2.png';
// Import Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './testimonials.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title text-cs">What I Do</h2>
            <p className="section__subtitle">
                My <span>Services</span>
            </p>

            <Swiper
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                modules={[Pagination]} className="services__container container mySwiper">
                {services.map(({ img, name, author, description }, index) => {
                    return (
                        <SwiperSlide className="services__item card card_one" key={index}>
                            
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials
