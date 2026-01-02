import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThreatMapPage from "./pages/ThreatMap";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Compliance from "./pages/Compliance";
import GRCService from "./pages/services/GRCService";
import TPRMService from "./pages/services/TPRMService";
import BCMSService from "./pages/services/BCMSServiceNew";
import ApplicationSecurityService from "./pages/services/ApplicationSecurityService";
import CloudSecurityService from "./pages/services/CloudSecurityService";
import MobileAppSecurityService from "./pages/services/MobileAppSecurityService";
import TrainingAwarenessService from "./pages/services/TrainingAwarenessService";
import InfrastructureSecurityService from "./pages/services/InfrastructureSecurityService";
import VCISOService from "./pages/services/VCISOService";
import ResourceAsServiceService from "./pages/services/ResourceAsServiceService";
import DPDPService from "./pages/services/DPDPService";
import ThreatDetectionService from "./pages/services/ThreatDetectionService";
import IncidentResponseService from "./pages/services/IncidentResponseService";
import PenetrationTestingService from "./pages/services/PenetrationTestingService";
import SecurityAuditService from "./pages/services/SecurityAuditService";
import EnterpriseSolution from "./pages/solutions/Enterprise";
import CloudSolution from "./pages/solutions/Cloud";
import EndpointSolution from "./pages/solutions/Endpoint";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/MapRNR">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/threat-detection" element={<ThreatDetectionService />} />
          <Route path="/services/incident-response" element={<IncidentResponseService />} />
          <Route path="/services/penetration-testing" element={<PenetrationTestingService />} />
          <Route path="/services/security-audit" element={<SecurityAuditService />} />
          <Route path="/services/governance-risk-compliance" element={<GRCService />} />
          <Route path="/services/third-party-risk-management" element={<TPRMService />} />
          <Route path="/services/business-continuity-management" element={<BCMSService />} />
          <Route path="/services/application-security" element={<ApplicationSecurityService />} />
          <Route path="/services/cloud-security" element={<CloudSecurityService />} />
          <Route path="/services/mobile-app-security" element={<MobileAppSecurityService />} />
          <Route path="/services/training-awareness" element={<TrainingAwarenessService />} />
          <Route path="/services/infrastructure-security" element={<InfrastructureSecurityService />} />
          <Route path="/services/vciso" element={<VCISOService />} />
          <Route path="/services/resource-as-service" element={<ResourceAsServiceService />} />
          <Route path="/services/dpdp" element={<DPDPService />} />
          <Route path="/solutions/enterprise" element={<EnterpriseSolution />} />
          <Route path="/solutions/cloud" element={<CloudSolution />} />
          <Route path="/solutions/endpoint" element={<EndpointSolution />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/threat-map" element={<ThreatMapPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
