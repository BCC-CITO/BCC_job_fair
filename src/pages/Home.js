import HeroCarousel from "../components/HeroCarousel";
import FeaturedCompanies from "../components/HiringCompanylist";
import SuccessStories from '../components/SuccessStory'
import ConnectWithUs from "../components/ConnecWithUs";
import IndustrySectors from "../components/IndustryList";
import JobSearchSection from "../components/JobSearchSection";

export default function Home() {
  return (
    <div>
   <HeroCarousel/>
      <JobSearchSection/>
      <FeaturedCompanies/>
      <SuccessStories/>
      <IndustrySectors/>
      <ConnectWithUs/>
    </div>
  );
}