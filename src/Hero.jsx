import React from 'react'
import { asset } from './assets/asset'
import './App.css'

const Hero2 = () => {
    return (
        <section className='text-center overflow-hidden w-screen h-screen bg-black px-6 py-6 md:py-10 relative'>
            <h2 className='text-8xl sm:text-3xl md:text-6xl font-semibold leading-tight'>
                <span className='text-transparent custom-gradient bg-clip-text'>Beyond the Horizon</span>
                <br />
                <span className='text-white'>Infinite Possibilities</span>
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto mt-6 text-sm md:text-base'>
                Step into a world where creativity meets technology—fluid lines, glowing grids, and digital landscapes merge to spark new ideas and endless exploration.
            </p>

            <div className="flex justify-center gap-4 mt-8">
                <div className="flex gap-4">
                    {/*Gradient border buttons */}
                    <div className="p-[1px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                        <button className='p-[1px] bg-black cursor-pointer text-white px-8 py-3 rounded-full text-sm font-medium'>
                            Explore Now
                        </button>
                    </div>
                    <button className='p-[1px] bg-black cursor-pointer border-2 text-white px-8 py-3 rounded-full text-sm border-gray-200 font-medium'>
                        Learn More
                    </button>
                </div>
            </div>
            {/* image container */}
            <div className="relative mt-[-20px] flex items-center justify-center overflow-hidden">
                {/* Recommendation: Use an abstract cityscape or digital horizon image for asset.img3 */}
                <img className='absolute inset-0 w-screen h-full object-cover z-0' src={asset.img1} />
                <img className='relative z-10 w-[50rem] max-w-full' src={asset.img2}/>
            </div>
        </section>
    )
}

export default Hero2