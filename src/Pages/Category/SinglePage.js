import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const SinglePage = () => {
    const { id } = useParams();
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://nodejs-express-lemon.vercel.app/addproduct')
            .then(res => res.json())
    })

    console.log(products)


    const filterData = products?.filter(item => item.category === id);



    return (
        <div>
             <h2 className='font-bold m-4 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>Products</h2>
        <div className=''>
           

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 p-4 m-4'>{filterData.map(item => <ProductCard
                key={item._id}
                data={item}
            ></ProductCard>)}</div>
        </div>
        </div>
    );
};

export default SinglePage;