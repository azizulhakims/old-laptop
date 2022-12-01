import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SellerMenu = () => {
    return (
        <>


            <NavLink
                to='add-product'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 transition-color duration-300 transform hover:bg-green{isActive ? 'bg-gray-300 text-gray-700' : text-gray-600}`
                }
            >
                <UserPlusIcon className='w-5 h-5' />


                <span className='mx-4 font-medium'>Add Product</span>
            </NavLink>

            <NavLink
                to='my-products'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 transition-color duration-300 transform hover:bg-green{isActive ? 'bg-gray-300 text-gray-700' : text-gray-600}`
                }
            >
                <UserPlusIcon className='w-5 h-5' />


                <span className='mx-4 font-medium'>My Products</span>
            </NavLink>

        </>
    );
};

export default SellerMenu;