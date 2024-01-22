import React from 'react';

export const Header = () => {
    return (
        <div className='relative flex justify-between pl-32 pr-32 bg-red-500 text-white pt-10 pb-10'>

            <div className='flex gap-10 text-l'>
                <a href="/">Home</a>
                <a href="/">Pricing</a>
                <a href="/">Products</a>
            </div>
            <a className='text-xl left-1/2 absolute top-1/2 transform -translate-y-1/2  ' href="/"> Bamanian </a>
            <div className='text-l'>
                <a href="/">Our Journey</a>
            </div>

        </div>
    );
};
