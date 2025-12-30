// src/App.tsx

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutVictoria from "./components/pages/kimmy_journey/AboutVictoria";
import Milestones from "./components/pages/kimmy_journey/Milestones";
import AboutGrovy from "./components/pages/grovy_family/AboutGrovy";
import Structure from "./components/pages/grovy_family/Structure";
import HowToBeGrovy from "./components/pages/grovy_family/HowToBeGrovy";
import Guidelines from "./components/pages/grovy_family/Guidelines";
import KimmyInFrame from "./components/pages/kimmy_archive/KimmyInFrames";
import KimmyInClips from "./components/pages/kimmy_archive/KimmyInClips";
import PinnaclePursuit from "./components/pages/grovy_project/PinnaclePursuit";
import SaishoNoRamune from "./components/pages/grovy_project/SaishoNoRamune";
import Vishalarasa from "./components/pages/grovy_project/Vishalarasa";
import StayAlive from "./components/pages/merchandise/StayAlive";
import Feedme from "./components/pages/merchandise/FeedMe";
import KimmySchedule from "./components/pages/announcement/KimmySchedule";
import GrovyNews from "./components/pages/announcement/GrovyNews";
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
          <Route path="/about-victoria" element={<AboutVictoria />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/about-grovy" element={<AboutGrovy />} />
          <Route path="/staff" element={<Structure />} />,
          <Route path="/join" element={<HowToBeGrovy />} />
          <Route path="/rules" element={<Guidelines />} />
          <Route path="/photos" element={<KimmyInFrame />} />
          <Route path="/video" element={<KimmyInClips />} />
          <Route path="/pinnacle" element={<PinnaclePursuit />} />
          <Route path="/saisho" element={<SaishoNoRamune />} />
          <Route path="/visha" element={<Vishalarasa />} />
          <Route path="/stay" element={<StayAlive />} />
          <Route path="/feedme" element={<Feedme />} />
          <Route path="/schedule" element={<KimmySchedule />} />
          <Route path="/news" element={<GrovyNews />} />
          {/* 👈 Route tetap sama */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
