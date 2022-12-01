import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../Layout/DashboardLayout'

import Main from '../Layout/Main'
import Blog from '../Pages/Blog/Blog'
import Category from '../Pages/Category'
import SinglePage from '../Pages/Category/SinglePage'
import AddProduct from '../Pages/Dashboard/AddProduct'
import AllBooking from '../Pages/Dashboard/AllBooking'
import AllBuyer from '../Pages/Dashboard/AllBuyer'
import AllSeller from '../Pages/Dashboard/AllSeller'
import BecomeASeller from '../Pages/Dashboard/BecomeASeller'
import MyBooking from '../Pages/Dashboard/MyBooking'
// import MyBookedItem from '../Pages/Dashboard/MyBookedItem'

import MyProducts from '../Pages/Dashboard/MyProducts'

import Welcome from '../Pages/Dashboard/Welcome'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Registration from '../Pages/Login/Registration'

import ErrorPage from '../Share/ErrorPage'
import PrivateRoute from './PrivateRoute'



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/registration',
                element: <Registration />,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },

            {
                path: 'category',
                children: [
                    {
                        path: '',
                        element: <PrivateRoute>
                            <Category />
                        </PrivateRoute>
                    },
                    {
                        path: ':id',
                        element: <PrivateRoute>
                            <SinglePage />
                        </PrivateRoute>
                    }
                ]
            },
            // {
            //     path: '/coming-soon',
            //     element: <ComingSoon />,
            // },
            // {
            //     path: '/service-details',
            //     element: <Details />,
            // },
            // {
            //     path: '/search-result',
            //     element: <SearchResult />,
            // },

            // {
            //     path: '/checkout',
            //     element: <PrivateRoute><Checkout /></PrivateRoute>,
            // },

        ],
    },

    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashboardLayout></DashboardLayout>
        </PrivateRoute>,
        children: [
            {
                path: '',
                element: <Welcome></Welcome>
            },
            {
                path: 'my-booking',
                element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            },

            {
                path: 'become-seller',
                element: <PrivateRoute><BecomeASeller></BecomeASeller></PrivateRoute>
            },

            {
                path: 'add-product',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },

            {
                path: 'my-products',
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },

            {
                path: 'all-booking',
                element: <PrivateRoute><AllBooking></AllBooking></PrivateRoute>
            },
            {
                path: 'all-buyer',
                element: <PrivateRoute><AllBuyer></AllBuyer></PrivateRoute>
            },

            {
                path: 'all-seller',
                element: <PrivateRoute><AllSeller></AllSeller></PrivateRoute>
            }


        ]
    },

])

export default router