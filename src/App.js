import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNavbar from "./components/Topnavbar";
import Navbar2 from "./components/Navbar2";

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

import Footer from "./components/Footer";
import JobFair from "./pages/jobfair";

import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Navbar2 />
      
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/employer" element={<Employer />} />
      <Route path="/jobfair" element={<JobFair />} />

        {/* TOP NAV ROUTES */}
        <Route path="/contact-phone" element={<ContactPhone />} />
        <Route path="/contact-email" element={<ContactEmail />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/brochure" element={<Brochure />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
     

}

export default App;