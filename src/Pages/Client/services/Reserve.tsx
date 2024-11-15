import { Link } from "react-router-dom";
import { FaShieldAlt, FaCouch, FaClock } from "react-icons/fa";
import buses from "@/assets/images/buses.jpg";
import busMaster from "@/assets/images/Bus_VIP.png"
import busClassic from "@/assets/images/busClassic.jpg"
import busVip from "@/assets/images/busVipvrai.jpg"

const Reserve = () => {
  const classes = [
    {
      name: "Classique",
      description: "Confort basique avec un tarif économique",
      image: busClassic,
      link: "/services/reservation/classique", // Ensure the link path is lowercase
    },
    {
      name: "Classe VIP",
      description: "Confort amélioré avec sièges inclinables",
      image: busVip,
      link: "/services/reservation/VIP", // Ensure the link path is lowercase
    },
    {
      name: "Master Classe",
      description: "Sièges larges, service premium et confort de luxe",
      image: busMaster,
      link: "/services/reservation/Master", // Ensure the link path is lowercase
    },
  ];

  const trajets = [
    {
      trajet: "Yaoundé - Douala",
      tarifs: [
        { className: "Classique", price: "3000 FCFA" },
        { className: "Classe VIP", price: "5000 FCFA" },
        { className: "Master Classe", price: "10000 FCFA" },
      ],
    },
    {
      trajet: "Yaoundé - Kribi",
      tarifs: [
        { className: "Classique", price: "3000 FCFA" },
        { className: "Classe VIP", price: "6000 FCFA" },
        { className: "Master Classe", price: "10000 FCFA" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative h-80 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${buses})`}}
      >
        <div className="absolute inset-0 bg-black opacity-50" />{" "}
        {/* Dark overlay for text visibility */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-4xl font-bold mb-4">
            Réservez votre billet de bus en ligne
          </h1>
          <p className="text-lg">
            Choisissez votre classe et réservez facilement en quelques clics.
          </p>
        </div>
      </div>

      {/* Bus Classes Section */}
      <section className="py-12 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Nos Classes de Voyage
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Link
              to={classItem.link}
              key={index}
              className="transition-transform transform hover:scale-105"
            >
              <div className="relative rounded-xl shadow-lg overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75" />
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="text-2xl font-semibold">{classItem.name}</h3>
                  <p className="text-sm">{classItem.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trajets et Tarifs Section */}
      <section className="py-12 px-4 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Trajets et Tarifs
        </h2>
        <div className="space-y-8">
          {trajets.map((trajet, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {trajet.trajet}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {trajet.tarifs.map((tarif, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                  >
                    <span className="text-gray-700">{tarif.className}</span>
                    <span className="font-semibold text-blue-600">
                      {tarif.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi Voyager Avec Nous Section */}
      <section className="py-12 px-4 md:px-20 bg-gradient-to-r from-purple-100 to-blue-100">
        <h2 className="text-2xl font-bold text-center mb-8">
          Pourquoi voyager avec nous ?
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg w-72">
            <FaShieldAlt className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sécurité</h3>
            <p className="text-gray-600">
              Nos véhicules sont régulièrement entretenus pour assurer votre
              sécurité en route.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg w-72">
            <FaCouch className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Confort</h3>
            <p className="text-gray-600">
              Profitez d'un voyage confortable avec des sièges inclinables et
              des espaces généreux.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 text-center bg-white rounded-lg shadow-lg w-72">
            <FaClock className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fiabilité</h3>
            <p className="text-gray-600">
              Voyagez en toute confiance avec des départs ponctuels et un
              service fiable.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reserve;
