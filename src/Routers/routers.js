import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import Registration from '../Pages/Login/Registration'
import ErrorPage from '../Share/ErrorPage'


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
])

export default router