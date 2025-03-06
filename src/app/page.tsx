import WhyChose from "@/components/WhyChoose";
import  Hero  from "@/components/Hero";
import ToolGrid  from "@/components/ToolGrid";
import C2ASection from "@/components/C2ASection";
import { c2aLabels, homePageLabels } from "@/utils/labels";

export default function Home() {
  return (
    <>
      <Hero labels={homePageLabels.hero} c2a={c2aLabels} />
      <ToolGrid/>
      <WhyChose labels={homePageLabels.whyChoose} />
      <C2ASection labels={homePageLabels.c2aSection} c2a={c2aLabels} />
    </>
  );
}