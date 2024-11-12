import * as React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; 

const faqs = [
  {
    question: "Comment puis-je créer un compte ?",
    answer:
      "Pour créer un compte, cliquez sur le bouton 'S'inscrire' et suivez les instructions.",
  },
  {
    question: "Quels sont vos modes de paiement ?",
    answer:
      "Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire.",
  },
  {
    question: "Puis-je modifier mon profil après inscription ?",
    answer:
      "Oui, vous pouvez modifier votre profil à tout moment en vous rendant dans les paramètres de votre compte.",
  },
  {
    question: "Comment contacter le support client ?",
    answer:
      "Vous pouvez contacter notre support client via l'onglet 'Contact' dans votre espace utilisateur.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-between items-start space-x-8 p-10">
      {/* FAQ Section */}
      <div className="w-1/2 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-md hover:bg-gray-100 transition "
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FaMinus className="w-6 h-6 text-gray-500" />
              ) : (
                <FaPlus className="w-6 h-6 text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Question Form Section */}
      <div className="w-1/3 bg-gradient-to-r from-[#E0F7FA] to-[#D1C4E9] p-6 rounded-xl shadow-md mr-2.5">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Avez-vous une question ?
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Votre e-mail
            </label>
            <input
              type="email"
              id="email"
              placeholder="Votre e-mail"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="question"
              className="block text-sm font-semibold text-gray-700"
            >
              Votre question
            </label>
            <textarea
              id="question"
              placeholder="Posez votre question ici"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Soumettre
          </button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
