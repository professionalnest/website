import { Linkedin } from 'lucide-react'
import Link from 'next/link'

interface TeamMember {
    name: string
    role: string
    quote: string
    image: string,
    linkedin: string
}
  
const teamMembers: TeamMember[] = [{
    name: "Ashish Gupta",
    role: "Co-Founder & CEO",
    quote: "When you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
    image: "/ashish.jpeg",
    linkedin: "https://www.linkedin.com/in/ashishgupta23"
}, {
    name: "Akshit Singla",
    role: "Co-Founder & CTO",
    quote: "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.",
    image: "/akshit.jpeg",
    linkedin: "https://www.linkedin.com/in/akshitsingla"
}]

const TeamPanel = () => {
    return (
        <section className="w-screen px-4 py-8 sm:py-16 bg-color-primary-section">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-black">The Team</h2>
            <p className="text-gray-600 text-center mb-8 sm:mb-12">
                Meet our small team that make those great products.
            </p>
            
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl">
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
                        <Link href={member.linkedin} className="text-gray-400 hover:text-gray-600">
                            <Linkedin size={24} />
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamPanel;