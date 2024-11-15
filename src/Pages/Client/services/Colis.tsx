import  { useState } from "react";
import { FaMapMarkerAlt, FaUser, FaPhone, FaBox, FaBell } from "react-icons/fa";
import courrierIm from "@/assets/images/courrierIm.jpg";


const Colis = () => {
  // State for form inputs
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [courierSize, setCourierSize] = useState("Moyenne");
  const [senderPhone, setSenderPhone] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [notifyRecipient, setNotifyRecipient] = useState(false);
  const [setOffPlace] = useState("Yaoundé");
  const [deliveryPlace] = useState("Douala");

  const [parcelLabel, setParcelLabel] = useState(""); // State for parcel label
  const [parcelWeight, setParcelWeight] = useState(""); // State for parcel weight

  // Modal state for modifying locations
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default price
  const price = 5000;

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  // Function to handle location changes

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${courrierIm})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Service De livraison de Colis
          </h1>
          <p className="text-lg">
            Envoyez vos colis en toute simplicité et sécurité
          </p>
        </div>
      </div>

      {/* Set Off Package and Delivery Place */}
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Détails de l'envoi
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 text-3xl mr-4" />
              <span className="text-lg">
                {setOffPlace} à {deliveryPlace}
              </span>
            </div>
            <button onClick={openModal} className="text-blue-600 text-sm">
              Modifier
            </button>
          </div>
        </div>
      </section>

      {/* Courier Details Section */}
      <section className="py-12 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Détails du Colis
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
          {/* Parcel Label */}
          <div className="flex items-center">
            <FaBox className="text-blue-600 text-xl mr-4" />
            <input
              type="text"
              placeholder="Étiquette du colis"
              value={parcelLabel}
              onChange={(e) => setParcelLabel(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Parcel Weight */}
          <div className="flex items-center">
            <FaBox className="text-blue-600 text-xl mr-4" />
            <input
              type="number"
              placeholder="Poids du colis (en kg)"
              value={parcelWeight}
              onChange={(e) => setParcelWeight(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Sender's Name */}
          <div className="flex items-center">
            <FaUser className="text-blue-600 text-xl mr-4" />
            <input
              type="text"
              placeholder="Nom de l'expéditeur"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          {/* Sender's Phone */}
          <div className="flex items-center">
            <FaPhone className="text-blue-600 text-xl mr-4" />
            <input
              type="text"
              placeholder="Numéro de téléphone de l'expéditeur"
              value={senderPhone}
              onChange={(e) => setSenderPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Recipient's Name */}
          <div className="flex items-center">
            <FaUser className="text-blue-600 text-xl mr-4" />
            <input
              type="text"
              placeholder="Nom du destinataire"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Recipient's Phone */}
          <div className="flex items-center">
            <FaPhone className="text-blue-600 text-xl mr-4" />
            <input
              type="text"
              placeholder="Numéro de téléphone du destinataire"
              value={recipientPhone}
              onChange={(e) => setRecipientPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Courier Size */}
          <div className="flex items-center">
            <FaBox className="text-blue-600 text-xl mr-4" />
            <select
              value={courierSize}
              onChange={(e) => setCourierSize(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="Petit">Petit</option>
              <option value="Moyenne">Moyenne</option>
              <option value="Grand">Grand</option>
            </select>
          </div>

          {/* Notify Recipient */}
          <div className="flex items-center">
            <FaBell className="text-blue-600 text-xl mr-4" />
            <input
              type="checkbox"
              checked={notifyRecipient}
              onChange={() => setNotifyRecipient(!notifyRecipient)}
              className="ml-4"
            />
            <label className="text-lg ml-1">
              Notifier le destinataire du statut du colis
            </label>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-12 px-4 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Détails du Paiement
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-lg">Montant à payer:</span>
            <span className="text-xl font-semibold text-blue-600">
              {price} FCFA
            </span>
          </div>

          {/* Payment Options Dropdown */}
          <div className="flex items-center space-x-4">
            <label htmlFor="paymentMethod" className="text-lg">
              Méthode de Paiement:
            </label>
            <select
              id="paymentMethod"
              value={courierSize} // You can change this state variable for the payment method
              onChange={(e) => setCourierSize(e.target.value)} // Update state when selection changes
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              <option value="wallet">Payer avec mon portefeuille</option>
              <option value="mobileMoney">Payer avec Mobile Money</option>
              <option value="orangeMoney">Payer avec Orange Money</option>
              <option value="crypto">Payer par Crypto</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => {
                // Redirect to the payment page logic
              }}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg"
            >
              Valider
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal" style={{ display: isModalOpen ? 'block' : 'none' }}>
          {/* Modal content goes here */}
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Colis;
