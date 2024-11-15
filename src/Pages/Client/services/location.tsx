import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaBus,
  FaTools,
  FaRegCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importing datepicker styles
import buses from "@/assets/images/buses.jpg"

const LocationBus: React.FC = () => {
  // State variables for form fields
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [itinerary, setItinerary] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [numPassengers, setNumPassengers] = useState<number>(1);
  const [event, setEvent] = useState<string>("");
  const [driverRequired, setDriverRequired] = useState<boolean>(false);
  const [busRequirements, setBusRequirements] = useState<string>("");
  const [insuranceRequired, setInsuranceRequired] = useState<boolean>(false);

  // Handle submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", {
      clientName,
      clientPhone,
      departureDate,
      returnDate,
      itinerary,
      destination,
      numPassengers,
      event,
      driverRequired,
      busRequirements,
      insuranceRequired,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-80 w-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${buses})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Location de Bus</h1>
          <p className="text-lg">
            Louez un bus pour vos voyages, événements, et plus encore.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Formulaire de Location de Bus
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Client Information */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaUsers className="text-blue-600 text-xl mr-4" />
                <input
                  type="text"
                  placeholder="Nom du client"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex items-center">
                <FaPhone className="text-blue-600 text-xl mr-4" />
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>
            </div>

            {/* Date and Time of Rental */}
            <div className="flex space-x-4">
              <div className="flex items-center space-x-4 w-full">
                <FaCalendarAlt className="text-blue-600 text-xl" />
                <div className="w-full">
                  <label htmlFor="departureDate" className="block text-lg">
                    Date de départ
                  </label>
                  <DatePicker
                    selected={departureDate}
                    onChange={(date: Date | null) => setDepartureDate(date)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Sélectionnez la date de départ"
                    required
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full">
                <FaCalendarAlt className="text-blue-600 text-xl" />
                <div className="w-full">
                  <label htmlFor="returnDate" className="block text-lg">
                    Date de retour
                  </label>
                  <DatePicker
                    selected={returnDate}
                    onChange={(date: Date | null) => setReturnDate(date)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Sélectionnez la date de retour"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Itinerary and Destination */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <FaBus className="text-blue-600 text-xl mr-4" />
                <input
                  type="text"
                  placeholder="Itinéraire"
                  value={itinerary}
                  onChange={(e) => setItinerary(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-xl mr-4" />
                <input
                  type="text"
                  placeholder="Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex items-center">
                <FaUsers className="text-blue-600 text-xl mr-4" />
                <input
                  type="number"
                  placeholder="Nombre de passagers"
                  value={numPassengers}
                  onChange={(e) => setNumPassengers(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div className="flex items-center">
                <FaRegCheckCircle className="text-blue-600 text-xl mr-4" />
                <input
                  type="text"
                  placeholder="Événement (si applicable)"
                  value={event}
                  onChange={(e) => setEvent(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            {/* Driver Requirement */}
            <div className="flex items-center space-x-4">
              <label className="text-lg">Chauffeur requis</label>
              <input
                type="checkbox"
                checked={driverRequired}
                onChange={() => setDriverRequired(!driverRequired)}
                className="ml-4"
              />
            </div>

            {/* Bus Requirements */}
            <div className="flex items-center">
              <FaTools className="text-blue-600 text-xl mr-4" />
              <textarea
                placeholder="Exigences spécifiques pour le bus"
                value={busRequirements}
                onChange={(e) => setBusRequirements(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows={4}
              />
            </div>

            {/* Insurance Requirement */}
            <div className="flex items-center space-x-4">
              <label className="text-lg">Assurance requise</label>
              <input
                type="checkbox"
                checked={insuranceRequired}
                onChange={() => setInsuranceRequired(!insuranceRequired)}
                className="ml-4"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                Soumettre la demande
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LocationBus;
