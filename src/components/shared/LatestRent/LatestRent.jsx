

import React from 'react';
import LatestRentSwiper from './LatestRentSwiper/LatestRentSwiper';
import './LatestRent.css'
import SectionTitle from '../SectionTitle/SectionTitle';

const LatestRent = async () => {


    const res = await fetch("https://my-home-khaki-two.vercel.app/api/latestRents", {
        next: {
            revalidate: 5
        }
    })

    const rents = await res.json()

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties for Rent'} />

                <LatestRentSwiper rents={rents} />
            </div>
        </section>
    )
};

export default LatestRent;