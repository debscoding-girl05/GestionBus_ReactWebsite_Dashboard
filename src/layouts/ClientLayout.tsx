// src/layouts/ClientLayout.tsx
import { Outlet, Link } from "react-router-dom";
import { Navbar } from "@/components/Client/NavBar/NavBar";
import HeroSection from "@/components/Client/HeroPage/HeroSection";
import Middle from "@/components/Client/Middle/Middle";
import Destinations from "@/components/Client/Destinations/Destinations";
import Commentaires from "@/components/Client/Commentaires/Commentaires";
import Questions from "@/components/Client/Questions/Questions";
import Footer from "@/components/Client/Footer/Footer";
import Portfolio from "@/components/Client/Portfolio/Portfolio";

const ClientLayout = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Middle/>
      <Destinations/>
      <Portfolio/>
      <Commentaires/>
      <Questions/>
      <Footer/>
    </div>
  );
};

export default ClientLayout;
