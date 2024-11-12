import React from 'react';

const Contact = () => {
  return (
    <div className="flex h-screen bg-white">
      {/* Section Gauche */}
      <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-10">
        <h1 className="text-3xl font-bold">TRAVEL</h1>
        <p className="mt-4">TRAVEL</p>
        <button className="mt-8 p-2 bg-white text-blue-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Section Droite */}
      <div className="w-1/2 flex flex-col items-center justify-center p-10">
        <h2 className="text-2xl font-bold text-blue-600">CONTACT US!</h2>
        <p className="text-gray-600 mt-2 mb-8">Talk or send any problem</p>
        
        <form className="w-full max-w-md space-y-4">
          <div>
            <label className="text-gray-600 font-semibold block mb-1">NAME</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg bg-blue-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-gray-600 font-semibold block mb-1">TEXT</label>
            <textarea
              placeholder="Your message"
              className="w-full px-4 py-2 border rounded-lg bg-blue-100 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;