import HeroSection from "../components/HeroCarousel";
import Navbar2 from "../components/Navbar2";
import TopNavbar from "../components/Topnavbar";
import HeroSectionjob from "../jobsearchcomponents/HeroCarousel_job";
import PortalSection from "../jobsearchcomponents/portalsection";
import WhyChoose from "../jobsearchcomponents/whychoose";
export default function JobFair()  { 

return (
    <div>
       <HeroSectionjob/>
       <PortalSection/>
       <WhyChoose/>
    </div>
  );
}