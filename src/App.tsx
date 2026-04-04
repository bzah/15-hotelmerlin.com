import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BlogPost from "./pages/BlogPost.tsx";
import DestinationJakarta from "./pages/DestinationJakarta.tsx";
import DestinationBatam from "./pages/DestinationBatam.tsx";
import DestinationMaumere from "./pages/DestinationMaumere.tsx";
import DestinationBali from "./pages/DestinationBali.tsx";
import DestinationYogyakarta from "./pages/DestinationYogyakarta.tsx";
import DestinationLombok from "./pages/DestinationLombok.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/hotel-merlin-jakarta" element={<DestinationJakarta />} />
          <Route path="/hotel-merlin-batam" element={<DestinationBatam />} />
          <Route path="/merlin-hotel-maumere" element={<DestinationMaumere />} />
          <Route path="/best-hotels-bali" element={<DestinationBali />} />
          <Route path="/hotels-yogyakarta" element={<DestinationYogyakarta />} />
          <Route path="/hotels-lombok" element={<DestinationLombok />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
