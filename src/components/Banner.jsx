import React from 'react'
import bottleimg from "../images/bottle.jpg"

export const Banner = () => {
    return (
        <div className='mt-[10vw] flex items-center'>
            <div  className="w-[65%] h-[70vh] bg-red-500" id="bimg">
                <img  class="bottleimg" src={bottleimg} alt="" />
            </div>

            <div id="btext">
            <h1 className='text-2xl font-semibold '>Biodegradable</h1>
            <h1 className='text-2xl font-semibold'>Packaging</h1>
            <p className='mt-3' >Commited to sustainability,eco-friendly choices for a better tomorrow.</p>
            </div>
           
        </div>
    )
}
