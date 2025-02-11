import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-black'>
      <div className='container m-auto flex flex-col justify-center gap-8'>

        {/* COMPANY LOGO */}
        <div className='text-white p-4'>
            <div className='flex justify-center mb-4'>
                <img 
                        src='/logo.png' 
                        alt="logo" 
                        className='h-12 w-12 md:h-16 md:w-16 rounded-xl hover:opacity-90 transition-opacity'
                />
            </div>
            <p className='flex items-center justify-center text-xs md:text-sm'>
              Made with <Heart className='h-3 w-3 md:h-4 md:w-4 mx-1 text-red-500' /> in India
            </p>
          </div>

        {/* LINKS */}
        <div className='mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-16'>

          {/* QUICK LINKS  */}
          <div className='text-white text-center mb-6 sm:mb-0'>
            <h1 className='font-bold mb-4 text-base md:text-lg'>Company</h1>
            <ul className='space-y-2'>
              <li className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>About Us</li>
              <li className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>Products</li>
              <li className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>Blogs</li>
            </ul>
          </div>

          {/* CONTACT LINKS */}
          <div className='text-white text-center mb-6 sm:mb-0'>
            <h1 className='font-bold mb-4 text-base md:text-lg'>Connect</h1>
            <ul className='space-y-2'>
                    <li><a href='' className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>FAQS</a></li>
                    <li><a href='' className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>Contact Us</a></li>
                    <li><a href='' className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>info@pronest.co.in</a></li>
            </ul>
          </div>

          {/* LEGAL LINKS */}
          <div className='text-white text-center'>
            <h1 className='font-bold mb-4 text-base md:text-lg'>Legal</h1>
            <ul className='space-y-2'>
              <li><a href='' className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>Terms of Service</a></li>
              <li><a href='' className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>Privacy Policy</a></li>
              <li><a href='' className='text-blue-600 hover:text-blue-400 transition-colors text-sm md:text-base'>Affiliate Disclosures</a></li>
            </ul>
          </div>
        </div>

        {/* AFFILIATES DISCLAIMER */}
        <div className='mt-6 md:mt-8 text-gray-400 max-w-4xl mx-auto space-y-4'>
            <p className='text-center text-xs md:text-sm leading-relaxed px-4'>
              Some of the links on this page may be affiliate links, and we may earn a commission if you purchase through those links.
              We use Cookies to improve your experience on our site. By using our site you consent cookies.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;