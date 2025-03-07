import WhyChose from "@/components/WhyChoose";
import  Hero  from "@/components/Hero";
import ValuePropositions  from "@/components/ValuePropositions";
import C2ASection from "@/components/C2ASection";
import { c2aLabels, homePageLabels } from "@/utils/labels";

export default function Home() {
  return (
    <>
      <Hero labels={homePageLabels.hero} c2a={c2aLabels} />
      <ValuePropositions title={homePageLabels.valuePropositionsSection.title} valuePropositions={homePageLabels.valuePropositionsSection.valuePropositions}/>
      <WhyChose labels={homePageLabels.whyChoose} />
      <C2ASection labels={homePageLabels.c2aSection} c2a={c2aLabels} />
    </>
  );
}