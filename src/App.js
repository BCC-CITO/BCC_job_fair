import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Topnavbar";
import Navbar2 from "./components/Navbar2";
import JobSearchSection from "./components/JobSearchSection";
// Example pages
import Home from "./pages/Home";
import Candidate from "./pages/Candidate";
import Employer from "./pages/Employer";

import ContactPhone from "./pages/ContactPhone";
import ContactEmail from "./pages/ContactEmail";
import Notifications from "./pages/Notifications";
import Brochure from "./pages/Brochure";

import Login from "./pages/Login";
import Register from "./pages/Register";
import HeroCarousel from "./components/HeroCarousel";
import FeaturedCompanies from "./components/HiringCompanylist";
import SuccessStories from './components/SuccessStory'
import ConnectWithUs from "./components/ConnecWithUs";
import IndustrySectors from "./components/IndustryList";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Navbar2 />
      <HeroCarousel/>
      <JobSearchSection/>
      <FeaturedCompanies/>
      <SuccessStories/>
      <IndustrySectors/>
      <ConnectWithUs/>
      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/employer" element={<Employer />} />

        {/* TOP NAV ROUTES */}
        <Route path="/contact-phone" element={<ContactPhone />} />
        <Route path="/contact-email" element={<ContactEmail />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/brochure" element={<Brochure />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;