import WhyChose from "@/components/WhyChoose";
import  Hero  from "@/components/Hero";
import ToolGrid  from "@/components/ToolGrid";
import BrowseDirectoryC2A from "@/components/BrowseDirectory";
import { homePageLabels } from "@/utils/labels";
import { HeroComponentLabels } from "@/models/UIInterfaces";

export default function Home() {
  return (
    <>
      <Hero labels={homePageLabels.hero} />
      <ToolGrid/>
      <WhyChose/>
      <BrowseDirectoryC2A />
    </>
  );
}