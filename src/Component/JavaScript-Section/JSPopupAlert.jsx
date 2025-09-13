import React, { useState } from "react";

const JSAlertBOM = () => {
  const [output, setOutput] = useState("Click the button to see an alert popup...");

  const handleAlert = () => {
    // ✅ Show alert popup
    window.alert("This is a BOM alert popup!");

    setOutput("An alert popup was displayed using window.alert().");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Alert Popup in <span className="text-green-600">BOM (Browser Object Model)</span>
      </h1>

      <p className="text-gray-700">
        The <strong>alert()</strong> method of the <strong>window</strong> object creates a
        popup dialog displaying a message to the user. It is a simple way to provide notifications
        or messages in the browser.
      </p>

      <button
        onClick={handleAlert}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Show Alert
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800">
        {output}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// Show a simple alert popup
window.alert("This is a BOM alert popup!");`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>window.alert(message):</strong> Displays a popup dialog with the provided message.
        </li>
        <li>
          It pauses the execution of JavaScript until the user clicks "OK".
        </li>
        <li>
          Useful for simple notifications, warnings, or debugging messages.
        </li>
        <li>
          Part of the <strong>window</strong> object in the BOM.
        </li>
      </ul>
    </div>
  );
};

export default JSAlertBOM;