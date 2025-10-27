import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import TrabajoForzoso from "./pages/TrabajoForzoso";
import CumplimientoLegal from "./pages/CumplimientoLegal";
import Suelos from "./pages/Suelos";
import Certificaciones from "./pages/Certificaciones";
import Produccion from "./pages/Produccion";
import DataTrabajadores from "./pages/DataTrabajadores";
import DataCertificado from "./pages/DataCertificado";
import DataSuperficie from "./pages/DataSuperficie";
import CumplimientoExpandido from "./pages/CumplimientoExpandido";
import HorasLaborales from "./pages/HorasLaborales";
import Respuestas from "./pages/Respuestas";
import RespuestasPublic from "./pages/RespuestasPublic";
import Detalles from "./pages/Detalles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ProtectedRoute>
          <DashboardLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/trabajo-forzoso" element={<TrabajoForzoso />} />
              <Route path="/cumplimiento" element={<CumplimientoLegal />} />
              <Route path="/suelos" element={<Suelos />} />
              <Route path="/certificaciones" element={<Certificaciones />} />
              <Route path="/produccion" element={<Produccion />} />
              <Route path="/data-trabajadores" element={<DataTrabajadores />} />
              <Route path="/data-certificado" element={<DataCertificado />} />
              <Route path="/data-superficie" element={<DataSuperficie />} />
              <Route path="/cumplimiento-expandido" element={<CumplimientoExpandido />} />
              <Route path="/horas-laborales" element={<HorasLaborales />} />
              <Route path="/respuestas-public" element={<RespuestasPublic />} />
              <Route path="/detalles" element={<Detalles />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DashboardLayout>
        </ProtectedRoute>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
