import React from 'react';
import Advertised from '../../Advertised/Advertised';
import Banner from '../Banner/Banner';
import ProductCategoris from '../Product/ProductCategories/ProductCategoris';
import WhoWeAre from '../Who/WhoWeAre';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Advertised></Advertised>
            <ProductCategoris></ProductCategoris>
            <WhoWeAre></WhoWeAre>
        </div>
    );
};

export default Home;