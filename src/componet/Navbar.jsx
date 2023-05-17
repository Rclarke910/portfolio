import React from 'react'
import Logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-[#0a192f] text-gray-300' >
        <div>
            <img src={Logo} alt='logo' style={{width: '170px'}}/>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar