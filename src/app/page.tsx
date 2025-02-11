import WhyChose from "@/components/WhyChoose";
import  Hero  from "@/components/Hero";
import ToolGrid  from "@/components/ToolGrid";
import BrowseDirectoryC2A from "@/components/BrowseDirectory";

export default function Home() {
  return (
    <>
      <Hero/>
      <ToolGrid/>
      <WhyChose/>
      <BrowseDirectoryC2A />
    </>
  );
}