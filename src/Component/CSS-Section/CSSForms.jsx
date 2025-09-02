import React from "react";

const CssForms = () => {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">CSS Forms</h1>
      <p className="mb-4">
        Forms are styled with CSS to make them more readable and user-friendly.
      </p>

      <form className="space-y-4 bg-white shadow-md rounded-lg p-6">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">
            Message:
          </label>
          <textarea
            id="message"
            placeholder="Type here..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CssForms;