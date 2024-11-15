import React, { useState } from "react";

interface Seat {
  seatNumber: string;
  isBooked?: boolean; // Adding isBooked to simulate booked seats
}

interface SeatSelectionProps {
  onSelectSeats: (seats: Seat[]) => void;
  selectedClass: 'classique' | 'VIP' | 'Master'; // Restrict selectedClass to specific keys
}

const SeatSelection: React.FC<SeatSelectionProps> = ({
  onSelectSeats,
  selectedClass,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  // Define different seat configurations for each class type
  const seatConfigurations: Record<string, { totalSeats: number; seatsPerRow: number; leftSeats: number; rightSeats: number }> = {
    classique: { totalSeats: 70, seatsPerRow: 5, leftSeats: 3, rightSeats: 2 },
    VIP: { totalSeats: 40, seatsPerRow: 4, leftSeats: 2, rightSeats: 2 },
    Master: { totalSeats: 20, seatsPerRow: 2, leftSeats: 1, rightSeats: 1 },
  };

  const { totalSeats, seatsPerRow, leftSeats, rightSeats } =
    seatConfigurations[selectedClass]; // No need for fallback since selectedClass is now valid

  const seatNumbers = Array.from({ length: totalSeats }, (_, i) =>
    (i + 1).toString()
  ); // Create seat numbers based on the total seats for the class

  // Simulating some booked seats for demonstration purposes
  const bookedSeats = ["5", "10", "15", "20", "25", "30"]; // Example booked seat numbers

  const handleSeatClick = (seatNumber: string) => {
    // Prevent selecting booked seats
    if (bookedSeats.includes(seatNumber)) return;

    setSelectedSeats((prevSeats) => {
      const isSelected = prevSeats.some(
        (seat) => seat.seatNumber === seatNumber
      );
      if (isSelected) {
        return prevSeats.filter((seat) => seat.seatNumber !== seatNumber); // Deselect
      } else {
        return [...prevSeats, { seatNumber }];
      }
    });
  };

  const handleSubmit = () => {
    onSelectSeats(selectedSeats);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-3xl mx-auto">
      {/* Info about booked and available seats organized in a row */}
      <div className="mb-6 flex justify-center gap-6 text-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="bg-gray-400 text-white px-2 py-1 rounded-lg">
            Réservé
          </span>
          <span>Siège déjà réservé</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded-lg">
            Disponible
          </span>
          <span>Siège disponible pour la sélection</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-lg">
            Sélectionné
          </span>
          <span>Siège que vous avez sélectionné</span>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-center mb-6">
        Sélectionner les sièges
      </h3>

      {/* Seat Rows */}
      <div className="space-y-4">
        {Array.from({ length: Math.ceil(totalSeats / seatsPerRow) }, (_, i) => (
          <div key={i} className="flex justify-center gap-2">
            {/* Left side seats */}
            {seatNumbers
              .slice(i * seatsPerRow, i * seatsPerRow + leftSeats)
              .map((seatNumber) => (
                <div
                  key={seatNumber}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer
                  ${
                    bookedSeats.includes(seatNumber)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : selectedSeats.some(
                          (seat) => seat.seatNumber === seatNumber
                        )
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }
                  border-2 border-gray-300 transition duration-200 ease-in-out
                  hover:bg-blue-400 hover:border-blue-600`}
                  onClick={() => handleSeatClick(seatNumber)}
                >
                  {seatNumber}
                </div>
              ))}

            {/* Aisle (empty space between seats) */}
            <div className="w-8 h-8 bg-transparent"></div>

            {/* Right side seats */}
            {seatNumbers
              .slice(
                i * seatsPerRow + leftSeats,
                i * seatsPerRow + leftSeats + rightSeats
              )
              .map((seatNumber) => (
                <div
                  key={seatNumber}
                  className={`w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer
                  ${
                    bookedSeats.includes(seatNumber)
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : selectedSeats.some(
                          (seat) => seat.seatNumber === seatNumber
                        )
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }
                  border-2 border-gray-300 transition duration-200 ease-in-out
                  hover:bg-blue-400 hover:border-blue-600`}
                  onClick={() => handleSeatClick(seatNumber)}
                >
                  {seatNumber}
                </div>
              ))}
          </div>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 mt-4"
      >
        Suivant
      </button>
    </div>
  );
};

export default SeatSelection;
