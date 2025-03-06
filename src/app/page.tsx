import WhyChose from "@/components/WhyChoose";
import  Hero  from "@/components/Hero";
import ToolGrid  from "@/components/ToolGrid";
import BrowseDirectoryC2A from "@/components/BrowseDirectory";
import { homePageLabels } from "@/utils/labels";

export default function Home() {
  return (
    <>
      <Hero labels={homePageLabels.hero} />
      <ToolGrid/>
      <WhyChose labels={homePageLabels.whyChoose} />
      <BrowseDirectoryC2A />
    </>
  );
}