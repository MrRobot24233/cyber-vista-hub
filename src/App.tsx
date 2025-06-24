
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import MatrixBackground from "@/components/MatrixBackground";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import News from "./pages/News";
import Tools from "./pages/Tools";
import Roadmap from "./pages/Roadmap";
import Learning from "./pages/Learning";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-cyber-dark text-white">
          <MatrixBackground />
          <Navigation />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/news" element={<News />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
