import HeroSection from "@/component/HeroSection";
import MapSection from "@/component/MapSection";
import PopularSection from "@/component/PopularSection";
import { fetchPopularProcedures } from "@/lib/api";


export default async function Home() {
  // const popularProcedures = await fetchPopularProcedures();

  // console.log(popularProcedures);
  return (
    <>
      <HeroSection />
      <PopularSection />
      <MapSection />
    </>
  );
}
