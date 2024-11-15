// src/pages/Profile.tsx
import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <img
          src="https://github.com/shadcn.png"
          alt="Profile Avatar"
          className="w-32 h-32 rounded-full border-4 border-indigo-600 mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
        <p className="text-gray-500">john.doe@example.com</p>
      </div>

      <div className="space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Personal Information
          </h2>
          <p>
            <strong>Username:</strong> JohnDoe123
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
          <p>
            <strong>Joined:</strong> January 2023
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Booked a reservation on November 10, 2024</li>
            <li>Updated profile information on October 15, 2024</li>
            <li>Added a new payment method on September 20, 2024</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Account Settings
          </h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Change Password
            </button>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition">
              Edit Profile
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition">
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
