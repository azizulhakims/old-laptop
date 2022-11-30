import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Advertised from '../../Advertised/Advertised';
import Banner from '../Banner/Banner';
import ProductCategoris from '../Product/ProductCategories/ProductCategoris';

import WhoWeAre from '../Who/WhoWeAre';

const Home = () => {
    const [loading, setLoading] = useState(false)
    // const [products, setProducts] = useState([])

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/oldLaptopCategory')
            .then(res => res.json())
    })

    // useEffect(() => {
    //     fetch('http://localhost:5000/oldLaptopCategory')
    //         .then(res => res.json())
    //         .then(data => {
    //             setProducts(data)
    //         })
    // }, [])



    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='mt-4'>
                <div className='flex justify-between px-4'>
                    <p className='text-xl font-bold'>Advertise Items</p>
                    <Link to='/category'>
                        <p>See All</p>
                    </Link>
                </div>
                <div className='flex justify-center px-4'>
                    <div className='container pb-8 pt-2 mx-auto'>
                        <div className='flex flex-wrap'>
                            {[...Array(3)].map((pro, i) => (
                                <Advertised
                                    key={i} pro={pro}
                                ></Advertised>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-between px-4'>
                <p className='text-xl font-bold'>Products</p>
                <Link to='/category'>
                    <p>See All</p>
                </Link>
            </div>
            <div className='flex justify-center px-4'>
                <div className='container pb-8 pt-2 mx-auto'>
                    <div className='flex flex-wrap'>
                        {products.slice(0, 2).map((pro, i) => (
                            <ProductCategoris
                                key={i} pro={pro}
                            ></ProductCategoris>
                        ))}
                    </div>

                </div>
            </div>
            <WhoWeAre></WhoWeAre>
        </div>
    );
};

export default Home;