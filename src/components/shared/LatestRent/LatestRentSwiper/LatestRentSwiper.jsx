'use client'

import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PropertyCard from '../../PropertyCard/PropertyCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const LatestRentSwiper = ({ rents }) => {
    return (
        <div className='my-container mt-8'>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    rents?.map(rent => <SwiperSlide key={rent._id}>
                        <div className='py-10 px-5'>
                            <PropertyCard property={rent} />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default LatestRentSwiper;