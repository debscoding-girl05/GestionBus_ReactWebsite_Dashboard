import image3 from "../../../assets/images/bus.jpg";
import {
  AiOutlineSafety,
  AiOutlineClockCircle,
  AiOutlineCustomerService,
} from "react-icons/ai";

const Portfolio = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="mb-10 w-full ml-60">
        <h2 className="font-extrabold text-3xl text-left">
          Pourquoi Nous Choisir
        </h2>
        <p className="font-medium mt-3 max-w-xl text-left items-start">
          Nous avons une longue durée dans le domaine du transport.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 w-full max-w-6xl px-4">
        {/* Left Section with Criteria Items */}
        <div className="space-y-8 max-w-lg">
          {/* First Criterion */}
          <div className="flex items-start gap-4">
            <AiOutlineSafety className="w-12 h-12 text-purple-600" />
            <div>
              <h3 className="text-2xl font-semibold">Sécurité et Support</h3>
              <p className="mt-2 text-gray-600">
                Nous assurons un haut niveau de sécurité pour tous nos clients
                et offrons un support continu.
              </p>
            </div>
          </div>

          {/* Second Criterion */}
          <div className="flex items-start gap-4">
            <AiOutlineClockCircle className="w-12 h-12 text-purple-600" />
            <div>
              <h3 className="text-2xl font-semibold">Disponibilité</h3>
              <p className="mt-2 text-gray-600">
                Nos services sont disponibles 24/7, pour répondre à tous vos
                besoins de transport.
              </p>
            </div>
          </div>

          {/* Third Criterion */}
          <div className="flex items-start gap-4">
            <AiOutlineCustomerService className="w-12 h-12 text-purple-600" />
            <div>
              <h3 className="text-2xl font-semibold">Service Client</h3>
              <p className="mt-2 text-gray-600">
                Un service client dédié pour garantir une expérience agréable et
                sans stress.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="flex-shrink-0 mt-6 md:mt-0 md:self-start md:ml-auto">
          <img
            src={image3}
            alt="Transport Fleet"
            className="rounded-full w-80 h-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
