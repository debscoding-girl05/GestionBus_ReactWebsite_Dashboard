import  { useState } from "react";
import { FaMapMarkerAlt, FaUser, FaPhone, FaBox, FaBell } from "react-icons/fa";
import courrierIm from "@/assets/images/courrierIm.jpg"

const Courrier = () => {
  // State for form inputs
  const [senderName, setSenderName] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [courierSize, setCourierSize] = useState("Moyenne");
  const [senderPhone, setSenderPhone] = useState("");
  const [recipientPhone, setRecipientPhone] = useState("");
  const [notifyRecipient, setNotifyRecipient] = useState(false);
  const [setOffPlace, setSetOffPlace] = useState("Yaoundé");
  const [deliveryPlace, setDeliveryPlace] = useState("Douala");
  const [destination, setDestination] = useState("");

  // Modal state for modifying locations
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Default price
  const price = 5000;

  // Function to open modal
  const openModal = () => setIsModalOpen(true);

  // Function to close modal
  const closeModal = () => setIsModalOpen(false);

  // Function to handle location changes in modal
  const handleLocationChange = () => {
    setSetOffPlace("Douala");
    setDeliveryPlace("Kribi");
    setDestination("Paris");
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${courrierIm})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Service Courrier</h1>
          <p className="text-lg">
            Envoyez vos Courrier en toute simplicité et sécurité
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
          Détails du Courrier
        </h2>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
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
            <label className="text-lg ml-2">
              Notifier le destinataire du statut du Courrier
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
              Valider et Payer
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Modifying Locations */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Modifier l'Envoi</h3>
            <div className="mb-4">
              <label className="block text-lg mb-2">Lieu de départ:</label>
              <input
                type="text"
                value={setOffPlace}
                onChange={(e) => setSetOffPlace(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">Lieu de destination:</label>
              <input
                type="text"
                value={deliveryPlace}
                onChange={(e) => setDeliveryPlace(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2">Destination:</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="bg-gray-300 py-2 px-6 rounded-lg"
              >
                Annuler
              </button>
              <button
                onClick={handleLocationChange}
                className="bg-blue-600 text-white py-2 px-6 rounded-lg"
              >
                Modifier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courrier;
