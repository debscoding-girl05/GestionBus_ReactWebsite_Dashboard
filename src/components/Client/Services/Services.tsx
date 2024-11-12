import React from "react";
import { FaBus, FaTruck, FaBox, FaHandHoldingHeart } from "react-icons/fa"; // Updated icons

const Services = () => {
  return (
    <div className="flex flex-col items-center my-10 mb-16 px-4 bg-gradient-to-r from-[#a8c0ff] to-[#d4e4ff] py-16">
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        Nos Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full max-w-6xl">
        {/* Service 1: Transportation of People by Bus */}
        <div className="flex flex-col items-center text-center bg-white bg-opacity-70 p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-200 p-4 mb-4">
            <FaBus className="text-3xl text-blue-600" />
          </div>
          <p className="text-lg font-semibold text-black">
            Transport de personnes
          </p>
        </div>

        {/* Service 2: Courier Delivery */}
        <div className="flex flex-col items-center text-center bg-white bg-opacity-70 p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-200 p-4 mb-4">
            <FaTruck className="text-3xl text-blue-600" />
          </div>
          <p className="text-lg font-semibold text-black">
            Livraison de Courrier
          </p>
        </div>

        {/* Service 3: Package Delivery */}
        <div className="flex flex-col items-center text-center bg-white bg-opacity-70 p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-200 p-4 mb-4">
            <FaBox className="text-3xl text-blue-600" />
          </div>
          <p className="text-lg font-semibold text-black">
            Livraison de Paquets
          </p>
        </div>

        {/* Service 4: General Service (Default Icon) */}
        <div className="flex flex-col items-center text-center bg-white bg-opacity-70 p-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-200 p-4 mb-4">
            <FaHandHoldingHeart className="text-3xl text-blue-600" />
          </div>
          <p className="text-lg font-semibold text-black">Service Général</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
