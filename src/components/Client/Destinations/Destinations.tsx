import React from "react";
import image1 from "../../../assets/images/image1.jpeg";
import { TiLocation } from "react-icons/ti";

const Destinations = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-7 mb-4">
      {/* Section Tags */}
      <div className="secMenu mb-8 text-center">
        <ul className="flex justify-center space-x-8 text-lg font-semibold">
          <li className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full cursor-pointer transition duration-300 hover:bg-blue-600 hover:text-white">
            Grand-Sud
          </li>
          <li className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full cursor-pointer transition duration-300 hover:bg-blue-600 hover:text-white">
            Grand-Nord
          </li>
        </ul>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-lg transition duration-300 group hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={image1}
              alt="Destination"
              className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
            />

            {/* Overlay Text */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent text-white p-4 opacity-90 flex justify-between items-center">
              <p className="flex items-center text-sm md:text-base">
                <TiLocation className="mr-1 text-xl" />
                Kribi
              </p>
              <span className="text-sm md:text-base font-semibold">Plage</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
