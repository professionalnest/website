import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import Footer from '@/components/Footer'

interface TeamMember {
  name: string
  role: string
  quote: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Ashish Gupta",
    role: "Co-Founder & CEO",
    quote: "When you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
    image: "/ashish.jpg"
  },
  {
    name: "Akshit Singla",
    role: "Co-Founder & CTO",
    quote: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
    image: "/akshit.jpg"
  }
]

export default function About() {
    return (
        <main className="min-h-screen bg-white">
        
            <div className="relative w-full h-[320px]"> 
                <img
                    src="https://softr-assets-eu-shared.s3.eu-central-1.amazonaws.com/studio/blocks/assets/wave.png"
                    alt="Dark wave"
                    className="object-cover w-full h-full"
                />
            </div>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16"> {/* Added responsive padding */}
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-black">About us</h1>
                <p className="text-gray-700 text-base sm:text-lg">
                    Through collective purchasing power, we negotiate substantial enterprise-level discounts with premium AI solution providers. By consolidating thousands of users into a single buying group, we obtain preferential pricing typically reserved for large organizations and deliver these cost savings directly to our members.
                </p>
            </section>

            {/* Team Section */}
            <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16 bg-gray-50">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-black">The Team</h2>
                <p className="text-gray-600 text-center mb-8 sm:mb-12">
                    Meet our small team that make those great products.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="flex flex-col items-center text-center text-black">
                            <div className="w-32 h-32 sm:w-48 sm:h-48 relative mb-4 sm:mb-6"> {/* Responsive image size */}
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold mb-2">{member.name}</h3>
                            <p className="text-gray-500 mb-3 sm:mb-4">{member.role}</p>
                            <p className="text-gray-600 mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
                                {member.quote}
                            </p>
                            <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-600">
                                <Linkedin size={24} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-6xl mx-auto px-4 py-8 sm:py-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-black">Can't find what you are looking for?</h2>
                  <p className="text-gray-600 mb-6 md:mb-0 text-sm sm:text-base">
                      If you cannot find the answer to your question in our FAQ, you can always contact us.
                  </p>
              </div>
              <Link
                  href="/contact"
                  className="inline-flex px-6 py-3 bg-[#F5C06B] text-black rounded hover:bg-[#f3b44d] transition-colors"
              >
                  Contact us
              </Link>
          </div>
      </section>

      {/* Contact Section */}
      
      <Footer/>
    </main>
    
  )
}