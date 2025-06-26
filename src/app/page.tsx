import HeroSection from "@/component/HeroSection";
import MapSection from "@/component/MapSection";
import PopularSection from "@/component/PopularSection";


export default async function Home() {
 
  return (
    <>
      <HeroSection />
      <PopularSection />
      <MapSection />
    </>
  );
}
