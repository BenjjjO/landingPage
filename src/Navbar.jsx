import React, { useState } from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { CiMenuBurger } from "react-icons/ci"
import { MdCancel } from "react-icons/md"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    "Smart Contracts",
    "Services",
    "Solutions",
    "Roadmap",
    "White Papers"
  ]

  return (
    <nav className="text-gray-300 px-6 py-4 relative bg-black shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-white font-bold text-xl tracking-wide">FastLane</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-white cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex gap-5">
          <FaGithub className="cursor-pointer hover:text-white transition-colors" size={26} />
          <FaTwitter className="cursor-pointer hover:text-white transition-colors" size={26} />
          <FaLinkedin className="cursor-pointer hover:text-white transition-colors" size={26} />
        </div>

        {/* Hamburger Menu */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <MdCancel size={28} /> : <CiMenuBurger size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden mt-4 flex flex-col gap-4 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-white cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>

        {/* Social Icons (Mobile) */}
        <div className="flex gap-5 pt-4">
          <FaGithub className="cursor-pointer hover:text-white transition-colors" size={24} />
          <FaTwitter className="cursor-pointer hover:text-white transition-colors" size={24} />
          <FaLinkedin className="cursor-pointer hover:text-white transition-colors" size={24} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
