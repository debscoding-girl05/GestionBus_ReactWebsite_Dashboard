import React, { useState, ChangeEvent } from "react";

// Type for the payment details
interface PaymentDetails {
  cardNumber: string;
  walletOption: string;
  paymentStatus: boolean;
}

// Type for the props received by the component
interface PaymentProps {
  onDataChange: (data: { paymentDetails: PaymentDetails }) => void;
}

const Payment: React.FC<PaymentProps> = ({ onDataChange }) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    cardNumber: "",
    walletOption: "",
    paymentStatus: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onDataChange({ paymentDetails });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Informations de Paiement
      </h3>

      <div className="space-y-4">
        {/* Card Number Input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Numéro de telephone
          </label>
          <input
            type="text"
            name="cardNumber"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Entrez votre numéro de telephone"
          />
        </div>

        {/* Wallet Option Select */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Sélectionnez un portefeuille
          </label>
          <select
            name="walletOption"
            value={paymentDetails.walletOption}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Orange Money">Orange Money</option>
            <option value="MTN Money">MTN Money</option>
            <option value="Crypto">Crypto</option>
          </select>
        </div>

        {/* Payment Confirmation Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="w-full md:w-auto py-3 px-6 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          >
            Confirmer le Paiement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
