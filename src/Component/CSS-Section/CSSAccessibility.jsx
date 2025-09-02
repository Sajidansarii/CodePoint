import React from "react";

const AccessibleCard = () => {
  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">Accessible CSS Example</h1>

      <div className="bg-white border border-gray-300 p-4 rounded shadow-md">
        <h2 className="text-xl font-semibold text-gray-900">
          Accessibility Matters
        </h2>
        <p className="text-gray-700">
          This card uses high contrast, semantic headings, and focus styles for
          better accessibility.
        </p>
        <a
          href="#"
          className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AccessibleCard;