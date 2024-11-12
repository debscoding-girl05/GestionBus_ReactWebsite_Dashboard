import React from 'react';

const SignUp = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gray-200">
      <img src="/path/to/logo.png" alt="Travel Logo" className="w-24 h-24 mb-4" />
      <h2 className="text-2xl font-bold text-purple-700 mb-4">Sign up</h2>
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <form className="space-y-4">
          <div>
            <label className="text-gray-700 font-semibold">Username *</label>
            <input
              type="text"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Number *</label>
            <input
              type="text"
              placeholder="Enter your number"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="text-gray-700 font-semibold">Password *</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 text-white font-bold rounded-lg hover:bg-purple-800 transition duration-300"
            >
            Sign up
          </button>
        </form>
        <div className="text-center mt-4 text-gray-600">
          I have an account?{' '}
          <span className="text-purple-700 font-semibold cursor-pointer">Log in</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
