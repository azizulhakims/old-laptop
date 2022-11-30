import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const SinglePage = () => {
    const { id } = useParams();
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/addproduct')
            .then(res => res.json())
    })

    console.log(products)


    const filterData = products?.filter(item => item.category === id);



    return (
        <div className='container pb-8 pt-2 mx-auto mt-6 mb-12'>
            <h2 className='font-bold'>Products</h2>

            <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>{filterData.map(item => <ProductCard
                key={item._id}
                data={item}
            ></ProductCard>)}</div>
        </div>
    );
};

export default SinglePage;