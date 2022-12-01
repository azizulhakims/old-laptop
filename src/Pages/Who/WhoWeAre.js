import React from 'react';

const WhoWeAre = () => {
    return (
        <div className="hero  bg-base-400">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">We are sale best Use Laptop here</h1>
                    <p className="py-6">You can purchase this product by our website </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;