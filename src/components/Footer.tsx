import React from 'react'
import Link from 'next/link'
import { Mail, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-12 py-8 bg-white">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">© 2025 ASSL. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/email" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </Link>
          <Link href="/linkedin" className="text-gray-600 hover:text-gray-900">
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </Link>
        </div>
        <p className="text-gray-600">(C) ASSL 2025</p>
      </div>
    </footer>
  )
}
export default Footer;