import React from 'react';

const Advertised = () => {
    return (
        <div>

            <div>
                <div></div>
                <div className='lg:w-1/3 md:w-1/2 p-4 w-full'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Hello
                                <div className="badge badge-secondary">$ </div>
                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p className='font-bold'>Years of use- </p>
                            <p className='font-bold'>Post Time- </p>
                            <p className='font-bold'>Seller Name- </p>
                            <button className='btn'>Book Now</button>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">Locations: </div>
                                <div className="badge badge-outline">Original Prices-$ </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertised;