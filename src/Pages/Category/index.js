import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ProductCategoris from '../Product/ProductCategories/ProductCategoris';

const Category = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/oldLaptopCategory')
            .then(res => res.json())
    })


    return (
        <div>
            <h1 className='text-center mb-5 text-bold text-2xl'>Laptop Category</h1>
            <div className=''>
                <div className='container pb-8 pt-2 mx-auto'>
                    <div className='grid grid-cols-3'>
                        {products.map((pro, i) => (
                            <ProductCategoris
                                key={i} pro={pro}
                            ></ProductCategoris>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;