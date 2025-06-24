
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import MatrixBackground from "@/components/MatrixBackground";
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
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-cyber-dark text-white">
            <MatrixBackground />
            {/* Floating particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-xl floating-particle" />
              <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl floating-particle" style={{ animationDelay: '2s' }} />
              <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl floating-particle" style={{ animationDelay: '4s' }} />
              <div className="absolute bottom-20 right-10 w-28 h-28 bg-gradient-to-br from-green-400/20 to-teal-500/20 rounded-full blur-xl floating-particle" style={{ animationDelay: '1s' }} />
            </div>
            <Navigation />
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
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
