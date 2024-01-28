import React from 'react'
// import { Image } from './Image'
import imgg from "../images/sea.jpg"
import img2 from "../images/cloud.jpg"
export const Motive = () => {
    return (<>
        <div class='Motive flex space-x-20 mt-40' >
            <h1>Our Motive</h1>
            <p className='text-[2vw] leading-12 font-normal tracking-tight right-0 text-right w-[80%] '>At Bamanians, we are deeply committed to sustainability.  We beleive im a greener,more sustainable future, <span id='one'></span> and it's at the  core of everything we do.Our practices are desgined with enviromental <span id='two'></span>  responsibility in mind,from sourcing eco-friendly <span id='three'></span>   to reducing our carbon footprint.
            </p>
        </div>
        <div classname="" id="pictures">
            <div className="w-[17vw] " id="firstimage">
                <div className="w-[100%]  bg-red-600 h-[24vw] mb-5" id="picimg"> 
                <img className='h-[100%] w-[100%] object-cover' src={imgg} alt="" />
                 </div>
                    <h1 className='text-3xl font-semibold'>Synergy.</h1>
                    <p className=' mt-5 tracking-tight'>
                        Commited to sustainability,eco-friendly choices for a better tomorrow.
                    </p>

               
            </div>

            <div className="w-[25vw]  h-[37vw]" id="secondimage">
                <div className="w-[100%] h-[100%] mb-5" id="picimg"> 
                <img className='h-[100%] w-[100%] object-cover' src={img2} alt="" />
                 </div>
                    <h1 className='text-3xl text-right  font-semibold'>Harmony.</h1>
                    <p className='mt-5  text-right tracking-tight'>
                        Commited to sustainability,eco-friendly choices for a better tomorrow.
                    </p>

               
            </div>

        </div>
    </>
    )
}
