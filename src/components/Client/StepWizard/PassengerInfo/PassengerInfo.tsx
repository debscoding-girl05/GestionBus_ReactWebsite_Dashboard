import React, { useState } from "react";

// Assuming you have the existing structure for PassengerDetails
interface PassengerInfo {
  name: string;
  age: number;
  gender: string;
  phone: string;
  dateOfBirth: string;
}

interface PassengerDetailsProps {
  onSubmit: (details: PassengerInfo) => void;
  passengerData: PassengerInfo;
  boardingPoint: string;
  deboardingPoint: string;
}

const PassengerDetails: React.FC<PassengerDetailsProps> = ({
  onSubmit,
  passengerData,
  boardingPoint,
  deboardingPoint,
}) => {
  const [details, setDetails] = useState(passengerData);
  const [isTransferEnabled, setIsTransferEnabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = () => {
    setIsTransferEnabled((prev) => !prev);
  };

  const handleSubmit = () => {
    onSubmit(details);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-3xl font-semibold text-center mb-6 text-gray-800">
        Détails du Passager
      </h3>

      {/* Boarding and Deboarding Points */}
      <div className="mb-6">
        <p className="text-lg font-medium text-gray-700">
          <strong>Point de Montée:</strong> {boardingPoint}
        </p>
        <p className="text-lg font-medium text-gray-700">
          <strong>Point de Descente:</strong> {deboardingPoint}
        </p>
      </div>

      {/* Passenger Details Section */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h4 className="text-2xl font-semibold mb-4 text-gray-800">
          Informations du Passager
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Nom
            </label>
            <input
              type="text"
              name="name"
              value={details.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Âge
            </label>
            <input
              type="number"
              name="age"
              value={details.age}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Sexe
            </label>
            <input
              type="text"
              name="gender"
              value={details.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Téléphone
            </label>
            <input
              type="text"
              name="phone"
              value={details.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Date de naissance
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={details.dateOfBirth}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="mb-6 p-6 bg-gray-100 rounded-lg shadow-sm">
    
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-gray-600">
            Transférer les détails par mail
          </label>
          <input
            type="checkbox"
            checked={isTransferEnabled}
            onChange={handleToggleChange}
            className="form-checkbox text-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handleSubmit}
          className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PassengerDetails;
