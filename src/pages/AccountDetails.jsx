import React from "react";
import { FaBoxOpen } from 'react-icons/fa'; // Importing Font Awesome icon

function AccountDetails() {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="mb-4 flex flex-wrap">
        <div className="w-full md:w-1/2 md:pr-2">
          <label htmlFor="firstName" className="block font-semibold text-gray-700">
            First name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-2">
          <label htmlFor="lastName" className="block font-semibold text-gray-700">
            Last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border rounded-md"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="displayName" className="block font-semibold text-gray-700">
          Display name
        </label>
        <input
          type="text"
          id="displayName"
          className="w-full p-2 border rounded-md"
          placeholder="Enter your display name"
        />
        <p className="text-gray-500 text-sm mt-1">
          This will be how your name will be displayed in the account section and in reviews
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-semibold text-gray-700">
          Email address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border rounded-md"
          placeholder="Enter your email address"
          defaultValue="abb@gmail.com"
          required
        />
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-gray-700 mb-2">Password change</h2>
        <input
          type="password"
          id="currentPassword"
          className="w-full p-2 border rounded-md mb-2"
          placeholder="Current password (leave blank to leave unchanged)"
        />
        <input
          type="password"
          id="newPassword"
          className="w-full p-2 border rounded-md mb-2"
          placeholder="New password (leave blank to leave unchanged)"
        />
        <input
          type="password"
          id="confirmNewPassword"
          className="w-full p-2 border rounded-md"
          placeholder="Confirm new password"
        />
      </div>
      <button
        className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
        type="submit"
      >
        SAVE CHANGES
      </button>
    </div>
  );
}

export default AccountDetails;
