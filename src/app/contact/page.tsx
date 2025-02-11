"use client"

import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Banner from '@/components/Banner'
import ContactUsForm from '@/components/ContactUsForm'
import ContactUsInfo from '@/components/ContactUsInfo'

export default function Contact() {

    return (
        <main className="min-h-screen bg-white">
            <Banner />

            <div className="w-screen py-20 px-8">
                <div className="container mx-auto flex flex-col md:flex-row gap-8">
                    <div className="md:w-2/3"><ContactUsForm /></div>
                    <div className="md:w-1/3"><ContactUsInfo /></div>
                </div>
            </div>
        </main>
    )
}
