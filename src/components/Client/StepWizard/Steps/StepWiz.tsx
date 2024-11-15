import React, { useState, useEffect } from "react";
import SeatSelection from "../SeatSelection/SeatSelection";
import PointSelection from "../PointSelection/PointSelection";
import PassengerDetails from "../PassengerInfo/PassengerInfo";
import Payment from "../Payment/Payment";
import TicketConf from "../Ticket/TicketConf";

interface Seat {
  seatNumber: string;
}

interface PassengerInfo {
  name: string;
  age: number;
  gender: string;
  phone: string;
  dateOfBirth: string;
}

interface PassengerData {
  passengerInfo: PassengerInfo;
  selectedSeats: Seat[];
  boardingPoint: string;
  deboardingPoint: string;
  paymentDetails: {
    cardNumber: string;
    walletOption: string;
    paymentStatus: boolean;
  };
}

interface StepWizProps {
  selectedClass: "classique" | "VIP" | "Master"; // Restrict to specific class names
}

const StepWiz: React.FC<StepWizProps> = ({ selectedClass }) => {
  const [step, setStep] = useState(1);
  const [passengerData, setPassengerData] = useState<PassengerData>({
    passengerInfo: { name: "", age: 0, gender: "", phone: "", dateOfBirth: "" },
    selectedSeats: [],
    boardingPoint: "",
    deboardingPoint: "",
    paymentDetails: { cardNumber: "", walletOption: "", paymentStatus: false },
  });

  // Handle seat selection
  const handleSeatSelection = (seats: Seat[]) => {
    setPassengerData((prevData) => ({ ...prevData, selectedSeats: seats }));
    setStep(2); // Move to Point Selection step
  };

  // Handle point selection
  const handlePointSelection = (data: {
    boardingPoint: string;
    deboardingPoint: string;
  }) => {
    setPassengerData((prevData) => ({
      ...prevData,
      boardingPoint: data.boardingPoint,
      deboardingPoint: data.deboardingPoint,
    }));
    setStep(3); // Move to Passenger Details step
  };

  // Handle passenger details submission
  const handlePassengerDetails = (details: PassengerInfo) => {
    setPassengerData((prevData) => ({
      ...prevData,
      passengerInfo: details,
    }));
    setStep(4); // Move to Payment step
  };

  // Handle payment details submission
  const handlePayment = (data: {
    paymentDetails: {
      cardNumber: string;
      walletOption: string;
      paymentStatus: boolean;
    };
  }) => {
    setPassengerData((prevData) => ({
      ...prevData,
      paymentDetails: data.paymentDetails,
    }));
    setStep(5); // Move to Ticket Confirmation step
  };



  // Effect for handling class-specific logic
  useEffect(() => {
    // Log the selected class, or perform additional actions (like fetching specific data for selectedClass)
    console.log("Selected class:", selectedClass);

    // Here, you could adjust the UI based on the selected class
    if (selectedClass === "VIP") {
      console.log("Display VIP features or adjustments.");
    } else if (selectedClass === "Master") {
      console.log("Display Master features or adjustments.");
    }
    // Add other conditions as needed for your logic
  }, [selectedClass]);

  return (
    <div className={`step-wizard ${selectedClass}`}>
      {/* Seat Selection Step */}
      {step === 1 && (
        <SeatSelection
          onSelectSeats={handleSeatSelection}
          selectedClass={selectedClass}
        />
      )}

      {/* Point Selection Step */}
      {step === 2 && <PointSelection onDataChange={handlePointSelection} />}

      {/* Passenger Details Step */}
      {step === 3 && (
        <PassengerDetails
          onSubmit={handlePassengerDetails}
          passengerData={passengerData.passengerInfo}
          boardingPoint={passengerData.boardingPoint}
          deboardingPoint={passengerData.deboardingPoint}
        />
      )}

      {/* Payment Step */}
      {step === 4 && <Payment onDataChange={handlePayment} />}

      {/* Ticket Confirmation Step */}
      {step === 5 && <TicketConf passengerData={passengerData} />}
    </div>
  );
};

export default StepWiz;
