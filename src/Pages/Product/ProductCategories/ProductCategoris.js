import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCategoris = ({ pro }) => {

    return (
        <div>

            <div>
                <div></div>
                <div className=' justify-center  p-3 '>
                    <div className="card w-98 h-50 bg-base-100 shadow-xl">
                        <figure><img className='w-70 h-40 p-4' src={pro.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {pro.title}

                            </h2>
                            <p>Best Laptop Seller</p>

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