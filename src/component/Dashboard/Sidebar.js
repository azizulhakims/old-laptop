import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOnRectangleIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../contexts/AuthProvider';
import UserMenu from './UserMenu';
import AdminMenu from './AdminMenu';
import SellerMenu from './SellerMenu';

const Sidebar = ({ role, loading }) => {

    const { user, mongoUser, logout } = useContext(AuthContext)
    const [isActive, setActive] = useState('false')

    //sidebar 
    const handleToggle = () => {
        setActive(!isActive)
    }




    return (

        <>
            {/*mobile Screen */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>UseLaptop</Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
                >
                    {/* < className='h-5 w-5'></Bars3Icon> */}
                    <Bars3Icon className='h-5 w-5' />
                </button>
            </div>
            {/* sidebar*/}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}
    md:translate-x-0 transition duration-200 ease-in-out`}
            >
                <div>
                    {/*Branding & profile info*/}
                    <div>
                        <h2 className='text-3xl cursor-pinter font-semibold text-center text-gray-800'>
                            <Link to='/'>UseLaptop</Link>
                        </h2>
                        <div className='flex flex-col items-center mt-6 -mx-2' >
                            <Link>
                                <img
                                    className='object-cover w-24 h-24 mx-2 rounded-full'
                                    src={user?.photoURL}
                                    alt='avatar'
                                    referrerPolicy='no-referrer'
                                />
                            </Link>
                            <Link to='/dashboard'>
                                <h4 className='mx-2 mt-2 font medium text-gray-800 hover:underline'>
                                    {user?.displayName}
                                </h4>
                            </Link>

                            <Link to='/dashboard'>
                                <p className='mx-2 mt-2 font medium text-gray-800 hover:underline'>
                                    {user?.email}
                                </p>
                            </Link>

                        </div>
                    </div>
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {
                                mongoUser?.admin ? <AdminMenu /> : (mongoUser?.seller ? <SellerMenu /> : <UserMenu />)
                            }

                        </nav>
                    </div>
                </div>
                <div>
                    <hr />
                    <button
                        onClick={logout}
                        className=' flex block w-full rounded-full items-center px-4 py-2 mt-5 text-red-600 translate-x-0 btn'
                    >
                        <ArrowRightOnRectangleIcon className='w-5 h-5' />
                        <span className='mx-4 font-medium text-red-400'>Logout</span>
                    </button>
                </div>
            </div>

        </>
    );
};

export default Sidebar;