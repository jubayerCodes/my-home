import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropertyCard from '../PropertyCard/PropertyCard';

const LatestProperties = async () => {

    // TODO: Make url dynamic

    const res = await fetch('https://my-home-khaki-two.vercel.app/api/latestProperties', {
        next: {
            revalidate: 5
        }
    })

    const latestProperties = await res.json()

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties'} />


                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                    {
                        latestProperties?.map(property => <PropertyCard key={property._id} property={property} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestProperties;