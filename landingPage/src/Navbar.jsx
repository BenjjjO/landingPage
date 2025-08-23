
import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { CiMenuBurger } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <nav className='text-gray-300 px-6 py-4 relative bg-black'>
            <div className="flex items-center justify-between">
                {/*logo */}
                <h1 className='text-white font-semibold text-xl'>FastLane</h1>
                {/*Desktop Menu */}
                <ul className='hidden md:flex gap-8 text-sm'>
                    <li className='hover:text-white cursor-pointer'>Smart Contracts</li>
                    <li className='hover:text-white cursor-pointer'>Services</li>
                    <li className='hover:text-white cursor-pointer'>Solutions</li>
                    <li className='hover:text-white cursor-pointer'>Roadmap</li>
                    <li className='hover:text-white cursor-pointer'>White Papers</li>
                </ul>
                {/*Social Icons */}
                <div className="hidden md:flex gap-5">
                    <FaGithub className='cursor-pointer' size={'30px'} />
                    <FaTwitter className='cursor-pointer' size={'30px'} />
                    <FaLinkedin className='cursor-pointer' size={'30px'} />
                </div>
                {/* hamburgur menu*/}
                <div onClick={toggleMenu} className="md:hidden  text-white">
                    {isOpen ? <MdCancel size={28} /> : <CiMenuBurger size={28} />}
                </div>
            </div>
            {/*Mobile dropdown */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-4">
                    <ul className='flex flex-col gap-4 text-sm'>
                        <li className='hover:text-white cursor-pointer'>Smart Contracts</li>
                        <li className='hover:text-white cursor-pointer'>Services</li>
                        <li className='hover:text-white cursor-pointer'>Solutions</li>
                        <li className='hover:text-white cursor-pointer'>Roadmap</li>
                        <li className='hover:text-white cursor-pointer'>White Papers</li>

                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar