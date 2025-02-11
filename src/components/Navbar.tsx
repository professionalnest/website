"use client"
import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='bg-black p-2 text-color-primary font-extrabold'>
            <nav className='container mx-auto'>
                <div className='flex items-center text-lg font-semibold justify-between '>
                    {/* COMPANY LOGO */}
                    <a href="/">
                        <img
                            src="/logo.png"
                            alt="ProNest Logo"
                            style={{ height: '65px', marginRight: '20px' }}
                            />
                    </a>

                    {/* MOBILE VIEW - HAMBURGER MENU BUTTON */}
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

                    {/* DESKTOP VIEW - MENU ITEMS */}
                    <ul className='hidden md:flex items-center justify-evenly m-3 mr-6 space-x-8 gap-3'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <button className='rounded-lg px-4 py-2 bg-color-primary' onClick={()=> window.location.href = '/getstarted'} >
                            Get Started
                        </button>
                    </ul>
                </div>

                {/* MOBILE VIEW - MENU ITEMS */}
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                    <ul className='flex flex-col items-center space-y-4 mt-4 justify-between'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <button className='rounded-lg p-3 bg-color-primary w-full' onClick={()=> window.location.href = '/getstarted'} >
                            Get Started
                        </button>
                    </ul>
                </div>
            </nav>
        </div>
    )
}