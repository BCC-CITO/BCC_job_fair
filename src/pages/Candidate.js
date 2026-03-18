import CallToAction from "../candidatecomponent/CallToAction";
import FeaturesSection from "../candidatecomponent/FeaturesSection";
import HeroCarousel from "../candidatecomponent/HeroCarousel";
import StatsSection from "../candidatecomponent/StatsSection";


export default function Candidate() {
  return (
    <div>

      <HeroCarousel />
      <FeaturesSection />
      <StatsSection />
      <CallToAction />
    </div>
  );
}