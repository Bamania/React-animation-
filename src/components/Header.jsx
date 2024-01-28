import React from 'react';

export const Header = () => {
    return (
        <div className='relative flex justify-between pl-32 pr-32  text-white pt-10 pb-10'>

            <div className='flex gap-10  text-black text-l'>
                <a href="/">Home</a>
                <a href="/">Pricing</a>
                <a href="/">Products</a>
            </div>
            <a className='text-xl left-1/2 absolute top-1/2 transform -translate-y-1/2  text-black ' href="/"> Bamanian </a>
            <div className='text-l text-black'>
                <a href="/">Our Journey</a>
            </div>
            
        </div>
    );
};
