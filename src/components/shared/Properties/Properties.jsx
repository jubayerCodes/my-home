


import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';

const Properties = async () => {

    // const [page, setPage] = useState(1)

    // const { properties, isLoading } = useProperties(page)

    const res = await fetch('http://localhost:3000/api/properties', {
        next: {
            revalidate: 5
        }
    })

    const properties = await res.json()

    console.log(properties);

    return (
        <section className='section'>
            <div className="my-container">

                <>
                    <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-20'>
                        {
                            properties?.map(property => <PropertyCard key={property._id} property={property} />)
                        }
                    </div>

                    {/* <div className='mt-10 flex justify-center'>
                                <button onClick={() => setPage(page + 1)} className="primary-btn">
                                    Load More
                                </button>
                            </div> */}
                </>

            </div>
        </section>
    );
};

export default Properties;