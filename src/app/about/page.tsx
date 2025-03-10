import Banner from '@/components/Banner'
import TeamPanel from '@/components/TeamPanel'
import ConnectWithUs from '@/components/ConnectWithUs'
import { aboutPageLabels } from '@/utils/labels'

export default function About() {
    return (
        <main className="min-h-screen bg-white">
        
            <Banner />

            <section className="container mx-auto max-w-6xl px-4 py-8 sm:py-16">
                <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-black">About us</h1>
                <p className="text-gray-700 text-base sm:text-lg">
                    {aboutPageLabels.description}
                </p>
            </section>

            <TeamPanel />

            <ConnectWithUs />
            
    </main>
    
  )
}