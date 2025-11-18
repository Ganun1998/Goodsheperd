
import "./index.css";
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index/Index";
import Programs from "./pages/Programs";
import DailyFeeding from "./pages/programs/DailyFeeding";
import PrimaryEducation from "./pages/programs/PrimaryEducation";
import MedicalClinic from "./pages/programs/MedicalClinic";
import BuildingConstruction from "./pages/programs/BuildingConstruction";
import WaterWell from "./pages/programs/WaterWell";
import ClothingDonations from "./pages/programs/ClothingDonations";
import SupportUs from "./pages/SupportUs";
import GetInvolved from "./pages/GetInvolved";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurFounders from "./pages/AboutUs/OurFounders";
import OurLeadership from "./pages/AboutUs/OurLeadership";
import OurPartners from "./pages/AboutUs/OurPartners";
import OurHistory from "./pages/AboutUs/OurHistroy";
import OurVideos from "./pages/AboutUs/OurVideos";
import CoreValues from "./pages/AboutUs/CoreValues";
import Contact from "./pages/contact/contact";
import Donate from "./pages/Donate/Donate";
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/daily-feeding" element={<DailyFeeding />} />
          <Route path="/programs/primary-education" element={<PrimaryEducation />} />
          <Route path="/programs/medical-clinic" element={<MedicalClinic />} />
          <Route path="/programs/building-construction" element={<BuildingConstruction />} />
          <Route path="/programs/water-well" element={<WaterWell />} />
          <Route path="/programs/clothing-donations" element={<ClothingDonations />} />
          <Route path="/support" element={<SupportUs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/our-founders" element={<OurFounders />} />
          <Route path="/about/our-leadership" element={<OurLeadership />} />
          <Route path="/about/our-partners" element={<OurPartners />} />
          <Route path="/about/our-history" element={<OurHistory />} />
          <Route path="/about/our-videos" element={<OurVideos />} />
          <Route path="/about/core-values" element={<CoreValues />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
