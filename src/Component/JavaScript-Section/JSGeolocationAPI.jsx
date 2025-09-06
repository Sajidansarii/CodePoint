import React, { useState } from "react";

const JSGeolocationAPI = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // ✅ Function to get location
  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      (err) => {
        setError("❌ " + err.message);
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Geolocation API in <span className="text-green-600">JavaScript</span>
      </h1>

      <p className="text-gray-700">
        The <strong>Geolocation API</strong> allows web applications to access the
        geographical location (latitude & longitude) of a device. 
        It is commonly used in mapping apps, weather apps, and navigation systems.
      </p>

      <button
        onClick={getLocation}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Get My Location
      </button>

      <div className="p-4 bg-gray-100 rounded-md font-mono text-gray-800">
        {location && (
          <div>
            📍 Latitude: {location.latitude}
            <br />
            📍 Longitude: {location.longitude}
          </div>
        )}
        {error && <span className="text-red-600">{error}</span>}
      </div>

      <h2 className="text-2xl font-semibold text-gray-800">Code Example:</h2>
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
{`// ✅ Check if geolocation is supported
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);
    },
    (error) => {
      console.error("Error:", error.message);
    }
  );
} else {
  console.log("Geolocation is not supported by this browser.");
}`}
      </pre>

      <h2 className="text-2xl font-semibold text-gray-800">Explanation:</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>
          <code>navigator.geolocation</code> → Checks if the browser supports geolocation.
        </li>
        <li>
          <code>getCurrentPosition(success, error)</code> → Fetches the current position of the user.
        </li>
        <li>
          <strong>success callback</strong> → Receives <code>coords.latitude</code> and <code>coords.longitude</code>.
        </li>
        <li>
          <strong>error callback</strong> → Handles denied permission or errors.
        </li>
        <li>
          Requires user permission in the browser (will show a prompt).
        </li>
      </ul>
    </div>
  );
};

export default JSGeolocationAPI;