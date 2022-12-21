import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/HCYHGLd/60337b5cd53e35001ce48741.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">We are Provide Best second hand Laptop! </h1>
                    <p className="py-6">Here you can choose Brand wise, process wise also lots of configuration laptop available here.. </p>
                    <button className="btn btn-primary"> <Link to='login'>Get Started</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;