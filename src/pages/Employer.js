import EmployerHero from "../employeecomponent/EmployerHero";
import EmployerFeatures from "../employeecomponent/EmployerFeatures";
import PricingPlans from "../employeecomponent/PricingPlans";
import EmployerModules from "../employeecomponent/EmployerModules";
import EmployerCulture from "../employeecomponent/EmployerCulture";
import EmployerBoundaries from "../employeecomponent/EmployerBoundaries";
import EmployerCTA from "../employeecomponent/EmployerCTA";

export default function Employer() {
  return (
    <div>
    <EmployerHero />
    <EmployerFeatures />
    <PricingPlans />
    <EmployerModules />
    <EmployerCulture />
    <EmployerBoundaries />
    <EmployerCTA />
      
    </div>
  );
}