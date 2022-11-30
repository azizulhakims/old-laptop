import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
    return (
        <>
            <NavLink
                to='all-booking'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 transition-color duration-300 transform hover:bg-green{isActive ? 'bg-gray-300 text-gray-700' : text-gray-600}`
                }
            >
                <FingerPrintIcon className='w-5 h-5' />


                <span className='mx-4 font-medium'>All Bookings</span>
            </NavLink>

            <NavLink
                to='all-buyer'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 transition-color duration-300 transform hover:bg-green{isActive ? 'bg-gray-300 text-gray-700' : text-gray-600}`
                }
            >
                <UserPlusIcon className='w-5 h-5' />


                <span className='mx-4 font-medium'>All Buyer</span>
            </NavLink>
            <NavLink
                to='all-seller'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 transition-color duration-300 transform hover:bg-green{isActive ? 'bg-gray-300 text-gray-700' : text-gray-600}`
                }
            >
                <UserPlusIcon className='w-5 h-5' />


                <span className='mx-4 font-medium'>All Seller</span>
            </NavLink>

        </>
    );
};

export default AdminMenu;