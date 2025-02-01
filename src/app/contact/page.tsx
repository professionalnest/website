"use client"

import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Footer from '@/components/Footer'
import { contactUsSubmissionAction } from '@/actions/sendEmailAction'

export default function Contact() {

    return (
        <main className="min-h-screen bg-white">
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[320px]"> 
                <img
                        src="https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/wave.png"
                        alt="Dark wave"
                        className="object-cover w-full h-full"
                />
            </div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-black">
                    
                    <div className="w-full">
                        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Send us a message</h1>
                        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                            Have questions about pricing, plans, or our Awesome Product? Fill out the form and we will be in touch shortly
                        </p>

                        {/* <form action={sendEmailAction} className="gap-2 p-8 flex justify-center">
                            <input type="text" name="toAddress" placeholder="To Adrress" className="p-2 border-2 rounded-md flex-grow"/>
                            <button type="submit" className="bg-blue-700 text-white p-2 rounded-md">Send Test Email</button>
                        </form> */}

                        <form  action={contactUsSubmissionAction}className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your email"
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Your message for us"
                                    rows={6}
                                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2 sm:py-3 px-4 sm:px-6 bg-[#F5C06B] text-black rounded hover:bg-[#f3b44d] transition-colors font-medium text-sm sm:text-base"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="md:pl-8 lg:pl-12 mt-8 md:mt-0">
                        <div className="mb-8 sm:mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Email Us</h2>
                            <a href="mailto:info@pronest.co.in" className="text-gray-600 hover:text-gray-900 text-sm sm:text-base">
                                info@pronest.co.in
                            </a>
                        </div>

                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Follow Us</h2>
                            <Link 
                                href="https://linkedin.com/company/professionalnest" 
                                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 text-sm sm:text-base"
                            >
                                <Linkedin size={20} className="sm:w-6 sm:h-6" />
                                <span className="break-all">linkedin.com/company/professionalnest</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    )
}
