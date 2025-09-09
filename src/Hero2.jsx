import React from 'react'
import { asset, assets } from './assets/asset'
import './App.css'
const Hero = () => {
    return (
        <section className='text-center overflow-hidden w-screen h-screen bg-black px-6 py-6 md:py-10 relative'>
            <h2 className=' text-8xl sm:text-3xl md:text-6xl font-semibold leading-tight'>

                <span className='text-transparent custom-gradient bg-clip-text'>Chasing the Apex</span>
                <br />
                <span className='text-white'>Full Tilt</span>
            </h2>
            <p className='text-gray-300 max-w-2xl mx-auto mt-6 text-sm md:text-base'>
A dynamic fusion of rhythm and chaos — abstract waves, cosmic doodles, and vibrant bursts of neon energy come together to create a design that feels alive, like sound and light in motion.</p>

            <div className="flex justify-center gap-4 mt-8">
                <div className="flex gap-4">
                    {/*Gradient border buttons */}
                    <div className="p-[1px]  rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 ">
                        <button className='p-[1px] bg-black cursor-pointer  text-white px-8 py-3 rounded-full text-sm font-medium'>
                            Get Started
                        </button>
                    </div>
                    <button className='p-[1px] bg-black cursor-pointer  border-2 text-white px-8 py-3 rounded-full text-sm  border-gray-200 font-medium'>
                        Ecosystems
                    </button>
                </div>
                {/*image container */}
            </div>
                <div className="relative  mt-[-20px] flex items-center justify-center overflow-hidden">
                    <img className='absolute inset-0 w-screen h-full  z-0' src={asset.img1} alt="" />
                    <img className='relative z-10 w-[50rem] max-w-full mix-blend-color-dodge' src={assets.img3} alt="" />
                </div>
        </section>
    )
}

export default Hero