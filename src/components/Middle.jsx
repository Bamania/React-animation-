import React from 'react'
import img from "../images/pinkgreenplant.jpg"
import imgMiddle from "../images/pinkplant.jpg"

export const Middle = () => {
    return (
        <div class='hero'  >

            <div className='w-[10vw]'>    {/* < //div for the left part sustainbility */}
                <h5 className='text-l'>01.</h5>
                <h1 className='text-xl font-semibold'>Sustainability</h1>
                <p className='text-xs mt-2 mb-2 opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit.\</p>

                <div className='bg-red-500  w-[100%] h-[15vw]'>
                    <img className=" " src={img} alt="img leaf" />

                </div>
            </div>


            <div  className=' w-[30vw] min-h-[42vw] relative '>  {/* < //div for the middle part  */}
                <div class='ephemeral absolute top-[-22%] left-[-20%]'>
                    <h1 className=''>Ephemeral</h1>
                    <h1 className=''>Equilibrium.</h1>
                </div>
                <div>
                 <img className='w-[100%] h-[100%] object-cover' src={imgMiddle} alt="middle pink plant img" />
                 <p className=' text-3xl w-[60%]  .leading-3 tracking-[-.1vw] mt-[30px] font-thin '>Commited to Sustainbility and Eco-friendly choices for a better tomorrow. </p>
                 </div>
            </div>

            <div className='flex justify-center h-[3vw] items-center  '> {/* < //div for the right end part  */}
                <div className=' w-[3vw] h-[3vw]  flex justify-center rounded-full border border-[#5e5e5e] items-center'>
                    <i class="ri-arrow-down-line"></i>
                </div>
                <h3 className='font-light p-2'>visit our galllery</h3>
            </div>

        </div>
    ) 
}
