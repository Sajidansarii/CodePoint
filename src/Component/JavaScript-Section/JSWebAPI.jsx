import React, { useState } from "react";

const JSWebAPI = () => {
  const [message, setMessage] = useState("Click a button to use a Web API...");

  // ✅ Example: Using Geolocation API
  const getLocation = () => {
    if (navigator.geolocation) {
      setMessage("⏳ Fetching location...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setMessage(
             `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
          );
        },
        (error) => {
          setMessage( `Error: ${error.message}`);
        }
      );
    } else {
      setMessage(" Geolocation is not supported by your browser.");
    }
  };

  // ✅ Example: Using LocalStorage API
  const saveData = () => {
    localStorage.setItem("username", "CodePoint");
    setMessage("✅ Username saved in LocalStorage!");
  };

  const getData = () => {
    const user = localStorage.getItem("username");
    setMessage(user ? ` Username: ${user}` : " No data found in LocalStorage");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-medium text-blue-500">
        Web APIs in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        A <strong>Web API</strong> is a set of built-in browser methods that allow 
        interaction with the browser and external services. JavaScript can use 
        these APIs to perform tasks like storing data, fetching data, accessing 
        user location, manipulating DOM, and more.
      </p>

      <div className="space-x-2">
        <button
          onClick={getLocation}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Get Location (Geolocation API)
        </button>
        <button
          onClick={saveData}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Save Data (LocalStorage API)
        </button>
        <button
          onClick={getData}
          className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
        >
          Get Data (LocalStorage API)
        </button>
      </div>

      <div className="p-4 bg-gray-100 rounded-md font-semibold text-gray-800 whitespace-pre-line">
        {message}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ Geolocation API
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log("Latitude:", position.coords.latitude);
    console.log("Longitude:", position.coords.longitude);
  },
  (error) => {
    console.error("Error:", error.message);
  }
);

// ✅ LocalStorage API
localStorage.setItem("username", "CodePoint"); // Save data
console.log(localStorage.getItem("username")); // Get data`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <strong>Web APIs</strong> are provided by the browser to extend JavaScript capabilities.
        </li>
        <li>
          Examples include: <code>DOM API</code>, <code>Geolocation API</code>, <code>Fetch API</code>, <code>LocalStorage API</code>, etc.
        </li>
        <li>
          <strong>Geolocation API</strong>: Gets the user's current location (latitude & longitude).
        </li>
        <li>
          <strong>LocalStorage API</strong>: Stores key-value pairs in the browser that persist even after refresh.
        </li>
        <li>
          Web APIs make JavaScript more powerful by enabling interaction with the browser and system resources.
        </li>
      </ul>
    </div>
  );
};

export default JSWebAPI;