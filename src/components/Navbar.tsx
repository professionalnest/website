"use client"
import React, { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-black p-3'>
            <nav className='container mx-auto'>
                <div className='flex items-center text-lg font-semibold justify-between '>
                <img
                    className='h-14 ml-4 mt-2'
                    src="https://assets.softr-files.com/applications/e9036e53-b096-4bc0-8e6c-d598c06d24be/assets/0cd3f647-f48b-480b-9139-7e3e7bdc5184.png"
                    alt="Logo"
                    style={{ height: '50px', marginRight: '20px' }}
                    onClick={() => window.location.reload()}
                     />

                <button
                    className='md:hidden text-maincolor p-2'
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <ul className='hidden md:flex items-center justify-evenly m-3 mr-6 space-x-8'>
                    <li className='m-3 text-maincolor hover:text-white transition-colors'>
                        <a href="/">Home</a>
                    </li>
                    <li className='m-3 text-maincolor hover:text-white transition-colors'>
                        <a href="/about">About</a>
                    </li>
                    <li className='m-3 text-maincolor hover:text-white transition-colors'>
                        <a href="/contact">Contact Us</a>
                    </li>
                    <li>
                        <button className='bg-maincolor hover:bg-opacity-80 rounded-xl p-3 transition-colors' onClick={()=> window.location.href = '/getstarted'} >
                            Get Started
                        </button>
                    </li>
                </ul>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
            <ul className='flex flex-col items-center space-y-4 mt-4 justify-between'>
                    <li className='text-maincolor hover:text-white transition-colors'>
                        <a href="/">Home</a>
                    </li>
                    <li className='text-maincolor hover:text-white transition-colors'>
                        <a href="/about">About</a>
                    </li>
                    <li className='text-maincolor hover:text-white transition-colors'>
                        <a href="/contact">Contact Us</a>
                    </li>
                    
                    <button className='bg-maincolor hover:bg-opacity-80 rounded-xl p-3 transition-colors' onClick={()=> window.location.href = '/getstarted'} >
                            Get Started
                    </button>
                </ul>
                </div>
            </nav>
        </div>
    
    )
}

export default Navbar;