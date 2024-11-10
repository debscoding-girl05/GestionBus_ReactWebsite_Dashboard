// src/router.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClientLayout from "./src/layouts/ClientLayout"
import DashboardLayout from "./src/layouts/DashboardLayout";
import Home from "./src/Pages/Client/Home";
import Services from "./src/Pages/Client/services/Services";
import DashboardHome from "./src/Pages/Dashboard/Home";
import Settings from "./src/Pages/Dashboard/Settings";
import About from "@/Pages/Client/About";
import { Contact } from "lucide-react";

const AppRouter = () => (
  <Router>
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Route>

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
