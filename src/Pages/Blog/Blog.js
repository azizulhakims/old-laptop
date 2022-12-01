import React from 'react';

const Blog = () => {
    return (
        <div className='text-center'>
            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;