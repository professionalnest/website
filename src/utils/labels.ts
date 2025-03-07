import { AboutPageLabels, C2ALabels, HomePageLabels } from "@/models/UIInterfaces";

export const c2aLabels:C2ALabels = {
    "label": "Get Started",
    "url": "/getstarted"
}

export const homePageLabels:HomePageLabels = {
    "hero": {
        "title": "AI-Enabling Enterprises: From Chaos to Clarity",
        "subtitle": "ProNest optimizes, secures, and streamlines AI investments for enterprises while empowering AI providers with robust sales and distribution channels."
    },
    valuePropositionsSection: {
        "title": "What do we do?",
        "valuePropositions": [{
            userType: "Enterprise AI Buyers",
            title: "Optimize Your AI Ecosystem",
            description: "ProNest helps you discover, manage, and secure multiple AI solutions through our intelligent recommendation engine and unified integration layer. End the complexity of fragmented tools and transform scattered investments into a coordinated strategy.",
            image: "/illustrations/guy-with-charts.svg"
        }, {
            userType: "AI Solution Builders",
            title: "Accelerate Enterprise Penetration",
            description: "Focus on building exceptional AI products while ProNest opens enterprise doors. Our platform provides the sales and distribution channels you need to reach decision-makers and scale your business in the noisy B2B marketplace.",
            image: "/illustrations/people-working-in-a-informal-environment.svg"
        }]
    },
    "whyChoose": {
        "title": "Why Choose ProNest?",
        "reasons": [
            {
                name: "Comprehensive Ecosystem Management",
                description: "Our platform brings order to AI tool chaos through intelligent recommendations and unified management, saving enterprises on AI investments.",
                image: "/illustrations/people-working-in-a-informal-environment.svg",
            },
            {
                name: "Consultative Integration",
                description: "We don't just provide technology—we build relationships. Our consultative approach ensures AI tools align perfectly with your business objectives and workflow needs.",
                image: "/illustrations/people-chatting-around-the-office.svg",
            },
            {
                name: "Enterprise-Grade Security",
                description: "ProNest addresses critical security and compliance vulnerabilities introduced by decentralized AI adoption, providing governance at scale.",
                image: "/illustrations/girl-with-laptop-F0F0F4.svg",
            },
        ]
    },
    "c2aSection": {
        "title": "Ready to get started with ProNest?"
    }
};

export const aboutPageLabels:AboutPageLabels = {
    "description": "We help Enterprise AI buyers optimize, secure and secure their AI investments, and AI solution providers through sales and distribution solutions."
};