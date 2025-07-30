import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import OtpVerification from "./pages/OtpVerification";
import Registration from "./pages/Registration";
import DocumentUpload from "./pages/DocumentUpload";
import Dashboard from "./pages/Dashboard";
import MyBookings from "./pages/MyBookings";
import MyEarnings from "./pages/MyEarnings";
import BankAccount from "./pages/BankAccount";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";
import Profile from "./pages/profile";
import Transactions from "./pages/Transactions";
import FAQ from "./pages/faq";
import Contact from "./pages/contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/document-upload" element={<DocumentUpload />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/my-earnings" element={<MyEarnings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/bank-account" element={<BankAccount />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
