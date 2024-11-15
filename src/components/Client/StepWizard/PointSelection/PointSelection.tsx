import React, { useState, ChangeEvent } from "react";

// Type for the point data
interface Point {
  id: number;
  name: string;
  time: string;
}

// Type for the props received by the component
interface PointSelectionProps {
  onDataChange: (data: {
    boardingPoint: string;
    deboardingPoint: string;
  }) => void;
}

const PointSelection: React.FC<PointSelectionProps> = ({ onDataChange }) => {
  // Predefined points with associated times
  const points: Point[] = [
    { id: 1, name: "Station A", time: "10:00 AM" },
    { id: 2, name: "Station B", time: "12:00 PM" },
    { id: 3, name: "Station C", time: "02:00 PM" },
    { id: 4, name: "Station D", time: "04:00 PM" },
  ];

  const [boardingPoint, setBoardingPoint] = useState<string>("");
  const [deboardingPoint, setDeboardingPoint] = useState<string>("");

  // Handle boarding point selection
  const handleBoardingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBoardingPoint(event.target.value);
  };

  // Handle deboarding point selection
  const handleDeboardingChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDeboardingPoint(event.target.value);
  };

  // Submit selected points to parent component
  const handleSubmit = () => {
    // Ensure both boarding and deboarding points are selected
    if (boardingPoint && deboardingPoint) {
      onDataChange({ boardingPoint, deboardingPoint });
    } else {
      alert("Please select both boarding and deboarding points.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Sélectionner les points de montée et de descente
      </h3>

      {/* Boarding Point Selection */}
      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-3">
          Choisissez le point de montée
        </h4>
        <div className="space-y-3">
          {points.map((point) => (
            <label
              key={point.id}
              className={`flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 ${
                boardingPoint === point.name ? "bg-blue-50 border-blue-500" : ""
              }`}
            >
              <input
                type="radio"
                name="boardingPoint"
                value={point.name}
                checked={boardingPoint === point.name}
                onChange={handleBoardingChange}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-800">
                {point.name} - {point.time}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Deboarding Point Selection */}
      <div className="mb-6">
        <h4 className="text-xl font-medium text-gray-700 mb-3">
          Choisissez le point de descente
        </h4>
        <div className="space-y-3">
          {points.map((point) => (
            <label
              key={point.id}
              className={`flex items-center space-x-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 ${
                deboardingPoint === point.name
                  ? "bg-blue-50 border-blue-500"
                  : ""
              }`}
            >
              <input
                type="radio"
                name="deboardingPoint"
                value={point.name}
                checked={deboardingPoint === point.name}
                onChange={handleDeboardingChange}
                className="form-radio text-blue-500"
              />
              <span className="text-gray-800">
                {point.name} - {point.time}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex justify-between items-center space-x-4 mt-6">
        {/* Previous Button */}
        <button className="w-1/3 py-3 px-6 bg-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200">
          Précédent
        </button>

        {/* Next Button */}
        <button
          onClick={handleSubmit}
          className="w-1/3 py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PointSelection;
