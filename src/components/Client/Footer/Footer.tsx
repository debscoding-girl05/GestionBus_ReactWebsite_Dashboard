import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Importing Link for routing

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#6A1B9A] via-[#8E24AA] to-[#9C4D99] text-white py-10 mt-10 bottom-0">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-semibold text-white">MonSite</h1>
            <p className="mt-2 text-sm text-white">
              Votre solution digitale complète. Nous facilitons votre
              expérience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-gray-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-gray-200">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#" className="hover:text-gray-200">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-200">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">
              Abonnez-vous à notre newsletter
            </h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Votre e-mail"
                className="w-full p-3 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-[#6A1B9A] px-6 rounded-r-lg font-semibold hover:bg-gray-200 transition"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
