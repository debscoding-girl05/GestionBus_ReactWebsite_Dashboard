// src/layouts/ClientLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/Client/NavBar/NavBar";
import HeroSection from "@/components/Client/HeroPage/HeroSection";
import Middle from "@/components/Client/Middle/Middle";
import Destinations from "@/components/Client/Destinations/Destinations";
import Commentaires from "@/components/Client/Commentaires/Commentaires";
import Questions from "@/components/Client/Questions/Questions";
import Footer from "@/components/Client/Footer/Footer";
import Portfolio from "@/components/Client/Portfolio/Portfolio";
import Services from "@/components/Client/ServicesComp/ServicesComp";

const ClientLayout = () => {
  // Get the current location to conditionally render content
  const location = useLocation();

  return (
    <div>
      <Navbar />

      {/* Render homepage sections only if the path is exactly '/' */}
      {location.pathname === "/" && (
        <>
          <HeroSection />
          <Middle />
          <Destinations />
          <Services />
          <Portfolio />
          <Commentaires />
          <Questions />
        </>
      )}

      {/* Dynamic content based on route */}
      <Outlet />

      <Footer />
    </div>
  );
};

export default ClientLayout;
