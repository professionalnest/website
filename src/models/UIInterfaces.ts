export interface WhyChooseProNestReason {
    name: string,
    description: string,
    image: string
}

export interface WhyChooseComponentLabels {
    title: string,
    reasons: WhyChooseProNestReason[]
}

export interface HeroComponentLabels {
    title: string,
    subtitle: string
}

export interface C2ALabels {
    label: string,
    url: string
}

export interface C2ASectionComponentLabels {
    title: string
}

export interface ValueProposition {
    userType: string,
    title: string,
    description: string,
    image: string
}

export interface HomePageLabels {
    hero: HeroComponentLabels,
    whyChoose: WhyChooseComponentLabels,
    c2aSection: C2ASectionComponentLabels,
    valuePropositionsSection: {
        title: string,
        valuePropositions: ValueProposition[]
    }
}

export interface AboutPageLabels {
    description: string
}