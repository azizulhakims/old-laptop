import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div>
            <InfinitySpin
                width='100'
                color="#FFFFFFFF"
            />
        </div>
    );
};

export default Spinner;