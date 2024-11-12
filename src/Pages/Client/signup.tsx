import React from 'react';

const SignUp = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Inscription</h2>
        <form className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="Nom complet"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Adresse email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition duration-300"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;