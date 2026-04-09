import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import BrushCuttingService from "./pages/BrushCuttingService.tsx";
import HedgeTrimming from "./pages/HedgeTrimming.tsx";
import FruitTreePruning from "./pages/FruitTreePruning.tsx";
import LandClearing from "./pages/LandClearing.tsx";
import Pricing from "./pages/Pricing.tsx";
import Clients from "./pages/Clients.tsx";
import Blog from "./pages/Blog.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teenused" element={<Services />} />
          <Route path="/vosaloikus" element={<BrushCuttingService />} />
          <Route path="/heki-loikus" element={<HedgeTrimming />} />
          <Route path="/viljapuude-loikus" element={<FruitTreePruning />} />
          <Route path="/krundi-puhastus" element={<LandClearing />} />
          <Route path="/hinnad" element={<Pricing />} />
          <Route path="/meie-kliendid" element={<Clients />} />
          <Route path="/blogi" element={<Blog />} />
          <Route path="/kontaktid" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
