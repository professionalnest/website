"use client"
import { Mail } from 'lucide-react'
import Footer from '@/components/Footer'
import { getStartedSubmissionAction } from '@/actions/sendEmailAction'

export default function SignUpForm() {
  return (
    <div>
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-xl md:text-2xl font-bold text-center mb-12 text-black">
        Sign up to get discounts!
      </h1>

      <form action={getStartedSubmissionAction} className="space-y-6">
     
        <div>
          <label htmlFor="fullName" className="block text-gray-600 mb-2">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
        </div>

      
        <div>
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-gray-600 mb-2">
            Phone
          </label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1920px-Flag_of_India.svg.png"
                alt="India flag"
                className="w-6 h-4 object-cover"
              />
              <span className="text-gray-400 ml-2">+91</span>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Your phone number (Optional)"
              className="w-full pl-24 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        
        <button
          type="submit"
          className="w-full py-3 px-6 bg-maincolor text-black font-semibold rounded-lg hover:bg-[#f3b44d] transition-colors"
        >
          Sign Up
        </button>
      </form>
      
    </div>
    </div>
  )
}

