import React from "react";

// Définir les types pour les structures de passengerData
interface Seat {
  seatNumber: string;
}

interface PassengerInfo {
  name: string;
  age: number;
  gender: string;
  phone: string;
}

interface PassengerData {
  passengerInfo: PassengerInfo;
  selectedSeats: Seat[];
  boardingPoint: string;
  deboardingPoint: string;
}

interface TicketConfProps {
  passengerData: PassengerData;
}

const TicketConf: React.FC<TicketConfProps> = ({ passengerData }) => {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg border-4 border-gray-400 relative">
      {/* En-tête du billet */}
      <div className="text-center mb-6">
        <h3 className="text-4xl font-semibold text-gray-800">Billet de bus</h3>
        <p className="text-sm text-gray-600">Confirmation du billet</p>
      </div>

      {/* Informations sur le billet */}
      <div className="text-gray-800 space-y-4 mb-6">
        <div className="flex justify-between">
          <p className="font-semibold">Nom du passager :</p>
          <p>{passengerData.passengerInfo.name}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Sièges :</p>
          <p>
            {passengerData.selectedSeats
              .map((seat) => seat.seatNumber)
              .join(", ")}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Âge :</p>
          <p>{passengerData.passengerInfo.age}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Genre :</p>
          <p>{passengerData.passengerInfo.gender}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Téléphone :</p>
          <p>{passengerData.passengerInfo.phone}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Point d'embarquement :</p>
          <p>{passengerData.boardingPoint}</p>
        </div>

        <div className="flex justify-between">
          <p className="font-semibold">Point de débarquement :</p>
          <p>{passengerData.deboardingPoint}</p>
        </div>
      </div>

      {/* Pied de page avec ligne en pointillés */}
      <div className="absolute bottom-4 left-0 right-0 border-t-4 border-dashed border-gray-400 mt-6"></div>

      {/* Bouton de téléchargement */}
      <div className="mt-6 flex justify-center">
        <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300">
          Télécharger le billet
        </button>
      </div>
    </div>
  );
};

export default TicketConf;
