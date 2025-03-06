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
    subtitle: string,
    c2aText: string,
    c2aLink: string
}

export interface HomePageLabels {
    hero: HeroComponentLabels,
    whyChoose: WhyChooseComponentLabels
}

export interface AboutPageLabels {
    description: string
}