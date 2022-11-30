import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategoris = ({ pro }) => {

    return (
        <div>

            <div>
                <div></div>
                <div className='md:flex justify-center gap-10 px-6 md:px-10 lg:px-20'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={pro.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {pro.title}

                            </h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>

                            <Link to={`/category/${pro._id}`}><button className='btn'>See Product</button></Link>
                            <div className="card-actions justify-end">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoris;